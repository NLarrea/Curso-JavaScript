/*
Crea un archivo llamado conjuntos.js que contenga las siguientes líneas
- Un nuevo Set con los nombres de tu familia
- Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
- Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)
*/

// Un nuevo Set con los nombres de tu familia
const listaNombres = ["Javi", "Itzi", "June", "Naia"]
const nombres = new Set(listaNombres);
console.log(nombres); // Set { 'Javi', 'Itzi', 'June', 'Naia' }

// Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
nombres.add("Naia");
console.log(nombres); // Set { 'Javi', 'Itzi', 'June', 'Naia' }

// Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)
nombres.add("JavaScript");
console.log(nombres); // Set { 'Javi', 'Itzi', 'June', 'Naia', 'JavaScript' }