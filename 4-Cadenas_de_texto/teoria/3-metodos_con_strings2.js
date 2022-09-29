// MÉTODOS CON STRINGS 2

// CONVERTIR EN MAYÚSCULA / MINÚSCULA
let input = "Escorpio";
let db = "escorpio";
console.log(db === input); // false
console.log(db.toLowerCase() === input.toLowerCase()); // true
// lo mismo con el .toUpperCase(), convirtiendo el texto a mayúsculas

/* existe la opción de usar .toLocaleLowerCase() en vez de .toLowerCase(),
pero realmente son lo mismo, solo que hay idiomas (turco, por ejemplo) en
los que dan resultados diferentes. En este caso no nos es relevante */


// CONCATENAR CADENAS
// forma 1
let str1 = "Hola soy la primera cadena. "; // con espacio al final
let str2 = "Y yo soy la segunda cadena";
console.log(str1.concat(str2));
// Hola soy la primera cadena. Y yo soy la segunda

// forma 2
str1 = "Hola soy la primera cadena."; // sin espacio al final
console.log(str1.concat(" ", str2));
// Hola soy la primera cadena. Y yo soy la segunda

// forma 3
console.log(str1 + " " + str2);
// Hola soy la primera cadena. Y yo soy la segunda
/* esta no es una buena práctica, ya que si se cambia el tipo de alguna de las variables
str al tipo numérico (o las dos), podríamos estar sumando de forma numérica en lugar de
estar concatenando */

// forma 4
console.log(`${str1} ${str2}`);
// Hola soy la primera cadena. Y yo soy la segunda


// QUITAR ESPACIOS AL PRINCIPIO Y FINAL
let str_esp = "     Hola soy un string con espacios al inicio y al final           ";
console.log(str_esp.length); // 51
// trim() -> quitamos espacios iniciales y finales
console.log(str_esp.trim().length); // 40
// trimStart() -> quitamos espacios iniciales
console.log(str_esp.trimStart().length); // 63
// trimEnd() -> quitamos espacios finales
console.log(str_esp.trimEnd().length); // 57


// OBTENER CHAR DE DETERMINADA POSICIÓN
// forma 1
let str_pos = "Hola soy el string número 4";
console.log(str_pos.charAt(5)); // s
// forma 2
console.log(str_pos[5]); // s


// OBTENER POSICIÓN DE PALABRA
let str_palabra = "Hola soy Naia y me gusta el rugby. Mi nombre es Naia y mi apellido Larrea";
console.log(str_palabra.indexOf("Naia")); // 9 -> devuelve la pos del primer char de esa palabra (la primera del string que coincida)
console.log(str_palabra.charAt(9)); // N -> demostración

console.log(str_palabra.indexOf("Nahia")); // -1 -> no lo encuentra

console.log(str_palabra.lastIndexOf("Naia")); // 48 -> devuelve la pos del primer char de la última palabra que coincida con esa