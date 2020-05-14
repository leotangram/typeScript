function completeName(name: string, surname?: string): string {
  if (surname) {
    return `${name} ${surname}`
  } else {
    return `${name}`
  }
}

let name = completeName('Barry', 'Allen')
let name2 = completeName('Barry')

console.log(name)
console.log(name2)
