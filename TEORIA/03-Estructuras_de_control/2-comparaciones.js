// COMPARACIONES

// IGUALDAD

if (5 == 5) {       // igualdad débil
    console.log("5 es igual a 5");
}

if (5 === 5) {      // igualdad fuerte
    console.log("5 es muy igual a 5");
}

/*
los dos iguales chequea únicamente el valor, mientras que los tres iguales
compara el valor y el tipo
*/

let a = 5;
let b = "5";

if (a == b) {
    // se imprime porque tienen el mismo valor
    console.log("A es igual a B - Débil");
}

if(a === b) {
    // no se imprime porque son de distintos tipos
    console.log("A es igual a B - Fuerte");
}



// DESIGUALDAD

let c = 4;
let d = 10;

if (c != d) {
    // se imprime porque tienen valores distintos
    console.log("C es diferente a D - Débil");
}

if (c !== d) {
    // se imprime porque tienen valores distintos
    console.log("C es diferente a D - Fuerte");
}


let e = "4"; // mismo valor que C pero diferente tipo

if (c != e) {
    // no se imprime porque tienen el mismo valor
    console.log("C es diferente a E - Débil");
}

if (c !== e) {
    // se imprime porque compara que sean diferentes en valor o en tipo
    console.log("C es diferente a E - Fuerte")
}



// MAYOR QUE / MENOR QUE

let max = 10;
let min = 5;

// se imprimen los 4 casos:
if (max > min) {
    console.log("max es mayor que min");
}

if (max >= min) {
    console.log("max es mayor o igual que min");
}

if (min < max) {
    console.log("min es menor que max");
}

if (min <= max) {
    console.log("min es menor o igual que max");
}