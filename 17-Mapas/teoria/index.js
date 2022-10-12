// MAPAS

/* API GOOGLE MAPS -> para integrar mapas en nuestra página web
página de la API: https://developers.google.com/maps/documentation/javascript */

/* creamos los archivos HTML y CSS, e incluimos los archivos en el HTML */

/* el src del script que hay que copiar en HTML para que funcione el mapa es el siguiente:
https://maps.googleapis.com/maps/api/js?key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg&callback=initMap&v=weekly
como se puede ver, se necesita una clave de API (key=CLAVE_API), después, indica que cuando se ejecuta o carga
el script, el callback hace que se llame a una función llamada "initMap", por tanto, vamos a crear dicha función */

let marker, map;

function initMap(){
    //console.log("Inicializando mapa"); // cuando se cargue el script, imprime eso
    // CREACIÓN DEL MAPA
    /* ahora, necesitamos definir una posición -> 2 atributos (lat (latitud) y lng (longitud)) */
    const posicion = {
        lat: -25.363,
        lng: 131.044
    }
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: posicion
    });

    // CREAR MARCADOR PARA LA POSICIÓN DE DESTINO
    const marker = new google.maps.Marker({
        position: posicion,
        map,
        title: "Posición Inicial"
    })
}

/* para ver en qué posición estamos -> navigator.geolation.watchPosition(position => { console.log(position) }) */
// OBTENER GEOLOCALIZACIÓN, después cambiar el marker de sitio -> marker.setPosition({lat, lng})
function geoPosiciona(){
    if(navigator.geolocation){
        /* hay navegadores que no teinen acceso a estas propiedades, por eso se usa el if-else */
        const geoLoc = navigator.geolocation;
        const options = {timeout: 60000};
        const watchPos = geoLoc.watchPosition(centraMapa, onError, options);
        /* timeout -> intenta durante 60 segundos obtener una localización. Si no lo consigue, salta a la función
        de error (onError). Si todo sale bien y no hay errores, va a la función de centraMapa */
    }
    else {
        alert("Tu navegador no admite la geolocalización.")
    }
}

function centraMapa(position){
    const nuevaPos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
    }
    console.log(nuevaPos);
    marker.setPosition(nuevaPos); // para llevar el marker a la posición en la que estamos
    map.setCenter(nuevaPos); // para centrar el mapa en la posición en la que estamos
}

function onError(error){
    console.log("Se ha producido un error y lo hemos gestionado");
    console.error(error);
    /* la web pide aceptar los permisos para acceder a la ubicación. Si dichos permisos fueran bloqueados, también sería
    un error puesto que el código intentaría obtener la posición y no podría */
}