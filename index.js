require('./pages/welcome/index.html')
require('./pages/welcome/index.js')
const route = require('./route')
// welcome page
!(function () {
  route.go('welcome')
}())
