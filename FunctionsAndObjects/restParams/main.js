function completeName(name) {
    var manyParams = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        manyParams[_i - 1] = arguments[_i];
    }
    return name + " " + manyParams.join(' ');
}
var superman = completeName('Clark', 'Joseph', 'Kent');
var ironman = completeName('Anthony', 'Edward', 'Tony');
console.log(superman);
console.log(ironman);
