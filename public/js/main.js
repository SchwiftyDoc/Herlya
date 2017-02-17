/**
 * Created by Coreuh on 12-02-17.
 */
/*let configuration = include('config.json')
console.log(configuration.canvasId)

let canvas = document.getElementById('gameView')
let ctx = canvas.getContext('2d')
let image = new Image()
image.src = "/assets/svg/perso.svg"

// Test draw char
let character = ctx.drawImage(image, 0, 0, 100, 200)*/

window.onload = function() {
  var canvas = document.getElementById('gameView')
  var ctx = canvas.getContext('2d')

  // Test draw map
  let map = new Map("standard", canvas)

}
