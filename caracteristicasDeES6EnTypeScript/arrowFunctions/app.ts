// function sum(a: number, b: number): number {
//   return a + b
// }

let sum = (a: number, b: number): number => a + b

// function darOrden_hulk(orden: string): string {
//   return `Hulk ${orden}`
// }

// let darOrden_hulk = (orden: string): string => `Hulk ${orden}`

console.log(sum(2, 2))
// console.log(darOrden_hulk('salta'))

let captain_america = {
  name: <string>'Hulk',
  darOrden_hulk: function (): void {
    setTimeout(() => {
      console.log(`${this.name} smash!!!`)
    }, 1000)
  }
}

captain_america.darOrden_hulk()
