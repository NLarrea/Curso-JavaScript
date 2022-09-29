// MÉTODOS MÁS USADOS CON STRINGS

// OBTENER LA LONGITUD DE UN STRING
let str = "Hola soy un string";
console.log(str.length); // 18


// OBTENER PARTES DE UN STRING -> 3 opciones
// slice(pos_inicio, pos_final)
let slice_str = str.slice(3, 10);
console.log(slice_str); // a soy u

// substring(pos_inicio, pos_final)
let substring_str = str.substring(3, 10);
console.log(substring_str); // a soy u

// substr(pos_inicial, longitud)
let substr_str = str.substr(3, 7);
console.log(substr_str); // a soy u
/* esta última opción se está quedando obsoleta, por eso
aparece tachada, y es poco recomendable usarla */


// REEMPLAZAR CONTENIDO DE UNA CADENA
let cadena = "Hola mi nombre es Naia";
console.log(cadena); // Hola mi nombre es Naia
console.log(cadena.replace("Naia", "Cristina")); // Hola mi nombre es Cristina

// si se quieren reemplazar varios "trozos" de texto, replace() no sirve
let texto_largo = "Tito no es un mono cualquiera. A Tito no le gusta trepar por los árboles y odia comer plátanos. Él prefiere pasear por el bosque, oler las flores y recoger las nueces que se caen de los árboles."
console.log(texto_largo.replace("Tito", "Atom")); // solo sustituye el primer nombre, no el segundo
// "Atom no es un mono cualquiera. A Tito no le gusta trepar por los árboles y odia comer plátanos. Él prefiere pasear por el bosque, oler las flores y recoger las nueces que se caen de los árboles."
// habria que hacerse así (expresión regular /g (global)):
console.log(texto_largo.replace(/Tito/g, "Atom"));
// "Atom no es un mono cualquiera. A Atom no le gusta trepar por los árboles y odia comer plátanos. Él prefiere pasear por el bosque, oler las flores y recoger las nueces que se caen de los árboles."