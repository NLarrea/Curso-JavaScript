/*
EJERCICIO 1:
Crea un nuevo archivo JS que contenga una lista con los siguientes elementos:
- Tu nombre (string)
- Tu edad (number)
- ¿Eres desarrollador? (boolean)
- Tu fecha de nacimiento (Date)
- Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url)
*/

// CREACIÓN DE VARIABLES / OBJETOS NECESARIOS
// fecha de nacimiento
const bday = new Date(1998, 6-1, 29);
// libro favorito
const book = {
    title: "Las luces de septiembre",
    author: "Carlos Ruiz Zafón",
    fecha: 1995,
    url: "https://www.amazon.es/luces-septiembre-Biblioteca-Carlos-Zaf%C3%B3n/dp/8408080792"
}

const lista = ["Naia", 24, false, bday, book];