/*
Crea un archivo llamado objetos.js que contenga las siguientes líneas
- Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
- Una variable que obtenga tu edad a partir del objeto anterior
- Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
- Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
*/

// Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
const me = {
    nombre: "Naia",
    apellido: "Larrea",
    edad: 24,
    altura: 1.62,
    eresDesarrollador: true
}

// Una variable que obtenga tu edad a partir del objeto anterior
const myAge = me.edad;
console.log(myAge); // 24

// Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
const listaPersonas = [
    me,
    {nombre: "Cristina", apellido: "Albarracín", edad: 28, altura: 1.53, eresDesarrollador: false},
    {nombre: "Irene", apellido: "Alonso", edad: 21, altura: 1.68, eresDesarrollador: false}
]
console.log(listaPersonas);

// Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
const listaOrdenada = listaPersonas.slice().sort((a,b) => b.edad - a.edad);
// al usar objeto.slice().sort() no se ve modificado el objeto original (hace una copia del mismo en la propia variable (objeto))
console.log(listaOrdenada);
console.log(listaPersonas);