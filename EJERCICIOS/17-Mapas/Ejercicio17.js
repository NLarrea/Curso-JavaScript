function initMap(){
    //console.log("Inicializando mapa"); // cuando se cargue el script, imprime eso
    // CREACIÓN DEL MAPA
    /* ahora, necesitamos definir una posición -> 2 atributos (lat (latitud) y lng (longitud)) */
    const posicion1 = {
        lat: 43.26413280012345,
        lng: -2.932792301158332
    }
    const posicion2 = {
        lat: 37.991892111103645,
        lng: -1.1309525316067655
    }
    const posicion3 = {
        lat: 40.413825299064364,
        lng: -3.7049530696439503
    }

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: posicion1
    });

    // CREAR MARCADOR PARA LA POSICIÓN DE DESTINO
    const marker1 = new google.maps.Marker({
        position: posicion1,
        map,
        title: "Euskadi"
    })
    const marker2 = new google.maps.Marker({
        position: posicion2,
        map,
        title: "Murcia"
    })
    const marker3 = new google.maps.Marker({
        position: posicion3,
        map,
        title: "Madrid"
    })
}