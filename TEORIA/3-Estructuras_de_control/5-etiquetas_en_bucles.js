// ETIQUETAS EN LOS BUCLES
// ejemplo sin etiquetas

let unidades = 0;
let decenas = 0;

while(true){
    while(true){
        console.log(`El número actual es: ${decenas}${unidades}`);
        unidades++;
        if(unidades === 10){
            unidades = 0;
            break;
        }
    }
    decenas++;
    if(decenas === 2){
        break;
    }
}

// ejemplo con etiquetas
unidades = 0;
decenas = 0;

bucleDecenas: while(true){ // se le pone la etiqueta bucleDecenas al bucle
    bucleUnidades: while(true){ // se le pone la etiqueta bucleUnidades al bucle
        console.log(`El número actual es: ${decenas}${unidades}`);
        unidades++;
        if(unidades === 10){
            unidades = 0;
            break bucleUnidades; // se le indica de qué bucle salir
        }
        if(decenas === 2){
            break bucleDecenas; // se le indica de qué bucle salir
        }
    }
    decenas++;
}