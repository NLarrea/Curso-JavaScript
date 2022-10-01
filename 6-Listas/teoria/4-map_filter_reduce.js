// MÉTODOS AVANZADOS DE LISTAS

// MÉTODO .map()
const arr = ["Bilbao", "Durango", "Madrid", "Murcia"];
const val = arr.forEach(element => {
    console.log(element); // Bilbao, San Sebastián, Madrid, Murcia, Durango
});
console.log(val); // undefined -> porque el forEach en realidad no tiene objetivo concreto

// solución: usar .map()
const newArr = arr.map((valor, index) => {
    return `${index+1} - ${valor}`; // index+1 porque empieza en 0
})
console.log(newArr); // [ '1 - Bilbao', '2 - Durango', '3 - Madrid', '4 - Murcia' ]

// se podría hacer de forma reducida:
const newArrShorter = arr.map((valor, indice) => `${indice} - ${valor}`);
console.log(newArr); // [ '1 - Bilbao', '2 - Durango', '3 - Madrid', '4 - Murcia' ]


// MÉTODO .filter()
const listaObjetos = [
    {nombre: "Leire", edad: 35},
    {nombre: "Gorka", edad: 34},
    {nombre: "Miguel", edad: 28},
    {nombre: "Lucía", edad: 3},
    {nombre: "Amaia", edad: 29}
]
const mayoresDe30 = listaObjetos.filter(obj => {
    if(obj.edad > 30){
        return true;
    }
    else {
        return false;
    }
})
console.log(mayoresDe30); // [ { nombre: 'Leire', edad: 35 }, { nombre: 'Gorka', edad: 34 } ]

// forma reducida
const mayoresDe30reducido = listaObjetos.filter(obj => obj.edad > 30);
console.log(mayoresDe30reducido); // [ { nombre: 'Leire', edad: 35 }, { nombre: 'Gorka', edad: 34 } ]

// si queremos obtener todas las personas menos 1
const newList = listaObjetos.filter(obj => obj.nombre !== "Miguel");
console.log(newList); // devuelve todos menos { nombre: 'Miguel', edad: 28 }


// .reduce() -> obtener algo a partir de una lista (lo que sea, objeto, valor, etc.)
const valores = [3, 56, 23, 5, 90, 100];
const suma = valores.reduce((acumulado, current, i, arrayOriginal) => {
    console.log(acumulado); // 3, 59, 82, 87, 177 -> no se ve el 277 porque no vuelve a entrar aquí
    console.log(current); // 56, 23, 5, 90, 100
    console.log(i); // 1, 2, 3, 4, 5
    console.log(arrayOriginal); // [ 3, 56, 23, 5, 90, 100 ] -> la repite cada vez que itera -> 5 veces en este caso
    return acumulado + current; // sería como hacer "suma += valores[i]" en un for
})
console.log(suma); // 277