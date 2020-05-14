function sum(a, b) {
    return a + b;
}
function greeting(name) {
    return "I'm " + name;
}
function saveWorld() {
    console.log('El mundo está a salvo!');
}
var myFunction;
myFunction = 10; // Da error
myFunction = sum; // Todo bien
console.log(myFunction(5, 5));
myFunction = greeting; // Da error
console.log(myFunction('Batman'));
myFunction = saveWorld; // Da error
myFunction();
