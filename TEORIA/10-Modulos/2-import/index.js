// IMPORT() -> ES6

/*
1. en esta carpeta: npm init -y

2. en el archivo package.json escribimos
    "main": "index.js", -> este igual ya estaba
    "type": "module",

3. creamos carpeta modulos y copiamos el archivo matematicas.js de la clase
anterior

4. borramos la parte de código referente a la exportación de datos:
        module.exports = {
            suma,
            multiplica,
            eleva,
            factorial
        }

5. aplicamos nuevo método de exportación
*/



// IMPORTAR FUNCIONES POR NOMENGLATURA

/* FORMA 1 -> importar algunas partes del módulo

import {suma, eleva, nombre} from './modulos/matematicas.js'
// entre llaves metemos las funciones / elementos que queramos

// comprobaciones de que funciona
const sum = suma(4, 12);
console.log(sum);

const potencia = eleva(2, 21);
console.log(potencia);

console.log(nombre);
*/


/* FORMA 2 -> importar el módulo entero */

import * as moduloMatematicas from './modulos/matematicas.js';

// comprobación de que funciona
const sum = moduloMatematicas.suma(4, 12);
console.log(sum);               // 16



// IMPORTACIÓN POR DEFECTO (getAutor)
import getAutor, {libro} from './modulos/literatura.js';
// libro importado de forma "normal" (como arriba), pero getAuthon por defecto
console.log(getAutor());        // Miguel de Cervantes
console.log(libro);             // Don Quijote de la Mancha