// CONTROL DE BUCLES: CONTINUE Y BREAK
let lista = [1,2,3,4,5,6,7,8];
for(let i=0; i<lista.length; i++){
    if(lista[i] === 3) continue;
    console.log(lista[i]);
    if(lista[i] >= 5) break;
}
// imprime los números 1, 2, 4 y 5