// IDENTIFICAR VALORES EN ARRAYS Y ELEMENTOS ITERABLES

// SABER SI AL MENOS UN VALOR CUMPLE UNA CONDICIÓN -> .some()

const arr = [3, 7, 2, 4, 7, 9, 42, 35, 7865, 23, -2];
let res = arr.some(valor => valor < 0);
console.log(res);           // true -> -2 es menor que 0


res = arr.some(valor => valor === 90);
console.log(res);           // false


const listaObjetos = [
    {nombre: "Leire", edad: 35},
    {nombre: "Gorka", edad: 34},
    {nombre: "Miguel", edad: 28},
    {nombre: "Lucía", edad: 3},
    {nombre: "Amaia", edad: 29}
];

const existeMiguel = listaObjetos.some(persona => persona.nombre === "Miguel");
console.log(existeMiguel);  // true



// OBTENER LISTA A PARTIR DE OBJETO ITERABLE -> Array.from()

// lista a partir de un string
const str = "Hola soy Naia";
const ar_str = Array.from(str);

console.log(ar_str);
// [ 'H', 'o', 'l', 'a', ' ', 's', 'o', 'y', ' ', 'N', 'a', 'i', 'a' ]


// lista a partir de un Set
const set = new Set([2, 3, "hola", 4]);
const ar_set = Array.from(set);

console.log(ar_set);
// [ 2, 3, 'hola', 4 ]



// OBTENER ITERABLE DE TODOS LOS ÍNDICES DEL ARRAY -> .keys()

const keys = arr.keys();
const ar_keys = Array.from(keys);

console.log(ar_keys); // [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
/* el resultado es porque las llaves de un array son sus propios índices, pero
es algo mucho más útil cuando se trabaja con objetos */