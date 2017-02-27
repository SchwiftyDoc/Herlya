Element = function(name, x, y, width, height) {
  let self = this
  this.width = parseInt(width)
  this.height = parseInt(height)
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
      context.drawImage(self.image, self.x, self.y, self.width, self.height)
    }
  })
}

Element.prototype.correctRatio = () => {
  console.log('(' + this.width + '/' +  this.height + ') ? (' + this.imageWidth + '/' + this.imageHeight + ')')
  if ((this.width / this.height) != (this.imageWidth / this.imageHeight)){
    console.log('true')
    this.height = this.width * (this.imageWidth / this.imageHeight)
  } else {
    console.log('false')
  }
}

Element.prototype.collision = (other) => {
  if (other.isPrototypeOf(Element) === false || other.isPrototypeOf(Character) === false)
    throw Error("Impossible de gérer des collisions avec autre chose que des éléments")
}