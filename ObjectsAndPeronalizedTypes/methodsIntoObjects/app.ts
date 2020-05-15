let flash: {
  name: string
  age: number
  powers: string[]
  getName: () => string
} = {
  name: 'Barry Allen',
  age: 24,
  powers: ['Puede correr muy rápido', 'Viajar en el tiempo'],
  getName() {
    return this.name
  }
}

let superman: {
  name: string
  age: number
  powers: string[]
  getName: () => string
} = {
  name: 'Clark Kent',
  age: 500,
  powers: ['Puede volar', 'Super velocidad'],
  getName() {
    return this.name
  }
}
