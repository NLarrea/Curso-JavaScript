// GESTIÓN DE ERRORES

/* siempre pueden surgir errores, lo mejor que se puede hacer es tratar
de gestionar siempre los errores, haciendo algo parecido a lo visto con
las promesas.
Es muy importante llevar una gestión de los errores siempre */

const myFunction1 = val => val * 2;

console.log(myFunction1(2)); // 4 -> OK
console.log(myFunction1(21)); // 42 -> OK
console.log(myFunction1("hola")); // NaN -> no queremos que nos devuelva esto
/* queremos que nos lance un error cuando ese tipo de variable que le enviamos (un
string en este caso) no se pueda evaluar */


// para lanzar el error -> primero chequear el tipo de la variable
const myFunction2 = val => {
    if(typeof val === "number"){
        // si es correcto, devuelve el doble del número
        return val * 2;
    }
    // si no es correcto el tipo, lanza un error
    throw new Error("El valor debe ser de tipo número");
}

console.log(myFunction2(4)); // 8 -> vemos que funciona
//console.log(myFunction2("hola")); // Lanza un error: El valor debe ser de tipo número


// CÓMO GESTIONAR EL ERROR LANZADO
const numero = 7;
const cadena = "Hello World!";

try {
    // código que puede fallar
    console.log(myFunction2(numero)); // 14
    console.log("Está ejecutándose de forma correcta"); // sí se imprime
    console.log(myFunction2(cadena)); // genera un error -> saltamos al catch()
    // si aquí le mandamos un tipo de variable que no es numérico, se imprime el ERROR! de abajo
    console.log("Está ejecutándose de forma correcta"); // no se imprime
}
catch(e){
    // en caso de fallar, se ejecuta esto
    console.error("ERROR!"); // ERROR!
    console.error(`ERROR: ${e}`); // ERROR: Error: El valor debe ser de tipo número
    /* se usa console.error() porque aunque aquí no se vea, a la hora de gestionar errores y mostrarlos,
    así se ven mejor, de otra manera diferente a un simple console.log */
    /* la variable 'e' guarda el mensaje que se ha escrito en: throw new Error("mensaje") */
}
finally {
    console.log("Esto se va a ejecutar siempre, haya error o no");
}


// ERRORES MÁS COMUNES
/*
InternalError -> cuando hay stack overflow
SyntaxError -> cada vez que hay un fallo de sintaxis (escribir conts en vez de const o así)
TypeError -> ej.: pasarle a una función un número cuando espera un booleano
RangeError -> que estamos intentando acceder a una posición que está pasando el index de un array por ejemplo
ReferenceError -> tratar de llamar a una variable/función/... que no existe o aún no se ha inicializado

Página útil para mirar e investigar más errores:
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Error
*/