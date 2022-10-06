// CLASES

// DECLARACIÓN -> class
class Persona { // objeto de tipo Persona
    // variables que forman parte de la persona -> propiedades o atributos
    /* estas son variables públicas, así que no hace falta ponerlas aquí
    nombre;
    edad;
    isDeveloper;
    */
    // método constructor
    constructor(nombre, edad, isDeveloper){ // los atributos que tenemos que pasarle para crear una Persona
        // this hace referencia al objeto en el que está ahora mismo
        this.nombre = nombre;
        this.edad = edad;
        this.isDeveloper = isDeveloper;
    }
    // métodos que forman parte de la persona
    saludo(){
        console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años.`);
    }
}


// CREAR OBJETOS DE LA CLASE (PERSONA EN ESTE CASO)
const nuevaPersona = new Persona("Naia", 24, true);
console.log(nuevaPersona); // Persona { nombre: 'Naia', edad: 24, isDeveloper: true }
nuevaPersona.saludo(); // Hola, mi nombre es Naia, tengo 24 años.

// diferencia con crear variables
let numero = 60; // inicializar
let persona_2 = new Persona("Cristina", 28, false); // instanciar


// SABER SI UNA INSTANCIA PERTENECE A UNA CLASE CONCRETA -> instanceof (similar al typeof pero para clases)
console.log(typeof numero); // number
console.log(typeof persona_2); // object
console.log(persona_2 instanceof Persona); // true