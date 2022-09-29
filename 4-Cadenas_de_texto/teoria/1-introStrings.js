// CADENAS DE TEXTO / STRINGS

// STRINGS ESTÁTICOS
// comillas dobles
let str_dbl = "Hola soy un texto con comillas dobles";
console.log(str_dbl); // Hola soy un texto con comillas dobles

// comillas simples
let str_sng = 'Hola soy un texto con comillas simples';
console.log(str_sng); // Hola soy un texto con comillas simples

/* no hay diferencia entre usar comillas simples o dobles, pero siempre
debe acabar con el mismo tipo de comilla con el que se empezó el string */

// se pueden mezclar las comillas para crear entre comillados
let entreComillas1 = "Me dijo 'te has confundido de clase'";
console.log(entreComillas1); // Me dijo 'te has confundido de clase'
let entreComillas2 = "Me dijo \"te has confundido de clase\"";
console.log(entreComillas2); // Me dijo "te has confuncido de clase"

// STRINGS CON PLANTILLAS
// comillas invertidas
let str_backticks = `Esto es un string con comillas invertidas`;
console.log(str_backticks); // Esto es un string con comillas invertidas

let nombre = "Naia";
let saludo = `Hola ${nombre}, ¿cómo estás?`;
console.log(saludo); // Hola Naia, ¿cómo estás?

/* las comillas invertidas permiten los saltos de línea, lo que
permite crear plantillas de html por ejemplo*/
let plantilla = `
<html>
    <h1>Página web de ${nombre}</h1>
    <p>Este es un párrafo</p>
</html>
`;
console.log(plantilla);

// variables en HTML
let libros = ["Legend", "Las luces de septiembre", "El palacio de la media noche"];