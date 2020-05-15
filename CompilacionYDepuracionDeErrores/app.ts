/**
 * Esto es un comentario de multiple linea
 * .......
 */

let hero: string = 'Robin'
let age: number = 30

let message = print(hero, age)

console.log(message)

function print(hero: string, age: number): string {
  hero = hero.toLowerCase()
  age = age + 10
  return `${hero} ${age}`
}
