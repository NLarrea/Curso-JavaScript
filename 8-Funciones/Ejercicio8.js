/*
Crea un archivo JS que contenga las siguientes líneas
- Una función sin parámetros que devuelva siempre "true"
- Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
- Una función generadora de índices pares automáticos
*/

// Una función sin parámetros que devuelva siempre "true"
function verdadero(){
    return true;
}


// Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
function miPromesa(){
    console.log("Hola soy una promesa");
}
setTimeout(miPromesa, 5000);
// esto se puede guardar en una variable también -> const myVar = setTimeout(miPromesa, 5000);


// Una función generadora de índices pares automáticos
function* generarID(){
    let id = 0;
    while(id <= 10){ // por ponerle un final al bucle
        id++;
        if(id%2 === 0){
            yield id;
        }
    }
}
const genID = generarID();
console.log(genID.next().value); // 2
console.log(genID.next().value); // 4
console.log(genID.next().value); // 6
console.log(genID.next().value); // 8
console.log(genID.next().value); // 10