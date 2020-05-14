var Volum;
(function (Volum) {
    Volum[Volum["min"] = 1] = "min";
    Volum[Volum["mid"] = 2] = "mid";
    Volum[Volum["max"] = 10] = "max";
})(Volum || (Volum = {}));
var audio = Volum.mid;
console.log(audio);
console.log(Volum[10]);
