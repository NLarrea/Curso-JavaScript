// GETTERS Y SETTERS

/* 
Getter -> métodos que nos permiten obtener atributos / métodos que sean privados / protegidos
Setter -> métodos que nos permiten cambiar el valor de los atributos / métodos que sean privados / protegidos

Estos métodos DEBEN ser métodos públicos para poder acceder a ellos desde fuera de las clases
*/

// clase Persona
class Persona {
    // atributos privados
    #nombre
    #edad
    // atributos protegidos
    _isDeveloper
    // método constructor
    constructor(name, age){
        this.#nombre = name;
        this.#edad = age;
    }
    // métodos
    saludar(){
        console.log(`Hola, me llamo ${this.#nombre}, tengo ${this.#edad} años.`);
    }
    // getter
    obtenNombre(){ // función getter -> nos permite acceder de forma controlada a algún atributo protegido
        return this.#nombre;
    }
    obtenEdad(){ // función getter
        return this.#edad;
    }
    // setter
    setEdad(newAge){ // función setter
        this.#edad = newAge;
    }
}

const persona = new Persona("Naia", 24); // creamos una nueva Persona
const edad = persona.obtenEdad();
console.log(edad); // 24


/* si queremos cambiar la edad de la persona, necesitaremos una función setter */
persona.setEdad(25);
console.log(persona.obtenEdad()); // 25 -> se ha cambiado la edad
console.log(persona.edad); // undefined -> para demostrar que la edad no es accesible desde fuera de la clase