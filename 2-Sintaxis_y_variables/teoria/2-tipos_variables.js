// DECLARACIÓN DE VARIABLES
var variableTipoVar;
let variableTipoLet;

const constante = "esto es una constante";

// el valor de una variable "var" puede cambiar
var a = 11;
console.log(a);
a = 4;
console.log(a);

// no se puede cambiar el valor de una variable "const"
console.log(constante);
//constante = "adios"; // esto da error

// el valor de las variables "let" se puede modificar
let b = 3;
console.log(b);
b = 5;
console.log(b);

// DIFERENCIAS ENTRE var Y let
/* 
var afecta a todo el código y let solo afecta al bloque donde la
variable esté siendo declarada. Mirar el ejemplo de abajo
 */

var variable = "hola soy una variable VAR";
for(var i=0; i<3; i++){
    variable = "soy la segunda variable";
}
console.log(variable); // imprime "soy la segunda variable"

let variableLet = "hola soy una variable LET";
for(let i=0; i<3; i++){
    let variableLet = "cambiamos el valor de LET";
}
console.log(variableLet); // imprime "hola soy una variable LET"

// TIPEOF -> indica de qué tipo es una variable
console.log(typeof 1) // number
console.log(typeof true) // boolean
console.log(typeof null) // object
console.log(typeof variableLet) // string
console.log(typeof variableTipoLet) // undefined, porque no le hemos puesto ningún valor

var num = 1;
console.log(typeof num); // number
num = "hola";
console.log(typeof num); // string