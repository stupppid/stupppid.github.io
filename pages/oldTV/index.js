import Bell from 'oldtvdemo'

module.exports = function () {
  window.bell = new Bell({ id: 'bell', overTime: 9, reverse: true }, function () {
    console.log('time over, if you want to test again, you can click on the screen or run `bell.start()` on console.')
  })
  window.bell.start()
}
