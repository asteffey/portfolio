(this.webpackJsonpfreecodecamp=this.webpackJsonpfreecodecamp||[]).push([[0],{16:function(n,e,t){n.exports=t(23)},23:function(n,e,t){"use strict";t.r(e);var i=t(0),a=t.n(i),o=t(7),r=t.n(o),c=t(1),l=t(2),s=t(8),m=t.n(s),u=t(9),h=t.n(u);function p(){var n=Object(c.a)(["\n  position: absolute;\n  bottom: 0.9375em;\n  height: 1.875em;\n  line-height: 1.875em;\n  display: flex;\n  \n  a {\n    display: flex;\n    text-decoration: none;\n    margin-right: 1.25em;\n    color: black;\n    font-weight: 700;\n  }\n  a:hover {\n    color: #e31b3c;\n  }\n  \n  a > img {\n    height: 1.875em;\n    width: 1.875em;\n    margin-right: 0.375em;\n  }\n  a:hover > img {\n    filter: invert(20%) sepia(89%) saturate(3056%) hue-rotate(338deg) brightness(89%) contrast(100%);\n  }\n"]);return p=function(){return n},n}function d(){var n=Object(c.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  background-color: #eee;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 1.25em 1.25em;\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n  \n  h3 {\n    margin: 3px;\n    font-size: 1.5em;\n  }\n  \n  h4 {\n    margin: 0.3125em;\n    font-style: oblique;\n    color: #334;\n    font-weight: 500;\n  }\n  \n  p {\n    font-weight: 600;\n    font-size: 0.9em;\n  }\n"]);return d=function(){return n},n}function f(){var n=Object(c.a)(["\n  display: block;\n  width: 90vw;\n  height: 67.5vw;\n  max-width: 400px;\n  max-height: 300px;\n  margin: 3px;\n  padding: 0;\n  position: relative;\n  border: 2px ridge rgba(0, 0, 0, 0.3);\n  \n  >h3 {\n    display: block;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    z-index: 5;\n    width: 100%;\n    text-shadow: 0 0 0.1em #FFF, 0 0 0.2em #FFF, 0 0 0.3em #FFF, 0 0 0.4em #FFF;\n    color: #113;\n    font-size: 1.5em;\n  }\n}\n  \n  >img {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: 2;\n    width: 100%;\n    height: 100%;\n    margin: 0;\n    padding: 0;\n    visibility: visible;\n    opacity: 1;\n    transition: visibility 0.3s, opacity 0.3s linear;\n  }\n  \n  :hover>img, :hover>h3,\n  :active>img, :active>h3 {\n      visibility: hidden;\n      opacity: 0;\n  }\n"]);return f=function(){return n},n}var g=l.a.div(f()),b=l.a.div(d()),v=l.a.div(p()),w=function(n){var e=n.id,t=n.name,i=n.tags,o=n.website,r=n.github,c=n.description;return console.log(e),a.a.createElement(g,null,a.a.createElement("h3",null,t),a.a.createElement("img",{src:"".concat("/portfolio","/images/screenshots/").concat(e,".png"),alt:t}),a.a.createElement(b,null,a.a.createElement("h3",null,t),a.a.createElement("h4",null,i.join(", ")),a.a.createElement("p",null,c),a.a.createElement(v,null,a.a.createElement("a",{href:r,target:"_blank",rel:"noopener noreferrer"},a.a.createElement("img",{src:h.a,alt:"View source at GitHub"}),"View Source"),o&&a.a.createElement("a",{href:o,target:"_blank",rel:"noopener noreferrer"},a.a.createElement("img",{src:m.a,alt:"Link to site"}),"View Site"))))},x=t(14),E=t(15),y=t(13),j=function(n){return escape(n.split(" ").join("_").toLowerCase())},k=function(){var n=Object(i.useState)([]),e=Object(y.a)(n,2),t=e[0],a=e[1];return Object(i.useEffect)((function(){fetch("".concat("/portfolio","/projects.json")).then((function(n){return n.json()})).then((function(n){a(n.map((function(n){var e=n.name,t=Object(E.a)(n,["name"]);return Object(x.a)({},t,{id:j(e),name:e})})))})).catch((function(n){return console.error(n)}))}),[]),t};function F(){var n=Object(c.a)(["\n  width: 1230px;\n  max-width: 100%;\n  margin: 20px auto;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  font-size: 3.56vw;\n\n  @media (min-width: 445px) {\n    font-size: 16px;\n  }\n"]);return F=function(){return n},n}var O=l.a.div(F()),z=function(){var n=k();return a.a.createElement(O,null,null===n||void 0===n?void 0:n.map((function(n,e){return a.a.createElement(w,Object.assign({key:e},n))})))};var S=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"Portfolio"),a.a.createElement(z,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(S,null)),document.getElementById("projects-section")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))},8:function(n,e,t){n.exports=t.p+"static/media/external-link.24b341b2.svg"},9:function(n,e,t){n.exports=t.p+"static/media/github.617870e4.svg"}},[[16,1,2]]]);
//# sourceMappingURL=main.a5624fdf.chunk.js.map