function Snow (id) {
  let rootEl

  function cb (fun, time = 2000) {
    if (fun) {
      setTimeout(fun, time)
    }
  }

  this.open = function (callback) {
    if (!rootEl) {
      rootEl = document.createElement('div')
      rootEl.classList.add('snow-group')
      for (let i = 1; i <= 3; i++) {
        let el = document.createElement('div')
        el.classList.add('snow-' + i)
        rootEl.appendChild(el)
      }
      if (id) {
        document.getElementById(id).appendChild(rootEl)
      } else {
        document.body.appendChild(rootEl)
      }
    } else {
      rootEl.classList.remove('snow-stop')
    }
    cb(callback)
  }

  this.close = function (callback) {
    rootEl.classList.add('snow-stop')
    cb(callback)
  }

  this.quit = function (callback) {
    this.close()
    cb(function () {
      rootEl.remove()
      rootEl = undefined
      if (callback) {
        callback()
      }
    })
  }
}

module.exports = Snow
