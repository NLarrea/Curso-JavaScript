const logger = require('./logger');

// hasta ahora hemos trabajado mucho el console.log(), pero hay más tipos
console.log("Hola estoy saliendo por pantalla");
console.info("Hola esto es un mensaje informativo");
console.debug("Esto es un mensaje de debug");
console.warn("Esto es un mensaje de advertencia");
console.error("Esto es un error");

/* todos esos datos solo se ven por pantalla, pero realmente no queremos tener que estar
monitorizando en tiempo real para verlos, sino que nos gustaría que se guardaran en algún
lugar donde poder consultar después los datos -> winston (https://www.npmjs.com/package/winston)

escribimos en la terminal: npm install winston
Se nos creará una carpeta llamada node-modules. Ahora, en vez de usar console.log(), vamos a
usar lo que nos dice la librería de winston
*/

/* ESTÁ COMENTADO PARA SIMULAR QUE LO HE QUITADO. EXPLICACIONES ABAJO
const winston = require('winston');
const logger = winston.createLogger({
    level: 'debug', // cambiamos 'info' por 'debug'
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' }, // mensaje estándar, de momento no nos sirve
    transports: [ // estas son todas las acciones que se van a ejecutar cada vez que haya un log
      //
      // - Write all logs with importance level of `error` or less to `error.log`
      // - Write all logs with importance level of `info` or less to `combined.log`
      //
      new winston.transports.Console(), // para que se muestren los logger también por pantalla
      new winston.transports.File({ filename: 'error.log', level: 'error' }),
      new winston.transports.File({ filename: 'combined.log' }),
    ],
});
*/

// ahora lanzamos los mensajes de antes (el .log no, porque no existe en winston)
logger.info("Hola esto es un mensaje informativo");
logger.debug("Esto es un mensaje de debug");
logger.warn("Esto es un mensaje de advertencia");
logger.error("Esto es un error");
// volvemos a escribir en la terminal: npm start
/* en la carpeta de la sesión 9 se nos crearán unos archivos: combined.log y error.log
con todos los errores que hemos lanzado (menos el escrito en logger.debug()) */

/* en error.log solo nos guarda los de tipo error */

/* el tema de los niveles, está documentado en la documentación de winston.
Están especificados por un estándar. A la hora de definir nuestra instancia
de logger, le estamos diciendo que tiene un level de 'info', así que solo va
a hacer caso (registrar) los que tengan el mismo nivel que los de info o menos.
Si se quiere que también enseñe los mensajes de debug, se le debería cambiar
    level: 'info', -> level: 'debug', */

/* una buena idea puede ser crear una carpeta logger y definir un archivo donde meter
todo lo que hemos pegado de winston -> lo hacemos, corto y pego el código, aquí lo comento
y escribo arriba del todo
    const logger = require('./logger')
volvemos a escribir: npm start -> debería pasar lo mismo que antes
Esto viene bien para quitar varias líneas de código en nuestro archivo principal */