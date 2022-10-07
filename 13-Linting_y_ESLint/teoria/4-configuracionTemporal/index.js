// ACTIVACIÓN O DESACTIVACIÓN MOMENTÁNEA DE ESLINT

/* desactivar ESLint del todo -> eslint-disable / eslint-enable */

// línea sin "errores"
const nombre = "Naia";

// bloque con "errores" pero ESLint deshabilitado
/* eslint-disable */
const nombre2 = 'María'
/* eslint-enable */

// línea a la que le decimos que no tenga en cuenta "errores"
const comillasSimples = 'Esto es un string'; // eslint-disable-line

// línea a la que le decimos que no tenga en cuenta el punto y coma
const sinPuntoYComa = "En esta línea no hay punto y coma" // eslint-disable-line semi

/* eslint-disable-next-line indent */
  const espacios = "Esta línea tiene dos espacios por delante, pero no se tiene en cuenta";


// PARA APLICAR CONFIGURACIÓN EN TODOS NUESTROS PROYECTOS
/* 
1. ir al package.json
2. en la parte de los scripts escribimos -> "lint": "eslint ."
3. npm run lint -> nos dirá qué "errores" hay
    aparece también un mensaje de que los errores pueden arreglarse solos con --fix
4. vamos a package.json y en el script escribimos debajo de la línea del paso 2 -> "lint-fix": "eslint --fix"
5. npm run lint-fix -> corrije todos los errores menos el de console.log(), que no lo elimina por si fuera necesario usarlo
    deshabilito ESLint en esa línea para que no de problema
*/

// líneas con errores para arreglar de forma automática
console.log("Hola"); // eslint-disable-line no-console
const string = "comillas simples";
const string2 = "sin semicolon";
