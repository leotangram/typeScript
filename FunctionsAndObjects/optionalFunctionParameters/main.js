function completeName(name, surname) {
    if (surname) {
        return name + " " + surname;
    }
    else {
        return "" + name;
    }
}
var name = completeName('Barry', 'Allen');
var name2 = completeName('Barry');
console.log(name);
console.log(name2);
