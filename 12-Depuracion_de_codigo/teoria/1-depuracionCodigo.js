// DEPURACIÓN DE CÓDIGO

/* consiste en ir ejecutando el código de forma continuada para comprobar que todas
las partes del código funcionan */

const persona = {
    nombre: "Naia",
    edad: 24
}

console.log(persona); // punto de ruptura añadido

function obtenDobleEdad(edad){
    return edad * 2;
}

const dobleEdad = obtenDobleEdad(persona.edad);
console.log(dobleEdad); // 48 -> punto de ruptura

/* lo más cómodo para depurar el código es ir viendo por pantalla los valores de las variables,
sin embargo, se puede ejecutar y depurar un código desde VSCode */


// OTRO EJEMPLO
function obtenArray(edad){
    let arrayNums = [];
    for(let i=0; i<10; i++){
        const numero = edad + i;
        console.log(numero);
        arrayNums = [...arrayNums, numero]; // para añadir numero a la lista
    }
    return arrayNums;
}
const array = obtenArray(persona.edad);
console.log(array);