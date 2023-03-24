// HERENCIA Y POLIMORFISMO

// HERENCIA -> usar palabra clave "extends" y seguido la clase de la que hereda

// clase padre / madre -> clase de la que se hereda
class Persona {
    constructor(name, age) {
        this.nombre = name;
        this.edad = age;
    }
    saludar() {
        console.log(`Hola, me llamo ${this.nombre}, tengo ${this.edad} años.`);
    }
}

// clase hijo/a -> la clase que está heredando
class Desarrollador extends Persona {
    // las clases hijas pueden no tener los mismos atributos que la madre
    constructor(nombre, edad, lenguaje) {
        super(nombre, edad);        // acceder al constructor de la clase padre
        this.lenguaje = lenguaje;   // atributo de la clase hija
    }

    // POLIMORFISMO -> mismo método, pero varía en ambas clases
    saludar() {
        /* podríamos acceder al método saludar() de la clase padre haciendo uso
        de la palabra clave 'super', igual que en el constructor */
        super.saludar();            // no es necesario hacerlo

        console.log(`Y soy desarrollador de ${this.lenguaje}.`);
    }
}

const nuevoDev = new Desarrollador("Gorka", 34, "JavaScript");
console.log(nuevoDev);
// Desarrollador { nombre: 'Gorka', edad: 34, lenguaje: 'JavaScript' }

nuevoDev.saludar();
// Hola, me llamo Gorka, tengo 34 años. Y soy desarrollador de JavaScript.


// POLIMORFISMO -> que tiene varias formas
/* volveríamos a definir el método saludar(), esta vez añadiéndolo en la
clase Desarrollador.

La clase padre tiene un método llamado saludar(). En esa clase, ese método
podría hacer un console.log("Hola"), y la clase hijo podría tener ese mismo
método pero en vez de decir "Hola", decir "Hola soy desarrollador", por lo que
tendría el mismo método, pero realizaría otra acción (saludaría de forma
distinta)
*/