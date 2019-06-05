const wordRain = require('3d-word-rain')
module.exports = function () {
  if (window.rain) {
  }
  wordRain.rain('./static/font/Arial_Bold.json', document.querySelector('div[page=\'3d-word-rain\']'))
}
