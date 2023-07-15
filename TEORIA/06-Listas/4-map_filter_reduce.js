// MÉTODOS AVANZADOS DE LISTAS

// MÉTODO .map()

/*
.map() -> permite iterar todos los elementos de un arreglo, retorna uno nuevo,
dada una determinada función a ejecutar en cada elemento del array

.forEach() -> es igual que .map(), pero sin retornar valores nuevos, solo
recorre el array ejecutando la función en cada elemento (sin devolverlo)
*/

const arr = ["Bilbao", "Durango", "Madrid", "Murcia"];
const val = arr.forEach(element => {
    console.log(element);               // Bilbao, Durango, Madrid, Murcia
});

console.log(val);
// undefined -> porque el forEach en realidad no tiene objetivo concreto


// solución: usar .map()
const newArr = arr.map((valor, index) => {
    return `${index+1} - ${valor}`;     // index+1 porque empieza en 0
});

console.log(newArr);
// [ '1 - Bilbao', '2 - Durango', '3 - Madrid', '4 - Murcia' ]


// se podría hacer de forma reducida:
const newArrShorter = arr.map((valor, indice) => `${indice} - ${valor}`);
console.log(newArr);
// [ '1 - Bilbao', '2 - Durango', '3 - Madrid', '4 - Murcia' ]



// MÉTODO .filter()

/*
.find() -> retorna el primer elemento que encuentre cumpliendo los
requisitos definidos

.filter() -> retorna todos los elementos que encuentre cumpliendo los
requisitos definidos
*/

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

console.log(mayoresDe30);
// [ { nombre: 'Leire', edad: 35 }, { nombre: 'Gorka', edad: 34 } ]


// forma reducida
const mayoresDe30reducido = listaObjetos.filter(obj => obj.edad > 30);
console.log(mayoresDe30reducido);
// [ { nombre: 'Leire', edad: 35 }, { nombre: 'Gorka', edad: 34 } ]


// si queremos obtener todas las personas menos 1
const newList = listaObjetos.filter(obj => obj.nombre !== "Miguel");
console.log(newList);
// devuelve todos menos { nombre: 'Miguel', edad: 28 }



// MÉTODO .reduce()

/*
.reduce() -> permite "reducir" o "transformar" los elementos de un arreglo en
uno nuevo y de único valor
*/

const valores = [3, 56, 23, 5, 90, 100];

const suma = valores.reduce((acumulado, current, i, arrayOriginal) => {
    console.log(acumulado);         // 3, 59, 82, 87, 177 -> no se ve el 277 porque no vuelve a entrar aquí
    console.log(current);           // 56, 23, 5, 90, 100
    console.log(i);                 // 1, 2, 3, 4, 5
    console.log(arrayOriginal);     // [3, 56, 23, 5, 90, 100] -> la repite cada vez que itera
    return acumulado + current;     // sería como hacer "suma += valores[i]" en un for
})

console.log(suma);                  // 277


// saber qué elemento en una lista tiene el valor más alto
const biggest = valores.reduce((biggest, current) => current > biggest ? current : biggest);

console.log(biggest);               // 100


/* saber cuál es la palabra más larga -> misma forma que antes, pero hecha en
más líneas de código para ver que sigue funcionando */
const names = ['naia', 'cristina', 'june', 'clara', 'veronica']
const longest = names.reduce((longest, current) => {
    return current.length > longest.length ? current : longest
});

console.log(longest);               // cristina


// OTRO EJEMPLO DE .reduce()
/**
 * Queremos doblar los números pares de una lista y quedarnos solo con los que
 * son mayores que 5.
 * 
 * Podríamos usar un .map() para doblar los valores y después un .filter() para
 * quedarnos con los mayores de 5.
 * 
 * Existe una forma de hacerlo con .reduce() y evitarnos utilizar un Array
 * intermedio o dos métodos consecutivos.
 */

const myNumbers = [1, 2, 3, 4, 5, 6, 7];

const doubleEvenNumbersGreaterThanFive = myNumbers.reduce((accumulator, current) => {
    const isEven = current % 2 === 0;
    const isGreaterThanFive = doubled > 5;
    const doubled = current * 2;

    // si es par y mayor que 5 -> lo añadimos al array nuevo que se va a devolver
    if (isEven && isGreaterThanFive) {
        return accumulator.concat(doubled);
    } else {
        // si no se cumplen las condiciones, nos quedamos como estábamos
        return accumulator;
    }
}, []); // valor inicial de .reduce() -> array vacío

console.log(doubleEvenNumbersGreaterThanFive);      // [8, 12]