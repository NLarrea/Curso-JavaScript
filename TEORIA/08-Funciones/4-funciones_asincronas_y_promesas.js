// FUNCIONES ASÍNCRONAS Y PROMESAS

/*
son aquellas que se usan cuando se llama a bases de datos externas, por
ejemplo. Aquellas que pueden llevar un tiempo que no depende de nuestro código
*/

function miAsinc() {
    // imaginar que hace llamada a base de datos externa
    // puede darnos algún error
}



// PROMESAS

// todo esto se realiza a través de las promesas
const miPromesa = new Promise((resolve, reject) => {
    const i = Math.floor(Math.random() * 2)         // número aleatorio 0-1

    // simular si está todo correcto
    if (i !== 0) {
        resolve();          // solo se ejecuta cuando es correcto
    } else {
        reject();           // solo se ejecuta cuando no es correcto
    }
})

/* 2 opciones:
    - correcto = se ejecuta resolve() y enconces al llamar a miPromesa entra
    y ejecuta el código que esté definifo en: .then()
    - incorrecto = se ejecuta reject() y enconces al llamar a miPromesa entra
    y ejecuta el código que esté definifo en: .catch()

.finally() se ejecutará siempre, da igual si era correcto o incorrecto
*/

miPromesa
    .then(() => console.log("Se ha ejecutado de forma correcta"))
    // .then() solo se ejecuta cuando es correcto
    .catch(() => console.log("ERROR"))
    // .chatch() solo se ejecuta cuando no es correcto -> hay algún error
    .finally(() => console.log("Se ejecuta siempre"))
    // .finally() se ejecuta siempre da igual si hay error o no