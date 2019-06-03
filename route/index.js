// 使用import.then来懒加载其他页面
const map = {
  'welcome': {
    page: require('/pages/welcome/index.html'),
    script: require('/pages/welcome/index.js'),
    isHomepage: true
  },
  'pingpong': {
    page: import('/pages/pingpong/index.html'),
    script: import('/pages/pingpong/index.js')
  },
  'lifegame': {
    page: import('/pages/lifegame/index.html'),
    script: import('/pages/lifegame/index.js'),
    github: 'https://github.com/stupppid/lifegame'
  },
  '3d-word-rain': {
    page: import('/pages/3d-word-rain/index.html'),
    script: import('/pages/3d-word-rain/index.js'),
    github: 'https://github.com/stupppid/3d-word-rain'
  },
  'oldTV': {
    page: import('/pages/oldTV/index.html'),
    script: import('/pages/oldTV/index.js'),
    github: 'https://github.com/stupppid/oldTV'
  }
}

module.exports = require('../lib/router')({ appId: 'app', paths: map })
