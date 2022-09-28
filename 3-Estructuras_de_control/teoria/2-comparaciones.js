// COMPARACIONES
// IGUALDAD
if(5 == 5){ // igualdad débil
    console.log("5 es igual a 5");
}
if(5 === 5){ // igualdad fuerte
    console.log("5 es muy igual a 5");
}
/* los dos iguales checkea únicamente el valor, mientras que los tres
iguales compara el valor y el tipo */
let a = 5;
let b = "5";
if(a == b){
    console.log("A es igual a B - Débil");
    // se imprime porque tienen el mismo valor
}
if(a === b){
    console.log("A es igual a B - Fuerte");
    // no se imprime porque son de distintos tipos
}

// DESIGUALDAD
let c = 4;
let d = 10;
if(c != d){
    console.log("C es diferente a D - Débil");
    // se imprime porque tienen valores distintos
}
if(c !== d){
    console.log("C es diferente a D - Fuerte");
    // se imprime porque tienen valores distintos
}
let e = "4"; // mismo valor que C pero diferente tipo
if(c != e){
    console.log("C es diferente a E - Débil");
    // no se imprime porque tienen el mismo valor
}
if(c !== e){
    console.log("C es diferente a E - Fuerte")
    // se imprime porque compara que sean diferentes en valor o en tipo
}

// MAYOR QUE / MENOR QUE
let max = 10;
let min = 5;
if(max > min){
    console.log("max es mayor que min"); // se imprime
}
if(max >= min){
    console.log("max es mayor o igual que min"); // se imprime
}
if(min < max){
    console.log("min es menor que max"); // se imprime
}
if(min <= max){
    console.log("min es menor o igual que max"); // se imprime
}