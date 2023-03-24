// CARGA Y SOBRECARGA DE FUNCIONES

function saludar() {
    hola();
}

function hola() {
    console.log("Hola! Soy la función hola()");
}

saludar(); // se imprime: Hola! Soy la función hola()

/* 
Carga de las funciones:
1. global()
2. saludar() global()
3. hola() saludar() global()
4. saludar() global()
5. global()

stack overflow -> sobrecarga de funciones. Puede pasar en funciones recursivas,
aquellas en las que se llama a sí mismas:

function recursiva() {
    recursiva();
}

no saldríamos nunca de la función, se llenaría el stack y daría error:
    "Maximum call stack size exceeded"
*/