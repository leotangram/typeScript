type Heroe = {
  name: string
  age: number
}

let wathever: string | number | Heroe = 'Leonardo'

wathever = 10

wathever = {
  name: 'Leonardo',
  age: 27
}

console.log(wathever)
