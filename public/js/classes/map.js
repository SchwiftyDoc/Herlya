let mapData
Map = function (name) {
  $.getJSON('/assets/maps/' + name + '.json', function (data) {
    console.log(data)
    mapData = data
    this.tileset = new Tileset(data.tileset)
    this.terrain = data.terrain
  })
}

Map.prototype.getWidth = function() {
  return this.terrain[0].length
}

Map.prototype.getHeight = function() {
  return this.terrain.length
}

Map.prototype.draw = function(context) {
  for(var i = 0, l = this.terrain.length ; i < l ; i++) {
    var ligne = this.terrain[i];
    var y = i * 32;
    for(var j = 0, k = ligne.length ; j < k ; j++) {
      this.tileset.drawTile(ligne[j], context, j * 32, y);
    }
  }
}

