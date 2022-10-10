// JQUERY

/* es una librería que permite acceder a los elementos de una forma muy sencilla.
Permite que se pueda interactuar de forma mucho más sencilla con el DOM */


// IMPORTAR JQUERY
/* primero hay que importar jQuery: https://www.jquery.com
Entrar en Download jQuery -> descargar la comprimida ("Download compressad, production jQuery [versión]")
-> ahora podemos guardar eso como un archivo, o importar la URL (que es lo que voy a hacer ahora) -> ir al
archivo .html e importarlo */

// hay documentación disponible en la página. Aquí se van a ver las opciones más usadas

/* jQuery se utiliza con el símbolo del dolar y abrir y cerrar paréntesis. Entre esos
paréntesis, indicaremos el elemento
    $(selector).acción() */

//$("h1").hide() // esconde todos los h1

/* se puede usar jQuery en cualquier momento, pero lo más recomendado es usarlo dentro de
una "función" llamada $(document).ready()
    $(document).ready() => {} <
o usar su versión simplificada -> $(() => {} */

$(() => {
    //$("#el-1").hide(); // oculta el elemento 1 de la lista
    
    // OCULTAR ELEMENTO
    // el título se oculta cuando pulso el botón Hide
    $(".hide-btn").click(() => { // función flecha o función normal
        console.log("Ocultando..."); // para comprobar que funciona
        //$("h1").hide(); // desaparece de forma brusca
        $("h1").fadeOut(); // desaparece de forma "suave"
    })

    // MOSTRAR / DESOCULTAR ELEMENTO
    // el título se muestra cuando se pulso el botón Show
    $(".show-btn").click(() => { // función flecha o función normal
        console.log("Mostrando..."); // para comprobar que funciona
        //$("h1").show(); // para que el h1 se vuelva a ver
        $("h1").fadeIn();
    })

    // CAMBIAR DE COLOR ELEMENTO
    // cuando hago doble clic en el elemento 1, cambia el color del h1
    $("#el-1").dblclick(() => {
        $("h1").css({color: "green"});
    })
    
    // AÑADIR NUEVOS ELEMENTOS A LA LISTA pulsando el botón Add Element
    $(".new-element").click(() => {
        //$("ul").append("<li>New Element</li>"); // añadir elemento al final
        $("ul").prepend("<li>New Element</li>"); // añadir elemento al inicio
    })

    // HACER HOVER
    // 1º función -> para cuando pasas por encima del elemento "li"
    // 2º función -> para cuando te quitas de encima del elemento "li"
    $("li").mouseenter((elem) => { // hacer hover
        //console.log("Ha entrado el ratón (hover)");
        // imprime eso cada vez que paso el ratón por encima
        elem.target.style.color = "red";
    })
    $("li").mouseleave((elem) => {
        elem.target.style.color = "black";
    })
})