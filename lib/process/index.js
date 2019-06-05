/* global requestAnimationFrame */
import { EventEmitter } from 'events'
const TWEEN = require('@tweenjs/tween.js')

function cout (value) {
  console.log(value.x)
}

// init TWEEN.
function animate (time) {
  requestAnimationFrame(animate)
  TWEEN.update(time)
}

class Process extends EventEmitter {
  constructor ({ rootEl = document.body, showNumber = false, initNumber = 0, callback = cout, TWEENSet = false }) {
    super()
    if (!TWEENSet) {
      requestAnimationFrame(animate)
    }
    this.rootEl = rootEl
    let Xnumber = 0
    let Xmsg = ''
    let pcObj = { x: 0 }
    let processBar = document.createElement('div')
    let processEntity = document.createElement('div')
    let processMsg = document.createElement('div')
    let numberSpan = document.createElement('span')
    processBar.classList.add('process-wrap')
    processEntity.classList.add('process-entity')
    processMsg.classList.add('process-msg')
    let tween = new TWEEN.Tween(pcObj)
      .easing(TWEEN.Easing.Cubic.Out)
      .onUpdate(function () {
        processEntity.style.width = 'calc(' + parseInt(pcObj.x) + '% - 6px)'
        numberSpan.innerText = parseInt(pcObj.x) + '%'
      })
    numberSpan.classList.add('number-span')
    processBar.appendChild(processEntity)
    processBar.appendChild(processMsg)
    if (showNumber) {
      rootEl.appendChild(numberSpan)
    }
    rootEl.appendChild(processBar)
    rootEl.appendChild(numberSpan)
    // 设置字体的mvvm
    Object.defineProperty(this, 'number', {
      set (value) {
        if (value > 100) {
          value = 100
        }
        Xnumber = value
        if (value === 100) {
          tween.to({ x: value }, 100).onComplete(callback).start()
        } else if (value < 100 && value >= 0) {
          tween.to({ x: value }, 100).start()
        }
      },
      get () {
        return Xnumber
      }
    })
    // 设置加载消息
    Object.defineProperty(this, 'msg', {
      set (value) {
        Xmsg = value
        processMsg.innerText = value
      },
      get () {
        return Xmsg
      }
    })
    this.number = initNumber
  }
  // 隐藏
  hide () {
    this.rootEl.style.display = 'none'
  }
  // 显示
  show () {
    this.rootEl.style.display = 'block'
  }
}

module.exports = Process
