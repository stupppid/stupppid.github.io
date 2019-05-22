const Snow = require('./lib/snow/index')
const Process = require('./lib/process/index')

let snow = new Snow()
snow.open()

let process = new Process({
  rootEl: document.getElementById('process'),
  showNumber: true
})
window.process = process
