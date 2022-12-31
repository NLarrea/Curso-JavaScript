/* 
Crea un archivo JS que contenga las siguientes líneas:
- Una variable que contenga la lista de la compra (mínimo 5 elementos)
- Modifica la lista de la compra y añádele "Aceite de Girasol"
- Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
- Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
- Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
- Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
- Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
*/

// Una variable que contenga la lista de la compra (mínimo 5 elementos)
let listaCompra = ["Pan", "Yogurt", "Copos de Avena", "Huevos", "Plátanos"];

// Modifica la lista de la compra y añádele "Aceite de Girasol"
listaCompra.splice(listaCompra.length, 0, "Aceite de Girasol");
console.log(listaCompra);
// otra forma:
// listaCompra.push("Aceite de Girasol");

// Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
listaCompra.splice(listaCompra.length-1, 1);
console.log(listaCompra);
// otra forma:
// listaCompra.pop();

// Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
let listaPelis = [
    {titulo: "Señor de los anillos", director: "Peter Jackson", fecha: 2001},
    {titulo: "Star Wars", director: "George Lucas", fecha: 1977},
    {titulo: "Interestellar", director: "Christopher Nolan", fecha: 2014}
]

// Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
let posteriores2010 = listaPelis.filter(peli => peli.fecha > 2010);
console.log(posteriores2010);
// [ { titulo: 'Interestellar', director: 'Christopher Nolan', fecha: 2014 } ]

// Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
let directores = listaPelis.map(peli => peli.director);
console.log(directores);
// [ 'Peter Jackson', 'George Lucas', 'Christopher Nolan' ]

// Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
let titulos = listaPelis.map(peli => peli.titulo);
console.log(titulos); // [ 'Señor de los anillos', 'Star Wars', 'Interestellar' ]

// Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
let directorYTitulo = directores.concat(titulos);
console.log(directorYTitulo);
// [ 'Peter Jackson', 'George Lucas', 'Christopher Nolan', 'Señor de los anillos', 'Star Wars', 'Interestellar' ]

// Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
let directorYTitulo2 = [...directores, ...titulos];
console.log(directorYTitulo2);
// [ 'Peter Jackson', 'George Lucas', 'Christopher Nolan', 'Señor de los anillos', 'Star Wars', 'Interestellar' ]