/* global $ */
require('n-zepto')
const throttle = require('lodash/throttle')
const Snow = require('./lib/snow/index')
const Process = require('./lib/process/index')

// welcome page
!(function () {
  // init snow
  let snow = new Snow('welcomePage')
  window.snow = snow
  snow.open()
  // init process
  let process = new Process({
    rootEl: document.getElementById('process'),
    showNumber: true,
    TWEENSet: false,
    callback: function () {
      snow.close()
      document.getElementById('hr').remove()
    }
  })

  const sg = $('#welcomePage .snow-group')[0]
  const sgBaseTransform = 'perspective(3000px) translate3d(0px, 0px, 300px) '
  sg.style.transform = sgBaseTransform
  document.getElementById('welcomePage').addEventListener('mousemove', throttle(function (e) {
    sg.style.transform = sgBaseTransform + 'rotate3d(' + [(sg.clientHeight / 2 - e.clientY) / sg.clientHeight, (e.clientX - sg.clientWidth / 2) / sg.clientWidth, 0].join(',') + ',5deg) '
  }, 50))

  function test () {
    process.number += Math.random() * 10
    if (process.number < 100) {
      setTimeout(test, 1000)
    }
  }
  setTimeout(test)
}())
