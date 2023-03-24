// FUNCIONES

/* las funciones son bloques de código que se ejecutan con un
fin específico

Sintaxis:
function nombreDeFuncion(parámetros) {
    código;
}
*/

saludar("Naia");            // llamada a la función

// función saludar:
function saludar(nombre) {
    console.log(`Hola ${nombre}`);
}

/* si no le damos un parámetro al llamar a la función, se imprimiría
"Hola undefined" */



// PARÁMETROS

// variables 'comunes'
let name = "June";

despedir(name)
console.log(name); // June -> no le afecta el cambio dentro de la función

function despedir(nombre) {
    console.log(`Adiós ${nombre}`);     // Adiós June
    nombre = "Cristina";
    console.log(`Adiós ${nombre}`);     // Adiós Cristina
}


// variables de tipo objeto
let persona = {nombre: "Juan", apellido: "Gonzalez"};

saludarPersona(persona);
console.log(persona);                   // {nombre: 'Juan', apellido: 'Villar'}

/*
en los objetos sí se modifica el valor del objeto original al modificar su
valor dentro de la función
*/

function saludarPersona(objeto) {
    objeto.apellido = "Villar"
    console.log(`Hola ${objeto.nombre} ${objeto.apellido}`);
    // Hola Juan Villar
    // se cambia el valor del objeto dentro de la función y fuera también
}

// saludarPersona();         // da error
// porque intenta acceder a las propiedades del objeto y no le hemos dicho cuál

saludar();                  // no da error -> mostraría un Hola undefined



// PARÁMETROS POR DEFECTO

function imprimeNumero(numero = 7) {
    console.log(numero);
}

imprimeNumero(9);           // imprime un 9
imprimeNumero();            // imprime un 7



// CANTIDAD DE PARÁMETROS INDETERMINADA -> factor de propagación como parámetro

// mas info en el archivo 'functions.js'

function imprimir(...parametros) {
    console.log(parametros);
    /* imprime:
    [ 1, 2, 9, 'hola', { id: 9 } ] */
}

imprimir(1,2,9,"hola",{id:9});      // se imprimirán todos dentro de una lista


function suma(...nums) {
    console.log(...nums);   // 1 2 3 4
    console.log(nums[2]);   // 3
    return nums.reduce((acumulado,actual) => acumulado + actual);
}

const s = suma(1, 2, 3, 4);
console.log(s);             // 10



// ÁMBITO DE UNA FUNCIÓN

let variableExterna = "hola";

function multiplicar(a=0, b=0) {
    console.log(variableExterna);       // hola
    //se puede acceder a variables definidas fuera desde la función
    let variableInterna = "adios";      // declaración nueva variable
    return a * b;
}

//console.log(variableInterna);         // variableInterna is not defined

/* no se puede acceder a variables creadas dentro de funciones desde fuera de ellas,
pero sí se puede acceder a una variable declarada fuera desde dentro de la función */

console.log(multiplicar(4, 9));         // 36 -> resultado de la función