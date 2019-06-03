const throttle = require('lodash/throttle')
const Snow = require('../../lib/snow/index')
const Process = require('../../lib/process/index')

let snow, process

function initSnow () {
  snow = new Snow('welcomePage')
  window.snow = snow
  snow.open()
}

function initProcess () {
  process = new Process({
    rootEl: document.getElementById('process'),
    showNumber: true,
    TWEENSet: false,
    callback: function () {
      snow.close(function () {
        require('../../route').go('oldTV')
      })
      document.getElementById('hr').remove()
    }
  })
  process.on('process', function (value) {
    process.number += value.number
    process.msg = value.msg
  })
}

function index () {
  initSnow()
  initProcess()
  const sg = document.querySelector('#welcomePage').getElementsByClassName('snow-group')[0]
  const sgBaseTransform = 'perspective(3000px) translate3d(0px, 0px, 300px) '
  sg.style.transform = sgBaseTransform
  document.getElementById('welcomePage').addEventListener('mousemove', throttle(function (e) {
    sg.style.transform = sgBaseTransform + 'rotate3d(' + [(sg.clientHeight / 2 - e.clientY) / sg.clientHeight, (e.clientX - sg.clientWidth / 2) / sg.clientWidth, 0].join(',') + ',5deg) '
  }, 50))
  //
  // import('three').then(value => process.emit('process', {
  //   msg: 'module three.js loaded',
  //   number: 30
  // }))
  // import('ammo.js').then(value => process.emit('process', {
  //   msg: 'module ammo.js loaded',
  //   number: 70
  // }))
}

module.exports = index
