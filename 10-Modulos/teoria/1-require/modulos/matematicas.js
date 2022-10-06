// COPIA DE LAS FUNCIONES DE index.js

function suma(a, b){
    return a + b;
}

function multiplica(a, b){
    return a * b;
}

function eleva(a, b){
    return a ** b;
}

function factorial(a){
    if(a === 1){
        return 1;
    }
    return a * factorial(a-1);
}


// EXPORTACIÓN DE FUNCIONES
module.exports = {
    suma,
    multiplica,
    eleva,
    factorial
}