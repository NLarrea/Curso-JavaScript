// CREAR RANGOS DE NÚMEROS

// Incluyendo solo el extremo inferior
const range = (start, end) => Array.from('x'.repeat(end - start), (_, i) => start + i);
// Incluyendo ambos extremos
const range2 = (min, max) => Array.from({length: max-min+1}, (_, i) => i + min);

console.log(range(4, 8));   // [4, 5, 6, 7]
console.log(range2(4, 8));  // [4, 5, 6, 7, 8]

/*
creamos una función que guardamos en la constante "range". Lo que hace es crear
un array de 'x' repitiendo las 'x' (end-start) veces. Pero en vez de devolver
ese array, con su index (_, i) y una función flecha indica que "cambie el valor
del array de 'x'" por "star + i", por lo que se crea un rango.

(_, i) -> lo que hace es ignorar el valor de 'x' y quedarse solo con el index
(como pasa con las funciones .forEach(), donde el primer parámetro es el
currentValue y el segundo el index), lo que hace "_" es ignorar el valor
*/

/* Array.from(iterable, mapfn)
iterable -> An iterable object to convert to an array.
mapfn -> A mapping function to call on every element of the array.
*/

const rangeMejorado = (start, end) => {
    // si solo se introduce un valor, end = 0
    end = end | 0;
    // start = valor más bajo, end = valor más alto
    [start, end] = [Math.min(start, end), Math.max(start, end)]
    return Array.from('x'.repeat(end - start), (_, i) => start + i)
};