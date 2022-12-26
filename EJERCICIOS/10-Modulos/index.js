/* 
Crea un nuevo proyecto de Node
- Configura el proyecto para utilizar los módulos de ES6
- Crea un archivo controller.js que exporte 2 funciones: suma(a, b) y multiplica(a, b)
- En el entrypoint index.js, importa el módulo controller.js
- El entrypoint index.js debe utilizar las funciones del módulo para devolver la multiplicación de suma(1, 2) y suma(4, 5)
- Instala e importa la librería chalk (https://www.npmjs.com/package/chalk)
- Modifica el último console.log del entrypoint index.js para devolver el resultado en color verde
*/

// En el entrypoint index.js, importa el módulo controller.js
import * as controller from './controller.js';

// El entrypoint index.js debe utilizar las funciones del módulo para devolver la multiplicación de suma(1, 2) y suma(4, 5)
console.log(controller.multiplica(controller.suma(1,2), controller.suma(4,5))); // 27

// Instala e importa la librería chalk (https://www.npmjs.com/package/chalk)
// instalar -> npm install chalk
// importar
import chalk from 'chalk';

// Modifica el último console.log del entrypoint index.js para devolver el resultado en color verde
console.log(chalk.green(controller.multiplica(controller.suma(1,2), controller.suma(4,5)))); // 27 (color verde)