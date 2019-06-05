// 使用import.then来懒加载其他页面, 但是必须指定文件名才行，parcel不支持动态变量引入
// todo 可以用node脚本来让这一块写的方便点
const map = {
  'welcome': {
    page: require('/pages/welcome/index.html'),
    script: require('/pages/welcome/index.js'),
    github: 'https://github.com/stupppid/stupppid.github.io',
    isHomepage: true
  },
  'pingpong': {
    page: import('/pages/pingpong/index.html'),
    script: import('/pages/pingpong/index.js'),
    display: true,
  },
  'lifegame': {
    page: import('/pages/lifegame/index.html'),
    script: import('/pages/lifegame/index.js'),
    github: 'https://github.com/stupppid/lifegame',
    githubAddressColor: 'black',
    display: true
  },
  '3d-word-rain': {
    page: import('/pages/3d-word-rain/index.html'),
    script: import('/pages/3d-word-rain/index.js'),
    github: 'https://github.com/stupppid/3d-word-rain',
    display: true,
    picture: require('/pages/3d-word-rain/index.gif')
  },
  'oldTV': {
    page: import('/pages/oldTV/index.html'),
    script: import('/pages/oldTV/index.js'),
    github: 'https://github.com/stupppid/oldTV',
    display: true,
    picture: require('/pages/oldTV/index.gif')
  }
}

module.exports = {
  router: require('../lib/router')({appId: 'app', paths: map}),
  raw: map
}
