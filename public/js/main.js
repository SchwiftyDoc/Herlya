/**
 * Created by Coreuh on 12-02-17.
 */
/*let configuration = include('config.json')
console.log(configuration.canvasId)*/

let image = new Image()
image.src = "/assets/svg/characters/perso.svg"
let ctx

// Test draw char*/


let map
let elementsCanvas = document.getElementById('elementsView')
let playersCanvas = document.getElementById('playersView')

window.onload = function() {
  map = new Map("standard", elementsCanvas, playersCanvas)
 playersCanvas.getContext('2d').drawImage(image, 0, 0, 100, 200)
}
