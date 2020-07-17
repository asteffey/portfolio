import { useState, useEffect } from 'react'

const toId = (name: string) => escape(name.split(' ').join('_').toLowerCase())

const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/projects.json`)
      .then(response => response.json())
      .then((data: Project[]) => {
        setProjects(
          data.map(({ name, ...other }) => ({
            ...other,
            id: toId(name),
            name
          }))
        )
      }).catch(error => console.error(error))
  }, [])

  return projects
}

export default useProjects
