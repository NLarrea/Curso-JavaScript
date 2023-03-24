// BUCLES

// FOR
/* estructura:

for(inicialización; condicion; actualización){
    // código del bucle
} 

*/
for (let i=0; i<5; i++) {
    console.log(i);
}
/* este código imprime: 
    0
    1
    2
    3
    4 */


for (let i=0; i<10; i+=2) {
    console.log(i);
}
// imprime los números pares desde el 0 hasta el 10 (no incluido)


let lista = [1, 4, 6, 2, 3, 7, 10, 12];
for (let i=0; i<lista.length; i++) {
    console.log(lista[i] * 2)
}
// imprime todos los valores de la lista multiplicados por 2



// FOR OF

for (let valor of lista) {
    console.log(valor);
}
// imprime todos los valores de la lista

let saludo = "hello world";
for (let letra of saludo) {
    console.log(letra);
}
/* imprime todos los char de un string:
    h 
    e 
    l 
    l 
    o 
    
    w 
    o 
    r 
    l 
    d */



// FOR EACH (función flecha)

// lista = [1, 4, 6, 2, 3, 7, 10, 12]

lista.forEach(valor => {
    console.log(valor);
    /* se imprime:
        1 
        4 
        6 
        2 
        3 
        7 
        10 
        12 */
});
// imprime todos los valores de la lista
// no funciona con strings (como el ejemplo "saludo")



// FOR IN

let persona = {
    nombre: "Naia",
    apellido: "Larrea",
    edad: 24,
    isDeveloper: true
}

for (let atributo in persona) {
    // imprime las "keys" del objeto persona:
    console.log(atributo); 
    // imprime el objeto entero tantas veces como atributos tenga (por estar dentro del for):
    console.log(persona); 
}


// con las listas, muestra el índice

// comparación 'for in' y 'for of':
// lista = [1, 4, 6, 2, 3, 7, 10, 12]

for (let x in lista) {
    console.log(x);
    /* se imprime:
        0 
        1 
        2 
        3 
        4 
        5 
        6 
        7 */
}

for (let x of lista) {
    console.log(x);
    /* se imprime:
        1 
        4 
        6 
        2 
        3 
        7 
        10 
        12 */
}



// WHILE

let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
// imprime todos los números del 0 al 5 (no incluido)



// DO WHILE
i = 20;
do {
    console.log("Me muestro minimo 1 vez");
    i++;
} while (i<5);
/* se imprime solo 1 vez porque i>5, entonces entra en el bucle una vez y no se
vuelve a repetir */