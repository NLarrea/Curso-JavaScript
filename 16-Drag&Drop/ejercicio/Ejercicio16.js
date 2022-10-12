// todos los elementos con clase "parrafo"
const parrafos = document.querySelectorAll(".parrafo");
parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", event => {
        // imprime que se está arrastrando un párrafo concreto
        console.log("Estoy arrastrando el párrafo: " + parrafo.innerText)
        // para cambiarle la opacidad mientras se arrastra
        parrafo.classList.add("dragging");
        // para obtener datos del párrafo
        event.dataTransfer.setData("id", parrafo.id)
        // para cambiar el icono de algo mientras se arrastra
        const elem_fantasma = document.querySelector(".img-fantasma");
        event.dataTransfer.setDragImage(elem_fantasma, 0, 0);
    })
    parrafo.addEventListener("dragend", () => {
        parrafo.classList.remove("dragging"); // elimina la clase para devolverle la opacidad
    })
})

// todos los elementos con clase "section"
const sections = document.querySelectorAll(".section");
sections.forEach(section => {
    section.addEventListener("dragover", event => {
        event.preventDefault(); // para que deje arrastrar y soltar en las secciones
        event.dataTransfer.dropEffect = "move"; // default = "copy"
    })

    section.addEventListener("drop", event => {
        // si se suelta un párrafo en una sección
        const id_parrafo = event.dataTransfer.getData("id"); // se obtiene el id del párrafo
        const parrafo = document.getElementById(id_parrafo); // se obtiene el párrafo con ese id
        section.appendChild(parrafo); // se añade ese párrafo a la sección
    })
})

// eliminar elemento al arrastrarlo y soltarlo en una papelera
const papelera = document.querySelector(".papelera");
papelera.addEventListener("dragover", event => {
    event.preventDefault(); // para que deje arrastrar a la papelera
})
papelera.addEventListener("drop", event => {
    const id_parrafo = event.dataTransfer.getData("id"); // obtener id del párrafo
    document.getElementById(id_parrafo).remove(); // obtener párrafo y eliminarlo
})