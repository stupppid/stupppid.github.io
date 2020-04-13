const rattaConsole = require('ratta-console')
const ratta = require('ratta/src/index')

module.exports = function () {
  rattaConsole.viewRunner.run(ratta.store, document.body.querySelector('div[page=ratta-console]'))
}
