Map = function (name, elementsCanvas, playersCanvas) {

  // Attributes
  let self = this
  this.players = new Array()
  this.elements = new Array()
  this.elCanvas = elementsCanvas
  this.elCtx = elementsCanvas.getContext('2d')
  this.plCanvas = playersCanvas
  this.plCtx = playersCanvas.getContext('2d')

  // Get the JSON datas
  $.getJSON('/assets/json/maps/' + name + '.json', (data) => {

    // Set the Elements Canvas properties
    elementsCanvas.style.backgroundImage = "url(/assets/img/maps/" + data.background + ")"
    elementsCanvas.width  = data.width
    elementsCanvas.height = data.height

    // Initialization of Elements
    for (let element of data.elements) {
      for (let el of element.comps) {
        this.addElement(new Element(element.name, el.x, el.y, el.width, el.height, this))
      }
    }

    // Initialization of players
    for (let player of data.players) {
      this.addPlayer(new Player(this, "perso", player.position.x, player.position.y))
    }

    // First Draw
    self.drawPlayers()
    self.drawElements()
  })
}

Map.prototype.addElement = function(element) {
  this.elements.push(element)
}

Map.prototype.drawElements = function() {
  for (var element of this.elements) {
    element.draw(this.elCtx)
  }
}

Map.prototype.addPlayer = function(player) {
  for (var player of this.players) {
    player.draw(this.plCtx)
  }
}

Map.prototype.drawPlayers = function() {
  for (var player of this.players) {
    player.draw(this.plCtx)
  }
}

Map.prototype.getElCtx = function() {
  return this.elCtx
}

Map.prototype.getPlCtx = function() {
  return this.plCtx
}

Map.prototype.update = function() {
  this.drawElements()
  this.drawPlayers()
}

