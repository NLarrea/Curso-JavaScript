// OBJETOS

const obj = {
    id: 4,
    nombre: "Naia",
    apellido: "Larrea",
    isDeveloper: true,
    librosFavoritos: ["The lord of the rings", "Los pilares de la tierra"],
    "4-juegos": ["Gears of war", "Halo", "Skyrim", "Bioshock"]
    // se pueden añadir keys con comillas: "4-juegos"
}


// ACCEDER A VALORES
// se puede llamar a propiedades usando corchetes -> poco común, pero útil cuando la key de la propiedad es tipo string
console.log(obj["4-juegos"]); // ["Gears of war", "Halo", "Skyrim", "Bioshock"]
// usando un punto -> forma mucho más habitual
console.log(obj.id); // 4

// definir propiedad con variables
const prop = "isDeveloper";
console.log(obj[prop]); // true
const prop2 = "nombre";
console.log(obj[prop2]); // Naia
// damos valor a variable y podemos acceder a propiedades a través de variables


// REPLICAR OBJETOS
const obj2 = obj;
console.log(obj2); // aparentemente son iguales
obj2.nombre = "June";
console.log(obj2.nombre); // June
console.log(obj.nombre); // June
/* al copiar así dos objetos, estamos pasándole su espacio en memoria, por lo que cambia
el valor de obj y de obj2. Los cambios que se hagan en uno, se van a ver en el otro ->
-> gran problema con los objetos, con el resto de tipos no pasa -> ¿solución? */
const obj3 = {...obj};
console.log(obj.nombre); // June -> porque lo hemos cambiado antes
console.log(obj3.nombre); // June -> porque lo ha copiado
obj3.nombre = "Naia";
console.log(obj3.nombre); // Naia -> sí se ha modificado
console.log(obj.nombre); // June -> no se ve afectado -> OK


// ORDENAR LISTAS DE OBJETOS EN FUNCIÓN DE UNA PROPIEDAD
const listaPeliculas = [
    {titulo: "Señor de los anillos", anyo: 2001},
    {titulo: "Star Wars", anyo: 1977},
    {titulo: "Interestellar", anyo: 2014},
    {titulo: "Moana", anyo: 2016},
    {titulo: "Titanic", anyo: 1997}
]
console.log(listaPeliculas); // imprime todos los objetos
// para ordenar se usará .sort() -> CUIDADO porque modifica el valor original
listaPeliculas.sort((a,b) => a.anyo - b.anyo);
console.log(listaPeliculas);
// imprime todos los objetos ordenador por anyo (de menor a mayor)

/* al usar objeto.slice().sort() no se ve modificado el objeto original, porque
hace una copia del mismo en la propia variable (objeto) */
const listaOriginal = [
    {nombre: "Naia", edad: 24},
    {nombre: "Cristina", edad: 28},
    {nombre: "Irene", edad: 21},
    {nombre: "Irantzu", edad: 33}
];
const listaOrdenada = listaOriginal.slice().sort((a,b) => a.edad - b.edad);
console.log(listaOrdenada);
/* imprime:
[ { nombre: 'Irene', edad: 21 },
  { nombre: 'Naia', edad: 24 },
  { nombre: 'Cristina', edad: 28 },
  { nombre: 'Irantzu', edad: 33 } ]
*/
console.log(listaOriginal);
/* imprime:
[ { nombre: 'Naia', edad: 24 },
  { nombre: 'Cristina', edad: 28 },
  { nombre: 'Irene', edad: 21 },
  { nombre: 'Irantzu', edad: 33 } ]
*/