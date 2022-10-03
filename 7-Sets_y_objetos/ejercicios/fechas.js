/*
Crea un archivo llamado fechas.js que contenga las siguientes líneas
- La fecha de hoy
- La fecha de tu nacimiento
- Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
- Una variable que contenga el día de tu nacimiento
- Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
- Una variable que contenga el año de tu nacimiento (con 4 dígitos)
*/

// La fecha de hoy
const today = new Date();
console.log(today);

// La fecha de tu nacimiento
const myBD = new Date(1998, 6-1, 29, 9, 25);
console.log(myBD);

// Una variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
const esMasTarde = (today.getTime() > myBD.getTime());
console.log(esMasTarde); // true

// Una variable que contenga el día de tu nacimiento
const day = myBD.getDate();
console.log(day); // 29

// Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
const month = myBD.getMonth() + 1;
console.log(month); // 6

// Una variable que contenga el año de tu nacimiento (con 4 dígitos)
const year = myBD.getFullYear();
console.log(year); // 1998