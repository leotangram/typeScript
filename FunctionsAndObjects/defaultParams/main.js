function completeName2(name, surname, capitalized) {
    if (surname === void 0) { surname = ''; }
    if (capitalized === void 0) { capitalized = false; }
    if (capitalized) {
        return capitalize(name) + " " + capitalize(surname);
    }
    return name + " " + surname;
}
function capitalize(word) {
    return "" + word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
}
var nombre = completeName2('tony', 'stark', true);
console.log(nombre);
