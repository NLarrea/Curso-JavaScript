// NOTACIÓN EN JAVASCRIPT

// PUNTO Y COMA ;
/* sirve para delimitar el final de una línea, aunque a día de hoy esto se
puede eliminar, pero lo mejor es usarlo siempre */
const b = 4;
const c = 5     //no da error



// PUNTO .
/* se utiliza en los objetos para acceder a sus atributos */
// ejemplo: movil.anchura



// PARÉNTESIS ()
/* se utilizan para las funciones */
function suma(a,b){
    // código de la función
}



// CORCHETES []
/* sirven para las listas / arreglos / arrays (son lo mismo), tanto para
definirlas, como para acceder a un elemento concreto de ellas */
const ar = [1,2,3,4];       // crea una lista
console.log(ar[2]);         // imprime el elemento "3"



// LLAVES {}
/* sirven para sets, objetos, funciones y estructuras de control */
const movil = {
    anchura: 5,
    altura: 10,
    profundidad: 2
}

if(true){
    // código del if()
}