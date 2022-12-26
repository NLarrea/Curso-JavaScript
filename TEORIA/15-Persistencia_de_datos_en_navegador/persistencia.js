// PERSISTENCIA DE DATOS

/* Ej: cuando pones que queires usar el tema oscuro, el navegador guarda esa información
y cada vez que abres una aplicación, ya hace que esté en modo oscuro, y no pregunta todo
el tiempo qué formato quieres */


// 3 FORMAS DE GUARDAR DICHOS DATOS
// 1. COOKIES -> el más usado o más conocido
// 2. LOCAL STORAGE
// 3. SESSION STORAGE

/* Las cookies como mucho tienen un tamaño de 4kB, el local tiene 10MB y el session 5MB.
Las cookies y el local se guardan en el navegador, esa infromación estará disponible en
todas las páginas o pestañas del navegador. Sin embargo, la session storage, solo permite
el acceso a esa información desde la propia pestaña, una vez ésta se cierra, esa información
se pierde. */

/* La caducidad de las cookies se establecen manualmente, en el local nunca caducan (habría
que borrarlos a mano), y en la session, se borra al cerrar la pestaña */

/* Las cookies se guardan en el buscador y en el servidor, mientras que los otros dos solo en
el buscador, por eso, cuanto más pequeñas sean las cookies, mejor -> podrían hacer el server
más lento */


// CÓMO TRABAJAR CON LAS LOCAL Y SESSION STORAGE
/* creamos index.html -> abrimos en life server y le damos a inspeccionar.
Entramos en el apartado de aplicación y ahi nos salen, en almacenamiento, los tres de los que
acabamos de hablar. */


// ACCEDER A LA LOCALIZACIÓN DEL LOCAL STORAGE
// crear elementos
//localStorage.setItem("nombre", "Naia"); // crear elemento (key, value)
//localStorage.setItem("nombre", "Cristina"); // modifica el valor con el key "nombre"
localStorage.setItem("persona", JSON.stringify({nombre: "Naia", edad: 24}));
// stringify -> convierte un objeto / array en string
// parse -> convierte objeto / array convertido mediante stringify en objeto de JS

// obtener valores
console.log(localStorage.getItem("nombre"));
console.log(JSON.parse(localStorage.getItem("persona")));

// eliminar valores
localStorage.removeItem("nombre"); // ahora el console.log de nombre, dará "null"


// ACCEDER AL SESSION STORAGE
/* se hace igual que con el local storage, pero escribiendo sessionStorage */
sessionStorage.setItem("nombre-sesion", "June");


// COOKIES
console.log(document.cookie)
// crear cookies
document.cookie = "nombreCookie=NaiaCookie";

// darle caducidad a una cookie
document.cookie = "nombreCaducidad=Nombre;expires=" + new Date(2023,0,1).toUTCString();


/* con estas tres opciones se pueden guardar usuarios, datos, etc. */