const a = 4;
const b = 8;
console.log(a * b);
console.log("Hola");

const p = document.getElementById("parrafo");
console.log(p); // 2 casos

// CASO 1: CUANDO EL SCRIPT ESTÁ ANTES DEL BODY
// mostrará un null porque hemos puesto el script antes que el body en HTML

// CASO 2: CUANDO EL SCRIPT ESTÁ DESPUÉS DEL BODY
// mostrará el <p id="parrafo">Esto es un párrafo</p>