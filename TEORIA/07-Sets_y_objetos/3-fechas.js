// FECHAS

// INICIALIZAR FECHAS -> 4 formas de hacerlo

// sin parámetros -> fecha actual, se actualiza constantemente
const fecha = new Date();
console.log(fecha);
// Mon Oct 03 2022 23:57:28 GMT+0200 (hora de verano de Europa central)


// poniendo una fecha concreta -> los meses empiezan desde 0
const fecha2 = new Date(1987, 10, 20, 1, 23, 52, 192);
// año, mes, dia, horas, minutos, segundos, milisegundos
console.log(fecha2);
// Fri Nov 20 1987 01:23:52 GMT+0100 (hora estándar de Europa central)


// 1 parámetro -> milisegundos desde la que es conocida como hora 0 (año 1970)
const fecha3 = new Date(0);
console.log(fecha3);
// Thu Jan 01 1970 01:00:00 GMT+0100 (hora estándar de Europa central)

// se puede poner valor negativo para acceder a fechas anteriores
const fechaNeg = new Date(-10000000000);
console.log(fechaNeg);
// Sun Sep 07 1969 07:13:20 GMT+0100 (hora de verano de Europa central)


// poniendo a modo de string
const fecha4= new Date("October 13, 1979 12:15:15");
console.log(fecha4);
// Sat Oct 13 1979 12:15:15 GMT+0100 (hora estándar de Europa central)



// SABER QUÉ FECHA ES "MÁS ACUTAL" -> cuál es más tarde en el tiempo

console.log(fecha < fecha2);        // false -> la fecha de ahora es más actual
console.log(fecha > fecha4);        // true



// COMPROBAR SI DOS FECHAS SON IGUALES

const fecha5 = new Date(1987, 10, 20, 1, 23, 52, 192); // igual que fecha2

console.log(fecha2 == fecha5);                          // false
console.log(fecha2 === fecha5);                         // false

/* es un ERROR comparar fechas de este modo, hay que pasar la fecha a
milisegundos -> .getTime() */

console.log(fecha2.getTime() === fecha5.getTime());     // true



// COMPROBAR SI UNA FECHA DADA EN FORMATO STRING ES CORRECTA

const isDateValid = str => !Number.isNaN(new Date(str).valueOf());
console.log(isDateValid('1998/06/29'));                 // true
console.log(isDateValid('June 1998 29'));               // true

console.log(isDateValid('1993 febrero 09'));            // true
console.log(new Date('1993 febrero 09'));
// Tue Feb 09 1993 00:00:00 GMT+0100 (hora estándar de Europa central)

console.log(isDateValid('patata'));                     // false



// OBTENER EL DÍA, MES Y AÑO DE UNA FECHA

const dia = fecha.getDate();
const mes = fecha.getMonth() + 1;
const anyo = fecha.getFullYear();

console.log(`Hoy es ${dia} de ${mes} del ${anyo}`);
// Hoy es 4 de 10 del 2022



// MOSTRAR FECHA EN STRING DE FORMA RÁPIDA -> .toLocaleDateString

console.log(fecha.toLocaleDateString('eus-ES'));            // 2022/10/4
console.log(fecha.toLocaleDateString('en-GB'));             // 04/10/2022

const fechaString = fecha.toLocaleDateString('en-US');      // 10/4/2022
console.log(typeof fechaString);                            // string