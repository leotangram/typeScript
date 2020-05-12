var Avenger = /** @class */ (function () {
    function Avenger(nombre, arma) {
        this.nombre = nombre;
        this.arma = arma;
    }
    return Avenger;
}());
var thoro = new Avenger('Thoro', 'Mjolnir');
var ironman = new Avenger('Ironman', 'Armor Suit');
var capi = new Avenger('Capitan América', 'Droga');
var avengers = [thoro, ironman, capi];
for (var _i = 0, avengers_1 = avengers; _i < avengers_1.length; _i++) {
    var avenger = avengers_1[_i];
    console.log();
    "Avenger: " + avenger.nombre + ". con su arma: " + avenger.arma;
}
