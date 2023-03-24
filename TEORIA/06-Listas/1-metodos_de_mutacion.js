// TRABAJAR CON LISTAS / ARRAYS / ARREGLOS / VECTORES

// DECLARACIÓN

// forma 1 -> menos usada
let array = new Array(6);       // array que tiene 6 elementos vacíos

// forma 2 -> más usada
let array2 = [1,2,3,4,5,6];


// las listas pueden contener muchísimos tipos de datos

let var1 = 25;
let array_tipos = [1, "hola", false, {id:5}, null, undefined, var1];
// {id:5} es un objeto

console.log(array_tipos);
// [ 1, 'hola', false, { id: 5 }, null, undefined, 25 ]



// ACCEDER A LOS VALORES DEL ARRAY

console.log(array2[0]);         // 1
console.log(array_tipos[3]);    // { id: 5 }



// INTRODUCIR NUEVOS VALORES -> .push() .unshift()

// *tener en cuenta que .push() y .unshift() mutan el valor del array original

// .push() -> añade al final
array2.push("final");
console.log(array2);        // [ 1, 2, 3, 4, 5, 6, 'final' ]


// .unshift() -> añade al principio
array2.unshift("inicio");
console.log(array2);        // [ 'inicio', 1, 2, 3, 4, 5, 6, 'final' ]



// ELIMINAR ELEMENTOS DE UNA LISTA -> .pop() .shift()

// *tener en cuenta que .pop() y .sifht() mutan el valor del array

// .pop() -> elimina valores del final
array2.pop();
console.log(array2);        // [ 'inicio', 1, 2, 3, 4, 5, 6 ]

// .shift() -> elimina valores al principio
array2.shift();
console.log(array2);        // [ 1, 2, 3, 4, 5, 6 ]



// MÉTODO PARA ELIMINAR / MODIFICAR / AÑADIR VALORES AL ARRAY -> .splice()

// .splice(índice, eliminar, valor(es)_a_introducir (opcional))

// eliminar valores
const array3 = [1,2,3,4,5,6];

array3.splice(2, 3);            // que elimine 3 valores desde la posición 2
/*
 - si se le pone un 0 como segundo parámetro, es como no poner nada, como si no
se estuviera usando el método
 - si se pone .splice(index) se elimina todo lo que haya desde ese index en
adelante, index incluido
*/
console.log(array3);            // [ 1, 2, 6 ]


// añadir valores
array3.splice(2, 0, "hola")
console.log(array3);            // [ 1, 2, 'hola', 6 ]
// con el segundo número = 0, indicamos que no queremos eliminar valores


// modificar valores -> poner mismo índice, eliminar 1 valor y añadir otro
array3.splice(2, 1, 3, 4, 5);   // elimina item en pos 2, y añade: 3, 4 y 5
console.log(array3);            // [ 1, 2, 3, 4, 5, 6 ]