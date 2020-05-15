let name1: string = 'Bruce'
let name2: string = 'Richard'

function getName(): string {
  return `${name1} ${name2}`
}

let message: string = `
1. Esta es una linea normal
2. Hola ${name1}
3. Robin es: ${name2}
4. Los nombres son: ${getName()}
5. ${5 + 7}
`
console.log(message)
