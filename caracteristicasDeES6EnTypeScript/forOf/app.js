"use strict";
var thor = {
    name: 'Thor',
    weapon: 'Mjolnir'
};
var ironman = {
    name: 'Ironman',
    weapon: 'Armorsuit'
};
var captain = {
    name: 'Capitan América',
    weapon: 'Escudo'
};
var avengers = [thor, ironman, captain];
for (var _i = 0, avengers_1 = avengers; _i < avengers_1.length; _i++) {
    var avenger = avengers_1[_i];
    console.log(avenger.name, avenger.weapon);
}
for (var index = 0; index < avengers.length; index++) {
    var avenger = avengers[index];
    console.log(avenger.name, avenger.weapon);
}
avengers.forEach(function (avenger) {
    console.log(avenger.name, avenger.weapon);
});
avengers.map(function (avenger) {
    console.log(avenger.name, avenger.weapon);
});
//# sourceMappingURL=app.js.map