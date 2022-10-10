const f = document.getElementById("formulario");
console.log(f);

/* si abrimos lo que es el formulario en la consola, veremos todos los
posibles valores de sus elementos.
Vamos a añadir un evento cuando clicamos en el botón de "Enviar", por lo
que hay que cambiar el "valor" del "onsubmit" */

// "submit" -> el evento en cuestión
// evento => {} -> función, lo que queremos que pase cuando haya un submit
f.addEventListener("submit", evento => {
    console.log(evento); // que nos pase por pantalla el evento
    evento.preventDefault(); // que después no se ejecute su valor por defecto
})
/* al darle a enviar, tratará de realizar el evento, pero no lo hará, y antes
nos pasará por la consola todos los valores del evento.
Esto se usa mucho hoy día */