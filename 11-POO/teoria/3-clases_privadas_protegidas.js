// ÁMBITO DE LAS CLASES, CLASES PRIVADAS Y CLASES PROTEGIDAS

class Persona {
    // método constructor
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    // métodos que forman parte de la persona
    saludo(){
        console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años.`);
    }
}
const persona = new Persona("Naia", 24);
console.log(persona); // Persona { nombre: 'Naia', edad: 24 }
console.log(persona.edad); // 24
persona.saludo(); // Hola, mi nombre es Naia, tengo 24 años.


/* a veces se quieren proteger ciertas partes de las clases -> hacerlas privadas */
persona.nombre = "adiós";
console.log(persona); // el nombre se ha modificado -> a lo mejor no me interesa que se pueda hacer esto
/* la solución es hacer ciertos atributos privados, para restringir su acceso
PRIVATED -> #
PROTECTED -> _
*/

class Persona2 {
    // Private -> #
    // solo se puede acceder a ellos desde dentro de esta clase
    #nombre
    #edad
    #obtenEdad
    // Protected -> _
    // solo se puede acceder a ellos desde dentro de esta clase y desde sus descendientes
    _isDeveloper = true
    // método constructor
    constructor(nom, age){
        this.#nombre = nom;
        this.#edad = age;
    }
    // métodos que forman parte de la persona
    saludo(){
        console.log(`Hola, mi nombre es ${this.#nombre}, tengo ${this.#edad} años.`);
    }
    obtenNombre(){
        return this.#nombre;
    }
    #obtenEdad(){
        return this.#edad;
    }
}
const persona2 = new Persona2("Naia", 24);
persona2.saludo(); // Hola, mi nombre es Naia, tengo 24 años.
console.log(persona2.obtenNombre()); // Naia
console.log(persona2.nombre); // undefined
// solo se puede acceder al nombre si se crea un método dentro de la clase
//console.log(persona2.#obtenEdad()) // da error -> es privada y "no existe" fuera de la clase