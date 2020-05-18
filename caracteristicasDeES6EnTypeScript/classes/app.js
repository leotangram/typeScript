"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Avenger = (function () {
    function Avenger(name, power) {
        this.name = name;
        this.power = power;
    }
    return Avenger;
}());
var AvengerVolador = (function (_super) {
    __extends(AvengerVolador, _super);
    function AvengerVolador(name, power) {
        var _this = _super.call(this, name, power) || this;
        _this.vuela = true;
        return _this;
    }
    return AvengerVolador;
}(Avenger));
var hulk = new Avenger('Hulk', 'Super fuerza');
var falcon = new AvengerVolador('Falcon', 'Volar');
console.log(hulk);
console.log(falcon);
//# sourceMappingURL=app.js.map