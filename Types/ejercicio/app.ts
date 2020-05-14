// Tipos
var batman: string = 'Bruce'
var superman: string = 'Clark'

var existe: boolean = false

// Tuplas
var parejaHeroes: [string, string] = [batman, superman]
var villano: [string, number, boolean] = ['Lex Lutor', 5, true]

// Arreglos
var aliados: string[] = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash']

//Enumeraciones
enum Force {
  acuaman = 0,
  batman,
  flash = 5,
  superman = 100
}
var fuerzaFlash: number = Force.flash
var fuerzaSuperman: number = Force.superman
var fuerzaBatman: number = Force.batman
var fuerzaAcuaman: number = Force.acuaman

// Retorno de funciones
function activar_batiseñal(): string {
  return 'activada'
}

function pedir_ayuda(): void {
  console.log('Auxilio!!!')
}

// Aserciones de Tipo
var poder: string = '100'
var largoDelPoder: number = (<string>poder).length
console.log(largoDelPoder)
