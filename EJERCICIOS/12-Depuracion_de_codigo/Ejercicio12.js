/*
Crea un nuevo fichero JS que contenga las siguientes líneas
- Una función que admita un parámetro "num", y devuelva una lista con esa cantidad de números de la secuencia de Fibonacci (Por ejemplo: num = 6 => Resultado [1, 1, 2, 3, 5, 8])
- Ejecuta la depuración de VSCode para visualizar la ejecución de la función
*/


// FUNCIÓN PARA PEDIR CUÁNTOS FIBONACCIS CALCULAR
function obtenerFibonacci(num){
    // declaración inicial de las variables
    let array = []; // array vacío
    let fib_anterior = 0;
    let fib_anterior2 = 0;
    // bucle para calcular Fibonaccis y guardar en array
    for(let i=1; i<=num; i++){
        let fib_actual = fibonacci(i,fib_anterior,fib_anterior2); // Fibonacci actual
        array = [...array, fib_actual]; // guarda los Fibonaccis en el array
        // actualizar valores de los Fibonaccis anteriores
        if(i >= 2) fib_anterior2 = fib_anterior;
        fib_anterior = fib_actual;
    }
    return array; // devolvemos el array
}
// FUNCIÓN PARA CALCULAR SIGUIENTE FIBONACCI
function fibonacci(n, f1, f2){
    if(n === 0) return 0;
    else if(n === 1) return 1;
    else return f1 + f2;
}

const arrayFib = obtenerFibonacci(6);
console.log(arrayFib);