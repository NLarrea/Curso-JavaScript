// EVENTOS

/* son situaciones / circunstancias que les ocurren a diferentes elementos dentro
de nuestro programa. Por ejemplo: un clic, un submit, etc.

Para acceder a todos los eventos posibles, escribir -> document.on y se abrirán las
opciones disponibles que se pueden gestionar */


// VINCULAR -> bind()
/* el método bind() se ejecuta en funciones. Si por ejemplo tuviéramos esta función */

function pasaPorPantalla(){
    console.log(this);
}
pasaPorPantalla(); // imprime todo lo relacionado a la ventana

/* imprimiría la ventana en cuesión, pero esta función y ese "this" pueden vincularse
a otra cosa u elementos. Si creáramos un objeto, por ejemplo, podemos asignarle la
función que hemos creado antes para que imprima el objeto en cuestión */

const objeto = {type: "párrafo", length: 32};
const pasaObjPorPantalla = pasaPorPantalla.bind(objeto); // vinculación de objeto a función
pasaObjPorPantalla(); // { type: 'párrafo', length: 32 }

/* ahora "this" no hace referencia al window porque está vinculado al objeto */


// EVENTOS POR DEFECTO
/* todos los evento tienen un comportamiento por defecto, pero hay algunos que queremos que
realicen un comportamiento concreto antes de realizar su acción por defecto. Por ejemplo, si
se tuviera un submit después de un formulario, a lo mejor se desea que antes de realizar su
acción por defecto, pida una validación. */

/* creamos la carpeta "formulario" y realizamos los ejercicios en ella */