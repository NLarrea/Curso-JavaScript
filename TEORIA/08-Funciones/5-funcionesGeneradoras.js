// FUNCIONES GENERADORAS

// se crean con un * después de "function"
function* generaID(){
    let id = 0;
    while(true){
        id++;
        if(id === 10){
            return id; // para que salga de la función
        }
        yield id; // para que vaya enviando el número y se quede "parada" aquí
        /* yield = return, pero sin salir de la función "del todo", solo espera a
        que se le vuelva a llamar a la función */
    }
}

const gen = generaID(); // gen = typeof {[Generator]}

console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: 4, done: false }
console.log(gen.next()); // { value: 5, done: false }
console.log(gen.next()); // { value: 6, done: false }
console.log(gen.next()); // { value: 7, done: false }
console.log(gen.next()); // { value: 8, done: false }
console.log(gen.next()); // { value: 9, done: false }
console.log(gen.next()); // { value: 10, done: false }

/* devuelve un objeto con propiedades "value" y "done" -> se puede obtener solo el valor
console.log(gen.next().value) -> imprimiría 1
console.log(gen.next().value) -> imprimiría 2
console.log(gen.next().value) -> imprimiría 3
... 10
*/