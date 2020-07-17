const fs = require('fs')
const puppeteer = require('puppeteer')
const jimp = require('jimp')

const WIDTH = 1000
const HEIGHT = 750

const THUMBNAIL = {
  WIDTH: 400,
  HEIGHT: 300
}

const TMP = 'tmp'
const PATH = 'public/images/screenshots'

const projects = JSON.parse(fs.readFileSync('public/projects.json'));

function toId (name) {
  return escape(name.split(' ').join('_').toLowerCase())
}

(async () => {
  const browser = await puppeteer.launch()
  async function getScreenShot(id, website) {
    const page = await browser.newPage()
    await page.goto(website.replace('?fcc-test', ''), { waitUntil: 'networkidle0' })
    await page.waitFor(1500)
    await page.setViewport({
      width: WIDTH,
      height: HEIGHT
    })
    const path = `${TMP}/${id}.png`
    await page.screenshot({ path })
    return path
  }

  for (const project of projects) {
    const id = toId(project.name)
    const path = (project.website && await getScreenShot(id, project.website)) || project.image
    if (path) {
      const img = await jimp.read(path)
      img.resize(THUMBNAIL.WIDTH, THUMBNAIL.HEIGHT)
        .write(`${PATH}/${id}.png`)
      console.log(`Saved image for ${id}`)
    } else {
      console.error(`Could not generate image for ${id}`)
    }
  }
  await browser.close()
})()
