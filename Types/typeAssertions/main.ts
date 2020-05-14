let anyValue = 'Cualquier cosa'
let lengthString: number = (<string>anyValue).length

console.log(lengthString)

/*
Una variable con un tipo indeterminado (any) estás obligándola a definirse con el
tipo que tu sabes que tiene
*/

let miVariable: any = 14.52

// Declaramos miVariable como variable de tipo (any).
// Le damos un valor numérico determindo.

let sumaUno: number = <number>miVariable + 1
let sumaDos: number = (miVariable as number) + 2

// Declaramos sumaUno y sumaDos como variables number
// Aseveramos que miVariable es un numero de dos formas distintas y procedemos

console.log(sumaUno)
console.log(sumaDos)

// Espero te haya servido de ayuda
// Puedes ver aquí la documentación
/* 
typescriptlang.org/docs/handbook/basic-types.html#type-assertions
*/
