const map = {
  'welcome': {
    page: require('./pages/welcome/index.html'),
    script: require('./pages/welcome/index.js')
  },
  'pingpong': {
    page: require('./pages/pingpong/index.html'),
    script: require('./pages/pingpong/index.js')
  }
}

module.exports = require('./lib/router')({ appId: 'app', paths: map })
