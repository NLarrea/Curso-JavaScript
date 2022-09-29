// EXPRESIONES REGULARES

// para aprender más sobre expresiones regulares: https://regexr.com

// CUÁNTAS VECES APARECE TEXTO
let texto_largo = "Tito no es un mono cualquiera. A Tito no le gusta trepar por los árboles y odia comer plátanos. Él prefiere pasear por el bosque, oler las flores y recoger las nueces que se caen de los árboles."
console.log(texto_largo.match(/no/g)); // [ 'no', 'no', 'no', 'no' ]
// devuelve una lista con cuántas veces se repite ese trozo, puede ir dentro de una palabra


// SABER SI CONTIENE TEXTO / PALABRA
console.log(texto_largo.includes("prefiere")); // true -> aparece
console.log(texto_largo.includes("terremoto")); // false -> no aparece


// SABER SI EMPIEZA / TERMINA CON UNA PALABRA
console.log(texto_largo.startsWith("Árboles")); // false -> no empieza por Árboles
console.log(texto_largo.startsWith("Tito")); // true
console.log(texto_largo.startsWith("tito")); // false -> es case sensitive

console.log(texto_largo.endsWith("Tito")); // false
console.log(texto_largo.endsWith("árboles.")); // true -> no olvidar el punto
console.log(texto_largo.endsWith("árboles")); // false -> falta el punto
console.log(texto_largo.endsWith("Árboles.")); // false -> es case sensitive