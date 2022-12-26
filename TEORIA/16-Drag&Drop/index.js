// DRAG AND DROP -> "arrastrar y soltar" en una página web

// creamos index.html y styles.css
/* creamos contenido en ambos y ponemos etiqueta "draggable" en los
elementos de html
por ejemplo: <p class="parrafo" draggable="true">1. Primero</p> */

/* creamos este archivo index.js y vamos creando código para realizar
acciones con los elementos arrastrables */

// OBTENER TODOS LOS ELEMENTOS CON UNA CLASE DETERMINADA
const parrafos = document.querySelectorAll(".parrafo");
// EVENTO CUANDO SE COMIENZA A ARRASTRAR UN ELEMENTO
parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", event => { // evento al inicio del arrastre
        console.log("Inicio de arrastre");
        console.log("Estoy arrastrando el párrafo: " + parrafo.innerText);
        // Estoy arrastrando el párrafo: 1. Primero
        
        // AÑADIR UNA CLASE NUEVA A UN ELEMENTO AL EMPEZAR A ARRASTRARLO
        parrafo.classList.add("dragging");

        // TRANSFERENCIA DE DATOS -> recoger dato del "id" del párrado
        event.dataTransfer.setData("id", parrafo.id);
        // guarda el id del párrafo en "id"

        // IMAGEN FANTASMA
        const elem_fantasma = document.querySelector(".img-fantasma");
        event.dataTransfer.setDragImage(elem_fantasma, 0, 0);
        /* esto sirve para que se cambie la imagen del elemento mientras se
        está arrastrando. setDragImage(elementoQueDeseasQueSeVea, offsetX, offsetY) */
    })

    parrafo.addEventListener("dragend", () => {
        console.log("He terminado de arrastrar");
        
        // ELIMINAR DEL ELEMENTO LA CLASE CREADA AL COMENZAR A ARRASTRAR
        parrafo.classList.remove("dragging");
    })
})


// obtenemos todos los elementos que tengan la clase sección
const secciones = document.querySelectorAll(".seccion");
secciones.forEach(seccion => {
    // PARA MIENTRAS ESTÁS MOVIENDO EL ELEMENTO
    seccion.addEventListener("dragover", event => {
        event.preventDefault();
        //console.log("Drag over");
        // comentado para que no esté escribiéndose constantemente

        // PARA CAMBIAR LA IMAGEN DEL "CURSOR" MIENTRAS DE MUEVE
        event.dataTransfer.dropEffect = "move" // move / copy (default) / link / none
    })

    // PARA CUANDO SUELTAS EL ELEMENTO
    seccion.addEventListener("drop", event => {
        console.log("Drop");
        /* no imprime nada porque HTML por defecto bloquea el uso de "drop"
        como evento mientras se usa el "dragover". Para que funcione hay que
        prevenir este comportamiento -> realizar cambios
        cambiar esto
            seccion.addEventListener("dragover", () => {
                console.log("Drag over");
            })
        por esto
            seccion.addEventListener("dragover", event => {
                event.preventDefault();
                console.log("Drag over");
            })
        ahora sí imprimirá el "Drop" al soltar */
        
        // TRANSFERENCIA DE DATOS -> hacer algo con los datos recogidos en "dragstart"
        /* añadimos event aquí también y añadimos la propiedad event.dataTransfer
        para poder realizar acciones al hacer "drop" */
        const id_parrafo = event.dataTransfer.getData("id");
        console.log("Párrafo id: ",id_parrafo); // Párrafo id: parrafo-2
        const parrafo = document.getElementById(id_parrafo);
        seccion.appendChild(parrafo)
    })
})