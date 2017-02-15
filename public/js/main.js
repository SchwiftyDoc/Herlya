/**
 * Created by Coreuh on 12-02-17.
 */
let image = document.getElementById('image')
window.onload = function() {
    var canvas = document.getElementById('canvas')
    var ctx = canvas.getContext('2d')

    ctx.fillStyle = 'blue'
    ctx.fillRect(10, 10, 100, 50)

    ctx.strokeStyle = 'red'
    ctx.strokeRect(75, 75, 50, 50)

    ctx.drawImage(image, 0, 0, 146.2, 419.2)
}
