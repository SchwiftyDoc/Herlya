/**
 * Created by corentin on 27/02/17.
 */

class Map {

    constructor(players, elements) {
        this.players = players;
        this.elements = elements;
    }

    movePlayer(playerId, dx, dy) {

        this.notifyObservers()
    }

    notifyObservers() {
        for(player : this.players) {

        }
    }

}

let Map = function (players, elements) {
    this.players = new Array()
    this.elements = new Array()
}

Map.prototype.move(player, dx, dy) {

}

Map.prototype.getPlayers() {}

module.exports = Map;
