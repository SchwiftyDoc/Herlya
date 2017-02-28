Element = function(name, x, y, width, height, map) {
  let self = this
  this.width = width
  this.height = height
  this.x = x
  this.y = y
  this.image = new Image()
  $.getJSON('/assets/json/elements/' + name + '.json', (data) => {
    self.imageWidth = data.width
    self.imageHeight = data.height
    self.type = data.type
    self.hitboxes = data.hitboxes
    self.correctRatio()
    self.image.src = "/assets/svg/elements/" + data.image
    self.image.onload = function() {
      self.draw(map.getElCtx())
    }
    self.adjustHitboxes()
  })
}

Element.prototype.adjustHitboxes = function() {
  for (let i in this.hitboxes) {
    this.hitboxes[i].x += this.x
    this.hitboxes[i].y += this.y
    this.hitboxes[i].width = this.width
    this.hitboxes[i].height = this.height
  }
}

Element.prototype.draw = function(context) {
  context.drawImage(this.image, this.x, this.y, this.width, this.height)
}

Element.prototype.correctRatio = () => {
  if ((this.width / this.height) != (this.imageWidth / this.imageHeight)){
    this.height = this.width * (this.imageWidth / this.imageHeight)
  }
}

Element.prototype.collision = (other) => {
  if (other.isPrototypeOf(Element) === false || other.isPrototypeOf(Player) === false)
    throw Error("Impossible de gérer des collisions avec autre chose que des éléments")
  //other.setPro
}