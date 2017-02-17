Character = function (name, x, y, width, height, team) {
  let self = this
  this.x = x
  this.y = y
  this.width = width
  this.height = height
  this.team = team
  this.image = new Image()
  $.getJSON('/assets/json/characters/' + name + '.json', (data) => {
    self.image.src = '/assets/svg/characters/' + data.image + '.svg'
    self.element = data.element;
    self.imageWidth = data.width
    self.imageHeight = data.height
    self.correctRatio()
  })
}

Character.prototype.correctRatio = () => {
  if ((this.width / this.height) != (this.imageWidth / this.imageHeight)){
    console.log('true')
    this.height = this.width * (this.imageWidth / this.imageHeight)
  } else {
    console.log('false')
  }
}