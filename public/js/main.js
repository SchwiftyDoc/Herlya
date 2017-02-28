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

  // Right click management :
  let target = {}
  let player = {}
  $("#playersView").mousedown(function (e) {
    if(event.which == 3) {
      // Set Target coords
      let parentOffset = $(this).parent().offset()
      target.x = e.pageX - parentOffset.left - map.players[0].width / 2;
      target.y = e.pageY - parentOffset.top - map.players[0].height / 2;
      // Set User coors
      setInterval(function() {
        if (player.x != target.x
            || player.y != target.y) {
          if (player.x < target.x)
            map.players[0].move(1, 0)
          if (player.y < target.y)
            map.players[0].move(0, 1)
          if (player.x > target.x)
            map.players[0].move(-1, 0)
          if (player.y > target.y)
            map.players[0].move(0, -1)
          player.x = map.players[0].x
          player.y = map.players[0].y
        }
      }, 50)
    }
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
    }, 1000)
  }

}