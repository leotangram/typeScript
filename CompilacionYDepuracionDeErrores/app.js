/**
 * Esto es un comentario de multiple linea
 * .......
 */
var hero = 'Robin';
var age = 30;
var message = print(hero, age);
console.log(message);
function print(hero, age) {
    hero = hero.toLowerCase();
    age = age + 10;
    return hero + " " + age;
}
