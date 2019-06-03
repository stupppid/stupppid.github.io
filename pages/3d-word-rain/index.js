const wordRain = require('3d-word-rain')
module.exports = function () {
  wordRain.rain('./static/Arial_Bold.json', document.querySelector('div[page=\'3d-word-rain\']'))
}
