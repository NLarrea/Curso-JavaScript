// EVENTOS PERSONALIZADOS

const hTexto = document.getElementById("h-texto");
console.log(hTexto); // para ver que todo está bien


// "cambioTExto" -> hace referencia al nombre del evento
// evento -> función callback que tiene los detalles del evento
hTexto.addEventListener("cambioTexto", evento => {
    console.log(evento);
    // el evento todavía no existe, hay que crearlo y lanzarlo -> crear función
    // DESPUÉS DE CREAR LA FUNCIÓN
    // para ver que lo que imprime al pasar el detail
    console.log(evento.detail); // {texto: "este es el nuevo texto", color: "blue"}
    hTexto.innerText = evento.detail.texto; // cambia el texto
    hTexto.style.color = evento.detail.color; // cambia el color del texto
})

// se crea una función con dos parámetros: nuevoTexto y color
function cambiarTexto(nuevoTexto, color){
    // quiero crear un evento nuevo -> guardarlo en constante
    /* creamos una const con nombre "evento" y usamos palabra clave para crear
    el evento personalizado. Le pasamos dos parámetros: el nombre del evento, que
    será el mismo que el escrito en el .addEventListener, y un objeto "detail",
    con los dos parámetros que queremos cambiar: el texto y el color */
    const evento = new CustomEvent("cambioTexto", {
        detail: {
            texto: nuevoTexto,
            color // es lo mismo que -> color: color
        }
    })
    hTexto.dispatchEvent(evento); // para pasarle el evento
}

/* si en la consola escribimos -> cambiarTexto("este es el nuevo texto", "blue")
nos cambiará el "Hola" por ese mismo texto, y lo escribirá de color azul */