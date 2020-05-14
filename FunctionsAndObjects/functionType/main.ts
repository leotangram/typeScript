function sum(a: number, b: number): number {
  return a + b
}

function greeting(name: string): string {
  return `I'm ${name}`
}

function saveWorld(): void {
  console.log('El mundo está a salvo!')
}

let myFunction: (a: number, b: number) => number

myFunction = 10 // Da error

myFunction = sum // Todo bien
console.log(myFunction(5, 5))

myFunction = greeting // Da error
console.log(myFunction('Batman'))

myFunction = saveWorld // Da error
myFunction()
