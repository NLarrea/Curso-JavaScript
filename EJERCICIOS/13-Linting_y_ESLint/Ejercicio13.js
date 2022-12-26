/*
Crea un nuevo proyecto de Node
- Instala la dependencia ESLint (https://www.npmjs.com/package/eslint)
- Duplica el archivo del ejercicio de la sesión 04-Textos
- Utiliza los tres estilos de comillas de forma alterna (comillas simples, dobles, backticks)
- Crea el fichero .eslintrc.json
- Cambia la configuración de ESLint para que la versión ecmaVersion sea "latest"
- Cambia la configuración de ESLint para que muestre un error cada vez que las comillas no sean dobles
- Crea un script en el package.json para corregir automáticamente todos los errores
- Ejecuta el script a través del terminal
*/

// Una cadena de texto con tu Nombre:
let nombre = "Naia";

// Otra cadena de texto con tu Apellido
let apellido = "Larrea";

// Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
let estudiante = `${nombre} ${apellido}`;
console.log(estudiante); // Naia Larrea

// Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
let estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus); // NAIA LARREA

// Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
let estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus); // naia larrea

// Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
let len = estudiante.length;
console.log(len);

// Una variable que contenga la primera letra del Nombre
let firstChar = nombre[0];
console.log(firstChar); // N

// Otra variable que contenga la última letra del Apellido
let lastChar = apellido[apellido.length - 1];
console.log(lastChar); // a

// Una cadena de texto que elimine los espacios de la variable "estudiante"
let noSpace = estudiante.replace(" ", "");
console.log(noSpace); // NaiaLarrea

// Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
let isName = estudiante.includes(nombre);
console.log(isName); // true