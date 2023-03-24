// CONTROL DE BUCLES: CONTINUE Y BREAK

let lista = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i=0; i<lista.length; i++) {
    if (lista[i] === 3) continue;

    console.log(lista[i]);
    /* imprime:
        1 
        2 
        4 
        5 */
    
    if (lista[i] >= 5) break;
}

/* se salta el número 3 y cuando i = 5 sale del bucle, así que ya no imprime
ningún valor más aunque siga habiendo items en la lista */