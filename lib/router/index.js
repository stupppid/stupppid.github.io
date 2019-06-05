const EventEmitter = require('events').EventEmitter
let root = document.createElement('template')
let pageDom = null
let lastPath = ''
const route = {}
let history = []
let prevScript = function () {}

function router ({ appId = 'app', paths }) {
  function runScript (path) {
    document.getElementById(appId).appendChild(document.importNode(root.content, true))
    pageDom = document.querySelector('div[page=\'' + path + '\']')
    if (typeof paths[path].script === 'function') {
      prevScript = paths[path].script
      paths[path].script()
    } else {
      paths[path].script.then(value => {
        prevScript = value
        value()
      })
    }
  }
  function run (value, path) {
    root.innerHTML = value
    prevScript.beforeLeave && prevScript.beforeLeave()
    runScript(path)
  }
  window.addEventListener('hashchange', function (e) {
    let path = e.newURL.substr(e.newURL.indexOf('#') + 1)
    if ((!paths[path] || lastPath === path) && pageDom !== null) {
      console.error('can not convert to this path: ' + path)
      return
    }
    route.emit('beforeEnter', {
      path,
      pathInfo: paths[path],
      event: e
    })
    route.show(path)
    route.emit('enter', {
      path,
      pathInfo: paths[path],
      event: e
    })
  })
  route.show = function (path) {
    history.push(lastPath)
    lastPath = path
    if (pageDom) {
      pageDom.remove()
    }
    if (typeof paths[path].page === 'string') {
      run(paths[path].page, path)
    } else {
      paths[path].page.then(value => {
        run(value, path)
      })
    }
  }
  route.go = function (path) {
    if ((!paths[path] || lastPath === path) && pageDom !== null) {
      console.error('can not convert to this path: ' + path)
      return
    }
    if (lastPath === '' && document.location.hash.substr(1) === path) {
      route.show(path)
    } else if (path === -1) {
      document.location.hash = history.pop()
    } else {
      document.location.hash = path
    }
  }
  route.history = history
  route.__proto__ = new EventEmitter()
  return route
}

module.exports = router
