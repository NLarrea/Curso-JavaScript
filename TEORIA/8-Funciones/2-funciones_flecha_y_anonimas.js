// FUNCIONES FLECHA Y ANÓNIMAS

const array = [1, 5, 6, 2, 7, 12, 8, 92];
// forma de hacerlo sin función flecha
const array2 = array.map(function(valor){
    return valor * 2;
})
// usando una función flecha
const arrFlecha = array.map(num => num * 2); // también se le llama función anónima (no tiene nombre)
console.log(array2); // [ 2, 10, 12, 4, 14, 24, 16, 184 ]
console.log(arrFlecha); // [ 2, 10, 12, 4, 14, 24, 16, 184 ]
// las dos dan lo mismo, pero las flecha son mucho más reducidas

/* las funciones flecha se pueden guardar en variables, lo mejor, es guardarlas
en variables de tipo constante */

console.log(doble(6)); // 12 -> no da error
//console.log(dobleDelValor(6)); // DA ERROR
// no puede accederse a las funciones flecha porque aún no se han inicializado

// definición de una función flecha
const dobleDelValor = valor => {
    return valor * 2;
}
// misma función, pero reducida
const dobleDelValorReducida = valor => valor * 2;

console.log(dobleDelValor(6)); // 12 -> aquí no da error, ya se ha inicializado la función

// otra forma
const array3 = array.map(dobleDelValor);
console.log(array3); // [ 2, 10, 12, 4, 14, 24, 16, 184 ]

function doble(valor){
    return valor * 2;
}

// es una buena práctica el declarar las funciones siempre primero