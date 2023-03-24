// MÓDULOS

/* FUNCIONES COMENTADAS PARA NO QUITARLAS. EXPLICACIÓN ABAJO
function suma(a, b) {
    return a + b;
}

function multiplica(a, b) {
    return a * b;
}

function eleva(a, b) {
    return a ** b;
}

function factorial(a) {
    if(a === 1){
        return 1;
    }
    return a * factorial(a-1);
}
*/


/* PARA MOSTRAR RESULTADOS POR LA TERMINAL:
1. acceder a la carpeta donde está el archivo
2. node index.js
*/


/* COMENTADO PARA QUE NO DE ERRORES AL HABER QUITADO LAS FUNCIONES
const fact = factorial(5);
console.log(fact);              // 120

const sum = suma(90, 12);
console.log(sum);               // 102
*/

/* si quisiéramos calcular el factorial de algún número dentro de otro archivo,
tendríamos que copiar y pegar la función factorial() que ya existe en este.
¿solución? -> crear módulos */

/* creamos la carpeta modulos, archivo matemáticas y copiamos las funciones en
ese archivo nuevo (en este, los comento para no quitarlos) */

/* si ahora ejecutamos este archivo, dará error porque no están definidas esas
funciones. Hay que importar las funciones del módulo matematicas */



// IMPORTACIÓN Y EXPORTACIÓN DE MÓDULOS

/*
FORMA 1: CommonJS -> require() -> (el que vamos a hacer en esta clase)
FORMA 2: Import ES6 -> import()

vamos al archivo matematicas y exportamos
*/



// IMPORTACIÓN DE FUNCIONES

/* FORMA 1 DE IMPORTAR Y USAR LAS FUNCIONES IMPORTADAS

const moduloMatematicas = require("./modulos/matematicas.js");
// el ./ es para hacer referencia a la carpeta donde estamos
console.log(moduloMatematicas);             // imprime los nombres de todas las funciones que importa
console.log(moduloMatematicas.eleva);       // imprime que es una función

// comprobación de que funciona
const sum = moduloMatematicas.suma(2, 3);
console.log(sum);                           // 5
*/



/* FORMA 2 DE IMPORTAR Y USAR LAS FUNCIONES IMPORTADAS

se pueden guardar las funciones en constantes dentro de este archivo para evitar
escribir "moduloMatematicas" siemre

const moduloMatematicas = require("./modulos/matematicas.js");
const suma = moduloMatematicas.suma;
const multiplica = moduloMatematicas.multiplica;
const eleva = moduloMatematicas.eleva;
const factorial = moduloMatematicas.factorial;

// comprobación de que funciona
const fact = factorial(5);
console.log(fact);              // 120
// ya no hay que escribir "moduloMatematicas.factorial(5)"
*/



/* FORMA 3 DE IMPORTAR Y USAR LAS FUNCIONES IMPORTADAS

const moduloMatematicas = require("./modulos/matematicas.js");
const { suma, factorial } = moduloMatematicas;
// ponemos entre llaves las funciones que queramos importar solo

// comprobación de que funciona
const fact = factorial(5);
console.log(fact); // 120
*/



/* FORMA 4 DE IMPORTAR Y USAR LAS FUNCIONES IMPORTADAS */

const {suma, factorial} = require("./modulos/matematicas.js");

//comprobación de que funciona
const fact = factorial(5);
console.log(fact); // 120