/* Crea un nuevo proyecto de Node
    - Instala la dependencia Winston
    - En el archivo index.js crea una función que devuelva un error con un mensaje personalizado
    - Registra el error en un archivo a través de un try...catch
*/

/*
CREAR PROYECTO DE NODE
1. abrir terminal y dirigirse a la carpeta donde vamos a realizar el ejercicio
2. escribir: npm init -y (nos creará un archivo .json con datos por defecto)
3. cambiar el código de la linea "test" por:
    "start": "node index.js"
4. poner en el main el nombre de este archivo
5. realizar el ejercicio propuesto
*/

// Instala la dependencia Winston -> npm install winston


// En el archivo index.js crea una función que devuelva un error con un mensaje personalizado
function devuelveError(){
    throw new Error("Mensaje de error personalizado"); // super original
}


// Registra el error en un archivo a través de un try...catch
const logger = require('../teoria/2-gestionarLogs/logger');
// importo el código desde el archivo guardado en la teoría

try{
    devuelveError();
}
catch(e){
    logger.error(`Tercer apartado del ejercicio: ${e}`);
}