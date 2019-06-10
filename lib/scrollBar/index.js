const throttle = require('lodash/throttle')

function scrollBar (dc, child) {
  let wheelEvent, touchMoveEvent, resize
  let w = dc.offsetWidth
  let h = dc.offsetHeight
  const scrollDom = document.createElement('span')
  scrollDom.classList.add('scroll-bar')
  dc.appendChild(scrollDom)
  resize = function (e) {
    if (dc.offsetWidth !== w || dc.offsetHeight !== h) {
      w = dc.offsetWidth
      h = dc.offsetHeight
      initEvent()
    }
  }
  window.addEventListener('resize', resize)
  dc.addEventListener('mouseenter', function (e) {
    scrollDom.style.opacity = 1
  })
  dc.addEventListener('mouseleave', function (e) {
    scrollDom.style.opacity = 0
  })

  function initEvent () {
    // content
    child.style.top = '0px'
    child.style.transition = 'top 300ms'
    // calculate positions
    let minTop = -child.clientHeight + dc.clientHeight
    wheelEvent && dc.removeEventListener('wheel', wheelEvent)
    touchMoveEvent && dc.removeEventListener('wheel', touchMoveEvent)
    wheelEvent = null
    touchMoveEvent = null
    if (minTop < 0) {
      scrollDom.style.height = dc.clientHeight * dc.clientHeight / child.clientHeight + 'px'
      wheelEvent = throttle(function (e) {
        let mv = parseInt(child.style.top) - e.deltaY
        if (mv < minTop) {
          child.style.top = minTop + 'px'
          scrollDom.style.top = -dc.clientHeight + parseInt(scrollDom.style.height)
        } else if (mv > 0) {
          child.style.top = 0 + 'px'
          scrollDom.style.top = 0 + 'px'
        } else {
          child.style.top = mv + 'px'
          scrollDom.style.top = -dc.clientHeight * mv / child.clientHeight + 'px'
        }
      }, 50)
      dc.addEventListener('wheel', wheelEvent)
    } else {
      scrollDom.style.height = '0px'
    }
    dc.addEventListener('touchmove', function (e) {
      // e.changedTouches[0].pageX
      // e.changedTouches[0].pageY
      // console.log(e)
    })
  }
  return initEvent
}

module.exports = scrollBar
