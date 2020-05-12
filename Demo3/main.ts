class Avenger {
  nombre: string
  arma: string

  constructor(nombre: string, arma: string) {
    this.nombre = nombre
    this.arma = arma
  }
}

let thoro = new Avenger('Thoro', 'Mjolnir')
let ironman = new Avenger('Ironman', 'Armor Suit')
let capi = new Avenger('Capitan América', 'Droga')

let avengers: Avenger[] = [thoro, ironman, capi]

for (let avenger of avengers) {
  console.log()
  ;`Avenger: ${avenger.nombre}. con su arma: ${avenger.arma}`
}
