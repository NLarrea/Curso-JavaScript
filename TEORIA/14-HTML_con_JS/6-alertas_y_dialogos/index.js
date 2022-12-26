// ALERTAS Y DIÁLOGOS

/* vamos a añadir un listener al botón para que empiece a hacer cosas.
Primero, debemos "recuperar" el elemento del DOM */

const boton = document.querySelector("#btn"); // otra forma de obtener un elemento

// console.log(boton);

boton.addEventListener("click", () => {
    // console.log("click"); // para mostrar en la consola
    
    // ALERTAS
    alert("Se ha hecho clic"); // sale el mensaje en la pantalla


    // CONFIRMACIONES
    // no hace nada con las respuestas
    //confirm("¿Estás de acuerdo?"); // mensaje para aceptar / rechazar algo
    
    // solo hace algo con la respuesta positiva
    //confirm("¿Estás de acuerdo?") && console.log("OK"); // lo mismo que antes, pero si estás de acuerdo, imprime "OK"
    
    // hace algo con la respuesta positiva, y con la negativa
    /* confirm("¿Estás de acuerdo?")
        ? console.log("OK") // si das a aceptar
        : console.log("NO!"); // si das a cancelar */
    // otra forma de hacerlo -> un poco más extenso, pero más fácil de leer
    const respuesta = confirm("¿Estás de acuerdo?");
    if(respuesta) console.log("OK"); // si das a aceptar
    else console.log("NO!"); // si das a cancelar
})


// SOLICITAR MÁS INFORMACIÓN
const btnInfo = document.querySelector("#info");
btnInfo.addEventListener("click", () => {
    const nombre = prompt("¿Cuál es tu nombre?")
    if(nombre) console.log("Tu nombre es " + nombre);
    else console.log("No has introducido nada");
})


// IMPRIMIR LISTAS
// creamos lista de objetos
const lista = [
    {nombre: "Naia", edad: 24},
    {nombre: "Cristina", edad: 28},
    {nombre: "June", edad: 24},
    {nombre: "Irene", edad: 21}
]
console.log(lista); // imprime la lista en una línea que tenemos que desplegar
console.table(lista); // imprime la lista en una tabla -> mucho más visual
/* desde la tabla mostrada en la consola, se pueden ordenar los objetos de
la lista por índice, nombre o edad */