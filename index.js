const routes = require('./route/index')
const router = routes.router
const maps = routes.raw
const config = require('./config')

function setGitAddrStyle (pathInfo) {
  // gitAddr.innerText = pathInfo.github
  gitAddr.href = pathInfo.github
  gitAddr.style.color = pathInfo.githubAddressColor || config.githubAddressDefaultColor
}

function beforeEnter ({ path, pathInfo, event }) {
  if (pathInfo.github) {
    setGitAddrStyle(pathInfo)
  } else {
    setGitAddrStyle({ github: ':javascript:void(0);' })
  }
}

const gitAddr = document.getElementById('githubAddress')
router.on('beforeEnter', beforeEnter)

// welcome page
!(function () {
  let flag = false
  for (let key in maps) {
    if (key === window.location.hash.substr(1)) {
      beforeEnter({ pathInfo: maps[key] })
      router.show(key)
      flag = true
      break
    }
  }
  if (!flag) {
    router.go('welcome')
  }
}())
