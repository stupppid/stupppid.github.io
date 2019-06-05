const throttle = require('lodash/throttle')
const Snow = require('../../lib/snow/index')
const Process = require('../../lib/process/index')

let snow, process

function createDisplayList (maps) {
  let container = document.createElement('div')
  container.classList.add('display-list')
  // container.style.filter = 'url(' + require('./assets/abc.svg') + '#f1)'
  for (let key in maps) {
    if (maps[key].display) {
      createDisplayItem.call(container, { name: key, picture: maps[key].picture })
    }
  }
  document.getElementById('bottomPanel').insertBefore(container, document.getElementById('process'))
}

function createDisplayItem ({ name, picture }) {
  let item = document.createElement('a')
  item.classList.add('display-item')
  item.href = '#' + name
  let title = document.createElement('div')
  title.classList.add('title')
  title.innerText = name
  item.appendChild(title)
  if (picture) {
    item.style.background = 'url(' + picture + ')'
  } else {
    let noImg = document.createElement('h1')
    noImg.classList.add('no-image')
    noImg.innerText = 'NO IMAGE'
    item.appendChild(noImg)
  }
  this.appendChild(item)
}

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
      // snow.close(function () {
      //   require('../../route/index').router.go('oldTV')
      // })
    }
  })
  process.hide()
  process.on('process', function (value) {
    process.number += value.number
    process.msg = value.msg
  })
}

function index () {
  createDisplayList(require('../../route/index').raw)
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
