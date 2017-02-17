Map = function (name, canvas) {
  let self = this
  this.elements = new Array()
  this.canvas = canvas
  this.context = canvas.getContext('2d')
  $.getJSON('/assets/json/maps/' + name + '.json', (data) => {
    self.dataElements = data.elements
    canvas.style.backgroundImage = "url(/assets/img/maps/" + data.background + ")"
    canvas.width  = data.width
    canvas.height = data.height
    self.drawElements()
  })
}

Map.prototype.drawElements = function() {
  for (let element of this.dataElements) {
    for (let el of element.comps) {
      this.elements.push(new Element(element.name, el.x, el.y, el.width, el.height))
    }
  }
}

