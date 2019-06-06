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
      createDisplayItem.call(container, { name: key, info: maps[key] })
    }
  }
  document.getElementById('bottomPanel').insertBefore(container, document.getElementById('process'))
}

function createDisplayItem ({ name, info }) {
  let container = document.createElement('div')
  let item = document.createElement('a')
  container.classList.add('display-item')
  container.appendChild(item)
  item.href = '#' + name
  let title = document.createElement('div')
  title.classList.add('title')
  title.innerText = name
  item.appendChild(title)
  if (info.picture) {
    let loading = document.createElement('div')
    loading.classList.add('loading')
    loading.appendChild(document.createElement('div'))
    container.appendChild(loading)
    item.style.background = 'url(' + info.picture + ')'
  } else {
    let noImg = document.createElement('h1')
    noImg.classList.add('no-image')
    noImg.innerText = 'NO IMAGE'
    item.appendChild(noImg)
  }
  this.appendChild(container)
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
