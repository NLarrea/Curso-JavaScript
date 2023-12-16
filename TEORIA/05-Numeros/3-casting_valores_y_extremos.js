// VALORES NUMÉRICOS A PARTIR DE LITERALES

let a = 2;                  // forma típica de definir números
// hay otra forma de hacerlo:
let b = new Number(3);

console.log(a);             // 2
console.log(b);             // Number 3 {} -> se sigue comportando como un 3
console.log(a + b);         // 5
console.log(b.valueOf());   // 3
/*
cuando hacemos "A + B", el intérprete ya está haciendo el valueOf() del número
internamente sin tener que decírselo nosotros. La forma de declarar números
haciendo
    let b = new Number(3);
no es común en absoluto y solo se usa en casos concretos
*/



// NaN = Not a Number - Infinity
/*
NaN -> significa que estamos intentando utilizar un método exclusivo de
variables de tipo numéricas en algo que no es un número, entonces devuelve NaN
*/

let n = Number("adios");

console.log(n);             // NaN
console.log(isNaN(n));      // true -> indica que n es un NaN


let numerador = 19;
let divisor = 2;
console.log(numerador / divisor);   // 9.5 -> OK

divisor = 0;
console.log(numerador / divisor);   // Infinity -> por dividir entre 0

let divisor2 = null;
console.log(numerador / divisor2);  // Infinity -> por dividir entre null



// CONVERTIR STRING A NUMBER -> parseInt y parseFloat

let num1 = "5.89";
let num2 = 17.2;

console.log(typeof num1);           // string
console.log(typeof num2);           // number

console.log(num1 + num2);           // 5.8917.2 -> concatena, no suma -> NOK


// hacer esto vemos que es un error -> ¿solución?
console.log(Number(num1) + num2);   // 23.09 -> hace la suma aritmética -> OK

/*
esto da la solución, pero ya hemos visto arriba que a veces el operador
Number() puede devolver un NaN, entonces, no nos sirve en todos los casos

solución -> parseInt / parseFloat
*/

console.log(typeof parseInt(num1));     // number
console.log(parseInt(num1));            // 5 -> pierde los decimales
console.log(parseFloat(num1));          // 5.89 -> no pierde los decimales


// si se usa parseFloat con tipos int:
let num3 = "4";
console.log(parseInt(num3));            // 4 -> OK
console.log(parseFloat(num3));          // 4 -> OK también



// NÚMEROS HEXADECIMALES (base 16)

/*
se utilizan sobre todo en la asignación de memoria -> bytes (se usan 2 bytes
por cada número)
*/

// *con los num hexa SIEMPRE parseInt() y NUNCA parseFloat

let numHex = "0x3a5b7";                 // num hexa -> no sabemos cuánto vale
console.log(parseInt(numHex));          // 239031 -> sin pasarle la base
// la detecta solo por el "0x" que tiene al principio
console.log(parseInt(numHex, 16));      // 239031 -> pasándole la base


// ya se podría trabajar con esos números hexadecimales como quisiéramos
let numHex2 = "0xf"; // es el número 15
console.log(parseInt(numHex2) / 3);     // 5 -> 15 / 3 = 5


// no tiene por qué llevar '0x' si le indicamos la base
numHex = 'f';
console.log(parseInt(numHex, 16));      // 15



// OBTENER VALORES MÁXIMO Y MÍNIMO

/* valores máximo y mínimo que se pueden manejar en JS por el número de bytes
que ocupan */

let min_precision = Number.EPSILON;
let min_valor_JS = Number.MIN_VALUE;
let max_valor_JS = Number.MAX_VALUE;

// valor mínimo con el que podemos trabajar en JS
console.log(min_precision);         // 2.220446049250313e-16

// valor más pequeño que se puede obtener en JS
console.log(min_valor_JS);          // 5e-324

// valor más grande que se puede obtener en JS
console.log(max_valor_JS);          // 1.7976931348623157e+308