function completeName2(
  name: string,
  surname: string = '',
  capitalized: boolean = false
): string {
  if (capitalized) {
    return `${capitalize(name)} ${capitalize(surname)}`
  }
  return `${name} ${surname}`
}

function capitalize(word: string): string {
  return `${word.charAt(0).toUpperCase()}${word.substr(1).toLowerCase()}`
}

var nombre = completeName2('tony', 'stark', true)

console.log(nombre)
