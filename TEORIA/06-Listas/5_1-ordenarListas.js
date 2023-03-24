// ORDENAR LISTAS

// ORDENAR LISTAS -> .sort()

// .sort() sí modifica el array original
// debe retornar siempre un valor numérico

const arr = [2, 5, 9, 15, 1, 2, 0, 4];
console.log(arr); // [ 2, 5, 9, 15, 1, 2, 0, 4 ]

arr.sort((anterior, siguiente) => {
    return -1;
    /* invierte el orden, porque 'anterior' siempre tendrá un índice menor que
    'siguiente' */
});

console.log(arr);   // [ 4, 0, 2, 1, 15, 9, 5, 2 ]


arr.sort((anterior, siguiente) => {
    return 1;
    // devuelve el array tal y como estaba la última vez -> sin modificar
});

console.log(arr);   // [ 4, 0, 2, 1, 15, 9, 5, 2 ]



// de menor a mayor
arr.sort((anterior, siguiente) => {
    if (anterior < siguiente) {
        return -1;
    } else if (anterior > siguiente) {
        return 1;
    } else {        // anterior === siguiente
        return 0;
    }
});

console.log(arr);   // [ 0, 1, 2, 2, 4, 5, 9, 15 ]



// de mayor a menor
arr.sort((anterior, siguiente) => {
    if (anterior < siguiente) {
        return 1;
    } else if (anterior > siguiente) {
        return -1;
    } else {        // anterior === siguiente
        return 0;
    }
});

console.log(arr);   // [ 15, 9, 5, 4, 2, 2, 1, 0 ]



// ORDENAR ÚNICAMENTE ARRAYS NUMÉRICOS DE MEJOR FORMA

const arrNum = [4, 1, 7, 3, 56, 1, 5461];

// de menor a mayor
arrNum.sort((a,b) => a-b);
console.log(arrNum);    // [ 1, 1, 2, 4, 7, 56, 5461 ]


// de mayor a menor
arrNum.sort((a,b) => b-a);
console.log(arrNum);    // [ 5461, 56, 7, 4, 3, 1, 1 ]

/* esta forma, "a-b", retorna la división entre a y b, si es "negativa",
significa que a es menor que b */



// ORDENAR ARRAYS DE OBJETOS

const listaObjetos = [
    {nombre: "Leire", edad: 35},
    {nombre: "Gorka", edad: 34},
    {nombre: "Miguel", edad: 28},
    {nombre: "Lucía", edad: 3},
    {nombre: "Amaia", edad: 29}
];

// si queremos ordenar los objetos por su edad
listaObjetos.sort((objA, objB) => {
    if (objA.edad < objB.edad) {
        return -1;
    } else if (objA.edad > objB.edad) {
        return 1;
    } else {
        return 0;
    }
});

console.log(listaObjetos);      // objetos ordenados por edades: menor a mayor
/* imprime:
    [ { nombre: 'Lucía', edad: 3 },
      { nombre: 'Miguel', edad: 28 },
      { nombre: 'Amaia', edad: 29 },
      { nombre: 'Gorka', edad: 34 },
      { nombre: 'Leire', edad: 35 } ] */


// otra forma
listaObjetos.sort((objA, objB) => objA.edad - objB.edad);
console.log(listaObjetos);      // objetos ordenados por edades: menor a mayor