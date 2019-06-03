let root = document.createElement('template')
let pageDom = null
let lastPath = ''
const route = {}

function router ({ appId = 'app', paths }) {
  function runScript (path) {
    document.getElementById(appId).appendChild(document.importNode(root.content, true))
    pageDom = document.querySelector('div[page=\'' + path + '\']')
    if (typeof paths[path].script === 'function') {
      paths[path].script()
    } else {
      paths[path].script.then(value => {
        value()
      })
    }
  }
  window.addEventListener('hashchange', function (e) {
    route.show(e.newURL.substr(e.newURL.indexOf('#') + 1))
  })
  route.show = function (path) {
    lastPath = path
    if (pageDom) {
      pageDom.remove()
    }
    if (typeof paths[path].page === 'string') {
      root.innerHTML = paths[path].page
      runScript(path)
    } else {
      paths[path].page.then(value => {
        root.innerHTML = value
        runScript(path)
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
    } else {
      document.location.hash = path
    }
  }

  return route
}

module.exports = router
