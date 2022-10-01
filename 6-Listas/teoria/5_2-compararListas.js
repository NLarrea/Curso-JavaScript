// COMPARACIÓN DE LISTAS

// COMPARAR SI TODOS COMPARTEN X -> .every()
const arr2 = [4, 6, 7, 8, 3, 6, 2, 1, -4, -7, 12, 5, -40];
const result = arr2.every(valor => {
    if(typeof valor === "number"){
        return true;
    }
    else{
        return false;
    }
})
console.log(result); // true

const result2 = arr2.every(valor => {
    if(valor > 0){
        return true;
    }
    else{
        return false;
    }
})
console.log(result2); // false

// forma corta (intentar hacerlo siempre así)
const result2sort = arr2.every(valor => valor > 0);
console.log(result2sort); // false


// COMPARAR DOS LISTAS ENTRE SÍ
const ar1 = [1,2,3,4];
const ar2 = [1,2,3,4];
console.log(ar1 === ar2); // false -> las listas no se pueden comparar así

// ¿cómo hacerlo?
// 1. crear una función
const compararArrays = (array_1, array_2) => {
    // 2. comparamos las longitudes de ambos arrays
    if(array_1.length !== array_2.length) return false;
    // si las longitudes no son iguales, devuelve false
    // 3. comparamos cada uno de los valores del array
    const res = array_1.every((valor, i) => valor === array_2[i])
    return res;
    // devuelve true si valor === array_2[i], y false si no lo es
}
//4. llamamos a la función
console.log(compararArrays(ar1,ar2)); // true

const ar3 = [1,2,4,3];
console.log(compararArrays(ar1,ar3)); // false