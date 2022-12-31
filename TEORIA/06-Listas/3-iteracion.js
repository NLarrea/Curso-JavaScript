// MÉTODOS DE ITERACIÓN

// forma antigua -> menos eficiente
const arr = ["hola", 2, 5, 90, false, undefined];
for(let i=0; i<arr.length; i++){
    console.log(arr[i]); // hola, 2, 5, 90, false, undefined -> 1 valor por "vuelta"
}

// nueva forma -> .forEach()
arr.forEach(valor => {
    console.log(valor); // hola, 2, 5, 90, false, undefined
})

let suma = 0;
const arrSum = [3,6,2,77,2,3,93,19];
arrSum.forEach(valor => {
    suma += valor;
    console.log(valor); // hola, 2, 5, 90, false, undefined
})
console.log(suma); // 205


// BUSCAR VALOR DENTRO DE LISTA -> .find()
const variable = arr.find(valor => {
    if(valor === 90){
        return true;
    }
})
console.log(variable); // 90
// este tipo de "funciones" se utilizan más con objetos

// ejemplo con objetos
const listaObjetos = [
    {nombre: "Leire", edad: 35},
    {nombre: "Gorka", edad: 34},
    {nombre: "Miguel", edad: 28},
    {nombre: "Lucía", edad: 3},
    {nombre: "Amaia", edad: 29}
]
const objeto = listaObjetos.find(o => {
    if(o.nombre === "Miguel"){
        return true;
    }
})
console.log(objeto.edad); // 28 -> edad de Miguel

// el código anterior se puede reducir de la siguiente manera
const objetoReducido = listaObjetos.find(o => {
    return o.nombre === "Miguel";
})
console.log(objetoReducido.edad); // 28

// este tipo de funciones se puede reducir aún más, así
const objetoMasReducido = listaObjetos.find(o => o.nombre === "Miguel");
console.log(objetoMasReducido.edad); // 28
// esta es una forma muy útil si dentro de la función solo hay un return

// una última forma de reducirlo más
const {edad} = listaObjetos.find(o => o.nombre === "Miguel");
// edad entre llaves porque es parte de un objeto
console.log(edad); // 28

/* en todos estos casos, debería añadirse una opción para el caso de que no se
encontrara dicho nombre, ya que tal y como está el código, daría error si se
intentara localizar a otra persona que no estuviera declarada dentro de la
variable listaObjetos */