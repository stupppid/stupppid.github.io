let root = document.createElement('template')
let pageDom = null
let lastPath = ''
const route = {}

function router ({ appId = 'app', paths }) {
  window.addEventListener('hashchange', function (e) {
    route.show(e.newURL.substr(e.newURL.indexOf('#') + 1))
  })
  route.show = function (path) {
    lastPath = path
    root.innerHTML = paths[path].page
    if (pageDom) {
      pageDom.remove()
    }
    document.getElementById(appId).appendChild(document.importNode(root.content, true))
    pageDom = document.querySelector('div[page=' + path + ']')
    paths[path].script()
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
