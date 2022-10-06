// LIBRERÍAS

/* npm -> Node Package Manager
permite que instalemos / actualicemos las librerías que estamos usando.

https://www.npmjs.com/ -> buscamos "axios", sirve para hacer llamadas a servicios externos

npm init -y -> realizamos cambios:
    "type": "module",
    "scripts": {
        "start": "node index.js"
    },

para instalar axios: npm i axios
se crearán una carpeta para las librerías y un archivo "package-locks" donde lleva un registro
*/


// CÓMO USAR AXIOS

// 1. importar axios
import axios from "axios"

// 2. código sobre qué queremos hacer
axios.get('https://pokeapi.co/api/v2/pokemon/ditto') // llamada a un link que queramos
    .then(function (response) {
        // handle success
        console.log("Success!");
        console.log(response.data); // al añadir el .data, solo devuelve los datos
    })
    .catch(function (error) {
        // handle error
        console.log("Error!");
        console.log(error);
    })

// 3. npm start