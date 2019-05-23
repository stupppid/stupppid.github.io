/* global requestAnimationFrame */
const TWEEN = require('@tweenjs/tween.js')

function cout (value) {
  console.log(value.x)
}

// init TWEEN.
function animate (time) {
  requestAnimationFrame(animate)
  TWEEN.update(time)
}

class Process {
  constructor ({ rootEl = document.body, showNumber = false, initNumber = 0, callback = cout, TWEENSet = false }) {
    if (!TWEENSet) {
      requestAnimationFrame(animate)
    }
    let Xnumber = 0
    let pcObj = { x: 0 }
    let processBar = document.createElement('div')
    let processEntity = document.createElement('div')
    let numberSpan = document.createElement('span')
    processBar.classList.add('process-wrap')
    processEntity.classList.add('process-entity')
    let tween = new TWEEN.Tween(pcObj)
      .easing(TWEEN.Easing.Cubic.Out)
      .onUpdate(function () {
        processEntity.style.width = 'calc(' + parseInt(pcObj.x) + '% - 6px)'
        numberSpan.innerText = parseInt(pcObj.x) + '%'
      })
    numberSpan.classList.add('number-span')
    processBar.appendChild(processEntity)
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
    this.number = initNumber
  }
}

module.exports = Process
