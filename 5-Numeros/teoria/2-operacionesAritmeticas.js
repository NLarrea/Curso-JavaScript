// PRINCIPALES OPERACIONES ARITMÉTICAS
let a = 3.5;
let b = 4.8;

// suma
console.log(a + b); // 8.3 -> aquí los bytes sí coinciden y no hay que aplicar precisión

// resta
console.log(a - b); // -1.29999...

// multiplicación
console.log(a * b); // 16.8

// división
console.log(a / b); // 0.729166...7


// REPRESENTACIÓN DE LOS NÚMEROS EN CADENAS DE TEXTO
let a_s = a.toString();
console.log(a); // 3.5
console.log(a_s); // 3.5
console.log(typeof a); // number
console.log(typeof a_s); // string


// REDONDEAR NÚMEROS DECIMALES
let c = 3.3;
let d = c * 3;
console.log(d); // 9.899999...
console.log(d.toFixed(4)); // 9.9000
// problema -> nos convierte el tipo a string:
console.log(typeof d.toFixed(4)); // string
/* toFixed() convierte el número en string y limita sus decimales al valor x */

let e = 1839.1232456789;
console.log(e.toFixed(2)); // 1839.12

let f = 2213556153215;
console.log(f.toFixed(2)); // 221355.00

// toPrecision() -> limita el número de cifras significativas (cifras totales, no solo detrás de la coma)
console.log(e.toPrecision(6)); // 1839.12
console.log(f.toPrecision(7)); // 2.213556e+12 -> 7 cifras, con notación científica
console.log(typeof e.toPrecision(4)); // string -> toPrecision() también devuelve un tipo string