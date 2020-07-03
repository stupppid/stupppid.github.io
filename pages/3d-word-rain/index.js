const wordRain = require('3d-word-rain')
let rain
let index = function () {
  const rootElement = document.querySelector('div[page=\'3d-word-rain\']')
  if (rain && rain.scene) {
    rootElement.appendChild(rain.renderer.domElement)
    rain.start()
  } else {
    wordRain.rain('/static/font/Arial_Bold.json', rootElement)
    rain = wordRain.rain
  }
}

index.beforeLeave = function () {
  rain.stop()
}

module.exports = index
