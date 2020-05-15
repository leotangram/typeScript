"use strict";
var hero = 'Robin';
var age = 30;
var message = print2(hero, age);
console.log(message);
function print2(hero, age) {
    hero = hero.toLowerCase();
    age = age + 10;
    return hero + " " + age;
}
//# sourceMappingURL=app.js.map