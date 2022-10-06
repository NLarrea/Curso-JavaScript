// PROGRAMACIÓN ORIENTADA A OBJETOS

// DEFINICIÓN
const persona = {
    // propiedades
    nombre: "Naia",
    edad: 24,
    isDeveloper: true,
    saludo: function(){ // método
        console.log("Kaixo!");
    }
}
// muestra de sus valores
console.log(persona);
persona.saludo();

// creación de otra persona
const otraPersona = {
    nombre: "Cristina",
    edad: 28,
    isDeveloper: false,
    saludo: function(){
        console.log("Hola");
    }
}
otraPersona.saludo();

/* todo esto es muy tedioso, estamos repitiendo código -> solución: crear función -> factory function,
funciona como una especie de plantilla donde podemos crear objetos con los mismos atributos y métodos
de una forma mucho más rápida */
const creaPersona = (nombre, edad, isDebeloper) => {
    return{
        // puede ponerse solo "nombre", porque tiene el mismo nombre el atributo que la variable
        nombre: nombre,
        edad, // aquí por ejemplo he quitado el: "edad: edad," por no repetirlo -> tienen mismo nombre, no hace falta ponerlo
        isDebeloper,
        saludo: function(){
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