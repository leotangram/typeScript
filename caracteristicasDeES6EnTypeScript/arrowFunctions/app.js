"use strict";
var sum = function (a, b) { return a + b; };
console.log(sum(2, 2));
var captain_america = {
    name: 'Hulk',
    darOrden_hulk: function () {
        var _this = this;
        setTimeout(function () {
            console.log(_this.name + " smash!!!");
        }, 1000);
    }
};
captain_america.darOrden_hulk();
//# sourceMappingURL=app.js.map