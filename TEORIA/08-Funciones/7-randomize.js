// CREAR NÚMEROS ALEATORIOS ENTRE DOS VALORES

const random = (minValue, maxValue) => {
    // si solo se introduce un valor, maxValue = 0
    maxValue = maxValue | 0;
    // minValue = valor más bajo & maxValue = valor más alto
    [minValue, maxValue] = [Math.min(minValue, maxValue), Math.max(minValue, maxValue)];
    // devolver aleatorio entre minValue (incluido) y maxValue (no incluido)
    return Math.floor(Math.random() * (maxValue - minValue) + minValue);
};

// número aleatorio del 5 al 9 (ambos incluidos)
console.log(random(10, 5));
console.log(random(5, 10));

// número aleatorio del 0 al 4 (ambos incluidos)
console.log(random(5));

// número aleatorio del -5 al 4 (ambos incluidos)
console.log(random(-5, 5));