/**
 * Created by Coreuh on 12-02-17.
 */

let map
let elementsCanvas = document.getElementById('elementsView')
let playersCanvas = document.getElementById('playersView')

window.onload = function() {
  map = new Map("standard", elementsCanvas, playersCanvas)
  setInterval(function () {
    map.update();
  }, 20);

  let keys = new Array()

  $(window).keydown(function (e) {
    keys[e.which] = true;
    movePlayer()
  })

  $(window).keyup(function (e) {
    delete keys[e.which]
    movePlayer()
  })

  let movePlayer = function() {
    setInterval(function() {
      if (keys[37])
        map.players[0].move(-1, 0)
      if (keys[38])
        map.players[0].move(0, -1)
      if (keys[39])
        map.players[0].move(1, 0)
      if (keys[40])
        map.players[0].move(0, 1)
    }, 20)
  }

}