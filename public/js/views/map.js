Map = function (name, canvas) {
  let self = this
  this.players = new Array()
  this.elements = new Array()
  this.canvas = canvas
  this.context = canvas.getContext('2d')
  $.getJSON('/assets/json/maps/' + name + '.json', (data) => {
    self.dataElements = data.elements
    canvas.style.backgroundImage = "url(/assets/img/maps/" + data.background + ")"
    canvas.width  = data.width
    canvas.height = data.height
    //self.drawPlayers()
    self.drawElements()
  })
}

Map.prototype.drawElements = function() {
  for (let element of this.dataElements) {
    alert('lol')
    for (let el of element.comps) {
      this.elements.push(new Element(element.name, el.x, el.y, el.width, el.height))
    }
  }
}

Map.prototype.drawPlayers = function() {
  for (let player of this.dataPlayers) {
    this.players.push(new Player(player.id, player.position.x, player.position.y))
  }
}

