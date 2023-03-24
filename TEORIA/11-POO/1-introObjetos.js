// PROGRAMACIÓN ORIENTADA A OBJETOS

// DEFINICIÓN

const persona = {
    // propiedades
    nombre: "Naia",
    edad: 24,
    isDeveloper: true,
    saludo: function() { 
        // esto es un método -> 'funciones dentro de objetos y clases'
        console.log("Kaixo!");
    }
}

// muestra de sus valores
console.log(persona);
persona.saludo();


// creación de otra persona
const otraPersona = {
    // tiene los mismos atributos y métodos que el objeto anterior
    nombre: "Cristina",
    edad: 28,
    isDeveloper: false,
    saludo: function() {
        console.log("Hola");
    }
}

otraPersona.saludo();

/*
todo esto es muy tedioso, estamos repitiendo código -> solución: crear una
función -> 'factory function', funciona como una especie de plantilla donde
podemos crear objetos con los mismos atributos y métodos de forma mucho más
rápida y sin repetir tanto código
*/

const creaPersona = (nombre, edad, isDeveloper) => {
    // devolvemos el objeto con los atributos y el método
    return {
        /* puede ponerse solo "nombre", porque tiene el mismo nombre el
        atributo que la variable */
        nombre: nombre,
        edad,           // pongo solo 'edad' por evitar poner 'edad: edad'
        isDeveloper,    // lo mismo que antes -> isDeveloper: isDeveloper
        saludo: function() {
            console.log("Hello");
        }
    }
}

const nuevaPersona = creaPersona("June", 24, false);
console.log(nuevaPersona);
/* se imprime lo siguiente
    {
        nombre: 'June',
        edad: 24,
        isDebeloper: false,
        saludo: [Function: saludo]
    }
*/

const nuevaPersona2 = creaPersona("Gorka", 34, true);
console.log(nuevaPersona2);
/* imprime:
    { nombre: 'Gorka',
      edad: 34,
      isDeveloper: true,
      saludo: [λ: saludo] }
*/

/* se puede observar que esta es una forma mucho mejor de crear objetos que
tengan los mismos atributos y métodos */