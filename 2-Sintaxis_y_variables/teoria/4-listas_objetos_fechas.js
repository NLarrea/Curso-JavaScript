// LISTAS
/* una lista / array / arreglo es un conjunto de variables puestas en orden */
const lista1 = [1, "hola", true, undefined, null, 34];
console.log(lista1); // imprime [ 1, 'hola', true, undefined, null, 34 ]

const lista2 = new Array(1, "hola", true, undefined, null, 34); // sería lo mismo que la list1
console.log(lista2); // imprime [ 1, 'hola', true, undefined, null, 34 ]

const lista3 = new Array(3); // lista vacía de 3 elementos
console.log(lista3);
// se puede modificar el contenido de la lista, pero no que la lista3 es una lista de 3 elementos porque es de tipo const
lista3[0] = "soy el primer elemento";
console.log(lista3); // [ 'soy el primer elemento', , ]

const lista4 = [lista1, lista2, lista3]; // una lista de listas
console.log(lista4);
/*
imprime lo siguiente:
[ [ 1, 'hola', true, undefined, null, 34 ],
  [ 1, 'hola', true, undefined, null, 34 ],
  [ 'soy el primer elemento', ,  ] ]
*/
console.log(lista4[1]); // imprime [ 1, 'hola', true, undefined, null, 34 ]
console.log(lista4[1][4]); // imprime null

// OBJETOS
const movil = {
    // atributos
    altura: 10,
    anchura: 5,
    marca: "Samsung",
    isWhite: false,
    contactos: ["Gorka", "Martin", "Ana"],
    tarjeta: { // objeto dentro de objeto como atributo
        marca: "Sandisk",
        almacenamiento: 32
    },
    "altura-tarjeta": 4 // se pueden definir "keys" como si fueran strings
}
// para acceder a dichos atributos, se utiliza el punto
console.log(movil.marca); // imprime Samsung
console.log(movil.tarjeta.almacenamiento); // imprime 32
// crear nuevo atributo para el movil
movil.year = 2019;
console.log(movil.year); // imprime 2019
// modificar datos
movil.marca = "iphone";
console.log(movil.marca); // imprime iphone

// FECHAS
// librerías de apoyo Moment.js
const ahora = new Date(); // crear nueva fecha -> nos daría la fecha exacta en la que se ha creado la variable
console.log(ahora); // imprime: Wed Sep 28 2022 12:21:26 GMT+0200 (hora de verano de Europa central)

const fecha_milis = new Date(10);
console.log(fecha_milis); // imprime una nueva fecha basándose en los milisegundos desde 1970 (año 0)

const fecha_cadena = new Date("march 25 2020"); // no se suele usar
console.log(fecha_cadena); // Wed Mar 25 2020 00:00:00 GMT+0100 (hora estándar de Europa central)

const fecha_valores = new Date(2022, 0, 25);
console.log(fecha_valores); // Tue Jan 25 2022 00:00:00 GMT+0100 (hora estándar de Europa central)

const dia = ahora.getDate();
const mes = ahora.getMonth() + 1; // porque el index de los meses empieza en 0
const year = ahora.getFullYear();
console.log(dia, mes, year); // imprime 28 9 2022