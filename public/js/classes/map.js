Map = function (name, canvas) {
  let self = this
  this.canvas = canvas
  this.context = canvas.getContext('2d')
  $.getJSON('/assets/maps/' + name + '.json', (data) => {
    self.tileset = new Tileset(data.tileset)
    self.terrain = data.terrain
    canvas.width  = self.getWidth() * 32
    canvas.height = self.getHeight() * 32
    self.draw()
  })
}

Map.prototype.getWidth = function() {
  return this.terrain[0].length
}

Map.prototype.getHeight = function() {
  return this.terrain.length
}

Map.prototype.draw = function() {
  console.log(this.context)
  for(var i = 0, l = this.terrain.length ; i < l ; i++) {
    var ligne = this.terrain[i];
    var y = i * 32;
    for(var j = 0, k = ligne.length ; j < k ; j++) {
      this.tileset.drawTile(ligne[j], this.context, j * 32, y);
    }
  }
}

