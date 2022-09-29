/* 
Crea un archivo JS que contenga las siguientes líneas
- Una variable que contenga tu altura en centímetros (entero)
- Una variable que contenga tu altura en metros (número de coma flotante)
- Una variable que contenga tu peso en kilogramos (número de coma flotante)
- Una variable que contenga tu altura en metros redondeada hacia arriba
- Una variable que contenga tu peso en kilogramos redondeado hacia abajo
- Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript
*/

// Una variable que contenga tu altura en centímetros (entero)
let altura_cm = 162;

// Una variable que contenga tu altura en metros (número de coma flotante)
let altura_m = 1.62;

// Una variable que contenga tu peso en kilogramos (número de coma flotante)
let peso_kg = 62.2;

// Una variable que contenga tu altura en metros redondeada hacia arriba
let altura_arriba = Math.ceil(altura_m);
console.log(altura_arriba); // 2

// Una variable que contenga tu peso en kilogramos redondeado hacia abajo
let peso_abajo = Math.floor(peso_kg);
console.log(peso_abajo); // 62

// Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript
let esPosible = (Number.MAX_VALUE + 1) == Number.MAX_VALUE;
console.log(esPosible); // true