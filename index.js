const routes = require('./route/index')
const router = routes.router
const maps = routes.raw
const config = require('./config')

function setGitAddrStyle(pathInfo) {
  gitAddr.innerText = pathInfo.github
  gitAddr.href = pathInfo.github
  gitAddr.style.color = pathInfo.githubAddressColor || config.githubAddressDefaultColor
}

const gitAddr = document.getElementById('githubAddress')
router.on('beforeEnter', function ({ path, pathInfo, event }) {
  if (pathInfo.github) {
    setGitAddrStyle(pathInfo)
  } else {
    gitAddr.innerText = ''
    gitAddr.href = ''
  }
})

// welcome page
!(function () {
  let flag = false
  for (let key in maps) {
    if (key === window.location.hash.substr(1)) {
      router.show(key)
      setGitAddrStyle(maps[key])
      flag = true
      break
    }
  }
  if (!flag) {
    router.go('welcome')
  }
}())
