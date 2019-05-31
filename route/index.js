// 使用import.then来懒加载其他页面
const map = {
  'welcome': {
    page: require('../pages/welcome/index.html'),
    script: require('../pages/welcome/index.js'),
    isHomepage: true
  },
  'pingpong': {
    page: import('../pages/pingpong/index.html').then(function (value) {
      map.pingpong.page = value
    }),
    script: import('../pages/pingpong/index.js').then(function (value) {
      map.pingpong.script = value
    }),
  }
}

module.exports = require('../lib/router')({ appId: 'app', paths: map })
