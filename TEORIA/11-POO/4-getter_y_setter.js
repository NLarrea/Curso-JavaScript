// GETTERS Y SETTERS

/* 
- Getter -> métodos que permiten obtener atributos / métodos que sean privados
o protegidos
- Setter -> métodos que permiten cambiar el valor de los atributos / métodos
que sean privados / protegidos

los getter pueden servir para no permitir ver los datos a cualquiera, puesto
que solo son accesibles de una forma muy concreta

los setter pueden servir para evitar modificar el valor de cualquier elemento
de la clase por error

estos métodos DEBEN ser métodos públicos para poder acceder a ellos desde fuera
de las clases lógicamente
*/

// clase Persona
class Persona {

    // atributos privados
    #nombre
    #edad
    
    // atributos protegidos
    _isDeveloper

    // método constructor
    constructor(name, age) {
        this.#nombre = name;
        this.#edad = age;
    }
    
    // métodos
    saludar() {
        console.log(`Hola, me llamo ${this.#nombre}, tengo ${this.#edad} años.`);
    }

    // getter => para obtener datos
    obtenNombre() {         // función getter
        return this.#nombre;
    }

    obtenEdad() {           // función getter
        return this.#edad;
    }


    // setter => para modificar datos
    setEdad(newAge){        // función setter
        this.#edad = newAge;
    }
}

const persona = new Persona("Naia", 24);    // creamos una nueva Persona

const edad = persona.obtenEdad();
console.log(edad);                          // 24


// si queremos cambiar la edad de la persona, necesitaremos una función setter
persona.setEdad(25);
console.log(persona.obtenEdad());           // 25 -> se ha cambiado la edad

// para demostrar que la edad no es accesible desde fuera de la clase
console.log(persona.edad);                  // undefined