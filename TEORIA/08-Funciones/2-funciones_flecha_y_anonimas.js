// FUNCIONES FLECHA Y ANÓNIMAS

const array = [1, 5, 6, 2, 7, 12, 8, 92];

// forma de hacerlo sin función flecha
const array2 = array.map(function(valor) {
    return valor * 2;
});

// usando una función flecha
const arrFlecha = array.map(num => num * 2);

console.log(array2);            // [ 2, 10, 12, 4, 14, 24, 16, 184 ]
console.log(arrFlecha);         // [ 2, 10, 12, 4, 14, 24, 16, 184 ]
// las dos dan lo mismo, pero las flecha son mucho más reducidas

/* las funciones flecha se pueden guardar en variables, lo mejor, es guardarlas
en variables de tipo constante */



// LLAMAR A FUNCIONES ANTES DE SER DEFINIDAS

// llamada a una función que no es de tipo flecha
console.log(doble(6));                  // 12 -> no da error

// llamada a una función flecha
// console.log(dobleDelValor(6));       // DA ERROR
// no puede accederse a las funciones flecha porque aún no se han inicializado


// definición de una función flecha
const dobleDelValor = valor => valor * 2;

console.log(dobleDelValor(6));          // 12
// aquí no da error porque ya se ha inicializado la función


// otra forma de usar la función
const array3 = array.map(dobleDelValor);
console.log(array3); // [ 2, 10, 12, 4, 14, 24, 16, 184 ]

function doble(valor) {
    return valor * 2;
}

// es una buena práctica el declarar las funciones siempre primero


// FUNCIONES

console.log(suma(5, 10));   // 15 -> hoisting funciona

function suma(a, b) {
    return a + b;
}

console.log(suma(5, 10));   // 15


// FUNCIÓN ANÓNIMA
/**
 * No puede ser usada antes de ser definida.
 * Se guarda en una constante.
 */

// console.log(sumaAnonima(5, 10));    // error -> no puede ser llamada antes de la declaración

const sumaAnonima = function (a, b) {
    return a + b;
}

console.log(sumaAnonima(5, 10));    // 15


// FUNCIÓN FLECHA
/**
 * No puede ser usada antes de ser definida.
 * Sintaxis simple.
 * Tiene el 'return' implícito.
 */

const sumaFlecha = (a, b) => {
    return a + b;
}

console.log(sumaFlecha(5, 10));                 // 15


const sumaFlechaReturnImplicito = (a, b) => a + b;
console.log(sumaFlechaReturnImplicito(5, 10));  // 15


const sumaFlechaMal = (a, b) => { a + b }
console.log(sumaFlechaMal(5, 10));              // undefined -> return no implícito porque tiene {}