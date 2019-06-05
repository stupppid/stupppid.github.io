var nextTick = null
function initPersons (a, b, p, auto, t) {
  var stop = true
  var theWorld = {
    isOver: false,
    arr: [],
    getMatrix: function (i, j) {
      return this.arr[i - 1][j - 1] + this.arr[i - 1][j] + this.arr[i - 1][j + 1] +
        this.arr[i][j - 1] + this.arr[i][j + 1] +
        this.arr[i + 1][j - 1] + this.arr[i + 1][j] + this.arr[i + 1][j + 1]
    }
  }
  function stopGo () {
    stop = true
    document.getElementById('start').innerText = '开始'
  }
  function continueGo () {
    stop = false
    document.getElementById('start').innerText = '暂停'
    nextTick = setTimeout(setWorld, t)
  }
  function initTable () {
    var wd = document.getElementById('wd')
    wd.innerHTML = null
    for (var i = 0; i < b + 2; i++) {
      var uel = document.createElement('div')
      uel.setAttribute('class', 'uel')
      for (var j = 0; j < a + 2; j++) {
        var el = document.createElement('i')
        el.setAttribute('class', 'el')
        uel.appendChild(el)
      }
      wd.appendChild(uel)
    }
    wd.style.width = (a + 2) * 15 + 'px'
    a += 1; b += 1
  }
  function clearWorld () {
    for (var i in theWorld.arr) {
      for (var j in theWorld.arr[i]) {
        setDead(i, j)
      }
    }
  }
  function changeLife (i, j) {
    if (onEdge(i, j)) {
      return
    }
    if (theWorld.arr[j][i]) {
      setDead(j, i)
    } else {
      setAlive(j, i)
    }
  }
  function addEvent () {
    var wd = document.getElementById('wd')
    wd.addEventListener('mouseover', function (e) {
      e.cancelBubble = true
      e.preventDefault()
      if (e.buttons == 0) {
        return
      }
      if (!e.target.className.startsWith('el')) {
        return
      }
      for (var i in e.target.parentNode.children) {
        if (e.target.parentNode.children[i] == e.target) {
          break
        }
      }
      for (var j = 0; j < wd.children.length; j++) {
        if (wd.children[j] == e.target.parentNode) {
          break
        }
      }
      changeLife(i, j)
    })
    wd.addEventListener('click', function (e) {
      e.cancelBubble = true
      e.preventDefault()
      for (var i in e.target.parentNode.children) {
        if (e.target.parentNode.children[i] == e.target) {
          break
        }
      }
      for (var j = 0; j < wd.children.length; j++) {
        if (wd.children[j] == e.target.parentNode) {
          break
        }
      }
      changeLife(i, j)
    })
    document.getElementById('rand').addEventListener('click', function () {
      autoSelectAlive(false)
    })
    document.getElementById('clear').addEventListener('click', function () {
      stopGo()
      clearWorld()
    })
    document.getElementById('start').addEventListener('click', function () {
      t = document.getElementById('time').value || 0
      if (document.getElementById('a').value != a || document.getElementById('b').value != b) {
        var at = parseInt(document.getElementById('a').value) || 20
        var bt = parseInt(document.getElementById('b').value) || 20
        if (at != a - 1 || bt != b - 1) {
          a = at
          b = bt
          initTable()
          autoSelectAlive(true)
        }
      }
      p = document.getElementById('p').value || 0.3
      if (stop) {
        continueGo()
      } else {
        stopGo()
      }
    })
    document.getElementById('slider').addEventListener('click', function () {
      stopGo()
      var arr = [[0, 0, 1], [1, 0, 1], [0, 1, 1]]
      selectAliveByArray(arr)
    })
    document.getElementById('shadow').addEventListener('click', function () {
      var rl = document.styleSheets[0].cssRules
      for (var i in rl) {
        if (rl[i].selectorText == '.el') {
          if (rl[i].style.transition) {
            rl[i].style.transition = null
          } else {
            rl[i].style.transition = 'background-color ease-in-out 200ms'
          }
        }
      }
    })
    document.getElementById('useInitStatus').addEventListener('click', function () {
      stopGo()
      var arr = JSON.parse(document.querySelector('#initStatus').value)
      selectAliveByArray(arr)
    })
  }
  function onEdge (i, j) {
    return i == 0 || j == 0 || j == a || i == b
  }
  function selectAliveByArray (arr) {
    clearWorld()
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr[i].length; j++) {
        if (arr[i][j]) {
          setAlive(i + 1, j + 1)
        }
      }
    }
  }
  function autoSelectAlive (none) {
    var uel = document.getElementById('uel')
    theWorld.arr = []
    for (var i = 0; i < b + 1; i++) {
      var newLine = []
      theWorld.arr.push(newLine)
      for (var j = 0; j < a + 1; j++) {
        if (onEdge(i, j) || none) {
          newLine.push(false)
          continue
        }
        if (Math.random() < p) {
          newLine.push(true)
          document.getElementsByClassName('uel')[i].children[j].setAttribute('class', 'el alive')
        } else {
          newLine.push(false)
          document.getElementsByClassName('uel')[i].children[j].setAttribute('class', 'el')
        }
      }
    }
  }
  function setAlive (i, j) {
    theWorld.arr[i][j] = true
    document.getElementsByClassName('uel')[i].children[j].setAttribute('class', 'el alive')
  }
  function setDead (i, j) {
    theWorld.arr[i][j] = false
    document.getElementsByClassName('uel')[i].children[j].setAttribute('class', 'el')
  }
  function setWorld () {
    var tmparr = []
    for (var i in theWorld.arr) {
      var arr2 = []
      tmparr.push(arr2)
      if (i == 0 || i == theWorld.arr.length - 1) {
        continue
      }
      for (var j in theWorld.arr[i]) {
        if (j == 0 || j == theWorld.arr[i].length - 1) {
          continue
        }
        i = parseInt(i)
        j = parseInt(j)
        if (theWorld.getMatrix(i, j) == 2) {
          tmparr[i][j] = theWorld.arr[i][j]
        } else {
          tmparr[i][j] = theWorld.getMatrix(i, j) == 3 | false
        }
      }
    }
    for (var i in theWorld.arr) {
      for (var j in theWorld.arr[i]) {
        theWorld.arr[i][j] = tmparr[i][j]
        if (tmparr[i][j]) {
          setAlive(i, j)
        } else {
          setDead(i, j)
        }
      }
    }
    if (!stop) { nextTick = setTimeout(setWorld, t) }
  }
  initTable()
  addEvent()
  if (auto) {
    continueGo()
    autoSelectAlive() // true是全部都死掉
    nextTick = setTimeout(setWorld, t)
  } else {
    autoSelectAlive(true)
  }
}

function index () {
  initPersons(20, 20, 0.3, true, 100)
}

index.prototype.beforeLeave = function () {
  clearTimeout(nextTick)
}

module.exports = index
