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

let map
let canvas = document.getElementById('gameView')
let context = canvas.getContext('2d')

window.onload = function() {
  map = new Map("standard", canvas)
}
