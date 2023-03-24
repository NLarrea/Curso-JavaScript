// LIBRERÍAS

/* npm -> Node Package Manager
permite que instalemos / actualicemos las librerías que estamos usando.

https://www.npmjs.com/ -> buscamos "axios", sirve para hacer llamadas a
servicios externos

npm init -y -> realizamos cambios:
    "type": "module",
    "scripts": {
        "start": "node index.js"
    },

para instalar axios: npm i --save axios
se crearán una carpeta para las librerías y un archivo "package-locks" donde
lleva un registro
*/



// CÓMO USAR AXIOS

// 1. importar axios
import axios from "axios"

// 2. código sobre qué queremos hacer
axios.get('https://pokeapi.co/api/v2/pokemon/ditto') // llamada a un link (API)
    .then(function (response) {
        // handle success -> se ejecuta esto si todo va bien
        console.log("Success!");
        console.log(response.data); // añadir el .data -> obtener datos
    })
    .catch(function (error) {
        // handle error -> entra aquí si ha habido algún error
        console.log("Error!");
        console.log(error);
    })

// 3. npm start