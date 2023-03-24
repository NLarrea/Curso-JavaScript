// NÚMEROS

// ASIGNAR A VARIABLES

let a = 5;          // "int"
console.log(a);     // 5

let b = 0.1;        // "float"
console.log(b);     // 0.1

/* en JS es independiente el tipo de número (int/float/...), se declaran todos
de la misma manera */



// PRECISIÓN

let c = 0.2;
console.log(b + c); // 0.30000000000000004

/* esto en sí no es correcto. Pasa porque JS tiene esta particularidad al
almacenar los datos en memoria. Este error también ocurre con las
multiplicaciones y es totalmente propio del lenguaje */


// aplicar solución a este problema -> utilizar el operador round()
console.log(Math.round((b + c) * 100) / 100);       // 0.3