// Tipos
var batman = 'Bruce';
var superman = 'Clark';
var existe = false;
// Tuplas
var parejaHeroes = [batman, superman];
var villano = ['Lex Lutor', 5, true];
// Arreglos
var aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
//Enumeraciones
var Force;
(function (Force) {
    Force[Force["acuaman"] = 0] = "acuaman";
    Force[Force["batman"] = 1] = "batman";
    Force[Force["flash"] = 5] = "flash";
    Force[Force["superman"] = 100] = "superman";
})(Force || (Force = {}));
var fuerzaFlash = Force.flash;
var fuerzaSuperman = Force.superman;
var fuerzaBatman = Force.batman;
var fuerzaAcuaman = Force.acuaman;
// Retorno de funciones
function activar_batiseñal() {
    return 'activada';
}
function pedir_ayuda() {
    console.log('Auxilio!!!');
}
// Aserciones de Tipo
var poder = '100';
var largoDelPoder = poder.length;
console.log(largoDelPoder);
