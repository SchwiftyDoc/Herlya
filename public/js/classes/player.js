/**
 * Created by corentin on 27/02/17.
 */

Player = function (map, name, x, y, team) {
  this.map = map
  let self = this
  this.x = x
  this.y = y
  this.team = team
  this.image = new Image()
  $.getJSON('/assets/json/characters/' + name + '.json', (data) => {
    self.image.src = '/assets/svg/characters/' + data.image
    self.element = data.element;
    self.imageWidth = data.width
    self.imageHeight = data.height
    self.correctRatio()
    self.image.onload = function() {
      context.drawImage(self.image, self.x, self.y, self.width, self.height)
    }
  })
}

Player.prototype.correctRatio = function () {
  if ((this.width / this.height) != (this.imageWidth / this.imageHeight)){
    this.height = this.width * (this.imageWidth / this.imageHeight)
  }
}

Player.prototype.move = function(dx, dy) {
  if(this.x + dx >= 0 && this.y + dy >= 0) {
    this.x += dx;
    this.y += dy
    this.map.update()
  }
}