// CONCATENACIÓN Y OBTENCIÓN DE FRAGMENTOS

// UNIR DOS LISTAS
// forma 1 -> .concat()
const lista1 = ["hola", 2, false, null];
const lista2 = ["adios", true, undefined];
console.log(lista1.concat(lista2)); // [ "hola", 2, false, null, "adios", true, undefined ]
// no se ven modificados ni la lista1 ni la lista2 -> habría que hacer algo así
const lista3 = lista1.concat(lista2);

// froma 2 -> factor de propagación
console.log(...lista3); // hola 2 false null adios true undefined
// logea cada valor de la lista por separado, entonces, se puede hacer algo así
const lista4 = [...lista1, ...lista2];
console.log(lista4); // [ "hola", 2, false, null, "adios", true, undefined ]

// NO confundir el factor de propagación con esto
const lista5 = [lista1, lista2];
console.log(lista5); // [ [ 'hola', 2, false, null ], [ 'adios', true, undefined ] ]


// OBTENER LISTA A PARTIR DE OTRA -> .slice()
// .slice(pos_inicio (incluido), pos_final (no incluido))
const arr = ["hola", 1, 2, 3, true, "adios"]
// .slice() no modifica el valor del array original
console.log(arr.slice(1,4)); // [ 1, 2, 3 ]

// se pueden usar valores negarivos para comenzar desde el final
console.log(arr.slice(2, -2)); // [ 2, 3 ] -> pos -2 sería el true (que no lo coge)