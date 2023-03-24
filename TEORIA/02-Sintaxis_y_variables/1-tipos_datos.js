// TIPOS PRIMITIVOS
// number
4;
3.14;

// string
"hello world";
'hello world';
`hello world`;          // formated string
`hello ${undefined}`;   // formated string w/ data

// boolean
true;
false;

// null
null;

// undefined
undefined;



// DIFERENCIAS Y SIMILITUDES ENTRE null, undefined, false y 0

// todas son falsas en un if, y se imprimiría "no cumple"
if (null || undefined || false || 0){
    console.log("cumple");
}
else {
    console.log("no cumple");   // no cumple
}

// pero ninguna de ellas son del mismo tipo
console.log(null === undefined)