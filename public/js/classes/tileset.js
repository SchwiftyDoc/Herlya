let tileset = function(url) {
  this.image = new Image()
  this.image.referenceDuTileset = this
  this.image.onload() = function() {
    if (!this.complete)
      throw new Error("Impossible de charger le Tileset : " + url)
    // Largeur du tileset en tiles
    this.referenceDuTileset.largeur = this.width / 32;
  }
  this.image.src = "/assets/tilesets/chemin.png"
}

tileset.prototype.dessinerTile(num, ctx, xDest, yDest) {
  let xSourceEnTiles = num % this.largeur;
  if(xSourceEnTiles == 0) xSourceEnTiles = this.largeur;
  let ySourceEnTiles = Math.ceil(num / this.largeur);
  let xSource = (xSourceEnTiles - 1) * 32;
  let ySource = (ySourceEnTiles - 1) * 32;
  ctx.drawImage(this.image, xSource, ySource, 32, 32, xDest, yDest, 32, 32);
}