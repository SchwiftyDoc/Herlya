/**
 * Created by corentin on 27/02/17.
 */

var DIRECTION = {
  "TOP"   : 0,
  "RIGHT" : 1,
  "BOTTOM": 2,
  "LEFT"  : 3
}

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
    self.hitboxes = data.hitboxes
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
  newX = this.x + dx
  newY = this.y + dy
  // Check if is in the Map
  if (newX >= 0 && newY + dy >= 0
      && newX + this.width <= map.width
      && newY + this.height <= map.height) {
    // Check collision with map elements
    /*for (let element in this.map.elements) {
      let hitbox = {
        "x" : this.x + dx,
        "y" : this.y + dy,
        "width" : this.width,
        "height" : this.height
      }
      console.log(hitbox)
      if (!collision(element, hitbox)) {*/
        this.x += dx
        this.y += dy
      /*}
    }*/
  }
}