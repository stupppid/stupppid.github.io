
function cout(value) {
  console.log(value)
}

class Process {
  constructor ({ rootEl = document.body, showNumber = false, initNumber = 0, callback = cout }) {
    let Xnumber
    let tween
    let processBar = document.createElement('div')
    let processEntity = document.createElement('div')
    let numberSpan = document.createElement('span')
    processBar.classList.add('process-wrap')
    processEntity.classList.add('process-entity')
    numberSpan.classList.add('number-span')
    processBar.appendChild(processEntity)
    if (showNumber) {
      rootEl.appendChild(numberSpan)
    }
    rootEl.appendChild(processBar)
    rootEl.appendChild(numberSpan)
    Object.defineProperty(this, 'number', {
      set (value) {
        Xnumber = value
        processEntity.style.width = 'calc(' + value + '% - 6px)'
        numberSpan.innerText = value + '%'

        if (value >= 100) {
          callback()
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
