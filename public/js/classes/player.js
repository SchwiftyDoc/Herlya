/**
 * Created by corentin on 27/02/17.
 */

Player = function (map, name, x, y, width, height, team) {
  this.map = map
  let self = this
  this.x = x
  this.y = y
  this.width = width
  this.height = height
  this.team = team
  this.image = new Image()
  $.getJSON('/assets/json/characters/' + name + '.json', (data) => {
    self.image.src = '/assets/svg/characters/' + data.image
    self.element = data.element;
    self.imageWidth = data.width
    self.imageHeight = data.height
    //self.correctRatio()
    self.image.onload = function() {
      console.log(self.image.src)
      map.getPlCtx().drawImage(self.image, self.x, self.y, self.width, self.height)
    }
  })
}

Player.prototype.draw = function(context) {
  context.drawImage(this.image, this.x, this.y, this.width, this.height)
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