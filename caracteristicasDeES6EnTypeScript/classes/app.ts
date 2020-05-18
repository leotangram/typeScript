class Avenger {
  constructor(name: string, power: string) {
    this.name = name
    this.power = power
  }
}

class AvengerVolador extends Avenger {
  constructor(name: string, power: string) {
    super(name, power)
    this.vuela = true
  }
}

let hulk = new Avenger('Hulk', 'Super fuerza')
let falcon = new AvengerVolador('Falcon', 'Volar')

console.log(hulk)
console.log(falcon)
