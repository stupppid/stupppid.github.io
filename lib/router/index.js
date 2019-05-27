let root = document.createElement('template')
let pageDom = null
let lastPath = ''

function router ({ appId = 'app', paths }) {
  window.addEventListener('hashchange', function (e) {
    route.go(e.newURL.substr(e.newURL.indexOf('#') + 1))
  })
  const route = {}
  route.go = function (path) {
    if (!paths[path] && lastPath === path) {
      return
    }
    lastPath = path
    root.innerHTML = paths[path].page
    if (pageDom) {
      pageDom.remove()
    }
    document.getElementById(appId).appendChild(document.importNode(root.content, true))
    pageDom = document.querySelector('div[page=' + path + ']')
    paths[path].script()
  }

  return route
}

module.exports = router
