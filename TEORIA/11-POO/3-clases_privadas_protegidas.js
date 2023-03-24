// ÁMBITO DE LAS CLASES, CLASES PRIVADAS Y CLASES PROTEGIDAS

class Persona {
    // método constructor
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    // métodos que forman parte de la persona
    saludo() {
        console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años.`);
    }
}

const persona = new Persona("Naia", 24);

console.log(persona);               // Persona { nombre: 'Naia', edad: 24 }
console.log(persona.edad);          // 24
persona.saludo();                   // Hola, mi nombre es Naia, tengo 24 años.


/* a veces se quieren proteger ciertas partes de las clases, es decir, hacerlas
privadas de tal forma que solo se pueda acceder a ellas desde la propia clase o
desde ciertas clases con 'permiso' */

persona.nombre = "adiós";
console.log(persona);               // el nombre se ha modificado
// a lo mejor no me interesa que se pueda hacer esto

/*
la solución es hacer ciertos atributos privados o protegidos, para restringir
su acceso

- PRIVATE -> # => solo se puede acceder a ellas desde dentro de la propia clase
- PROTECTED -> _ => solo se puede acceder a ellas desde dentro de la propia
clase y desde las clases descendientes (herederas) de la misma
*/

class Persona2 {
    // variables privadas / protegidas -> sí hay que ponerlas aquí

    // Private -> #
    #nombre
    #edad

    // Protected -> _
    _isDeveloper = true

    // método constructor
    constructor(name, age){
        // hay que poner '#' o '_' en aquellas variables que se inicialicen
        this.#nombre = name;
        this.#edad = age;
    }

    // métodos que forman parte de la persona
    saludo() {
        console.log(`Hola, mi nombre es ${this.#nombre}, tengo ${this.#obtenEdad()} años.`);
    }

    obtenNombre() {
        return this.#nombre;
    }
    
    // ejemplo de método protegido
    #obtenEdad() {
        return this.#edad;
    }
}

const persona2 = new Persona2("Naia", 24);

persona2.saludo();
// Hola, mi nombre es Naia, tengo 24 años.

console.log(persona2.nombre);               // undefined -> variable privada
console.log(persona2.obtenNombre());        // Naia
// con el método 'obtenNombre()' sí puedo acceder al dato privado

// console.log(persona2.#obtenEdad())       // da error
// es privada (protegida) y "no existe" fuera de la clase