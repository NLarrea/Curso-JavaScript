// TIPOS PRIMITIVOS
// number
4;

// string
"hello world";
'hello world';
`hello world`;

// boolean
true;
false;

// null
null;

// undefined
undefined;


// DIFERENCIAS Y SIMILITUDES ENTRE null, undefined, false y 0
// todas son falsas en un if, y se imprimiría "no cumple"
if (null){
    console.log("cumple");
}
else {
    console.log("no cumple");
}
// pero ninguna de ellas son del mismo tipo
console.log(null === undefined)