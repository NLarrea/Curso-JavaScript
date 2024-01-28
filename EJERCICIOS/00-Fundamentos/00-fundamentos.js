/** EXERCISE 1
 * Write a function that takes two numbers (a and b) as argument. Sum a and b.
 * Return the result.
 */

function sumTwoNumbers(a, b) {
    return a + b;
}

// Test cases

console.log(sumTwoNumbers(1, 2));     // 3
console.log(sumTwoNumbers(1, 10));    // 11
console.log(sumTwoNumbers(99, 1));    // 100



/** EXERCISE 2
 * Write a function that takes two values, say a and b, as arguments. Return
 * true if the two values are equal and of the same type.
 */

function areEqualsInValueAndTypes(a, b) {
    return a === b;
}

// Test cases

console.log(areEqualsInValueAndTypes(2, 3));           // false
console.log(areEqualsInValueAndTypes(3, 3));           // true
console.log(areEqualsInValueAndTypes(1, '1'));         // false
console.log(areEqualsInValueAndTypes('10', '10'));     // true



/** EXERCISE 3
 * Write a function that takes a value as argument. Return the type of the
 * value.
 */

function getTypeOfValue(a) {
    return typeof a;
}

// Test cases

console.log(getTypeOfValue(1));             // number
console.log(getTypeOfValue(false));         // boolean
console.log(getTypeOfValue({}));            // object
console.log(getTypeOfValue(null));          // object
console.log(getTypeOfValue('string'));      // string
console.log(getTypeOfValue(['array']));     // number



/** EXERCISE 4
 * Write a function that takes a string (str) and a number (n) as argument.
 * Return the nth character of 'str'.
 */

function getNthCharacter(str, n) {
    return str[n - 1];
}

// Test cases

console.log(getNthCharacter('abcd', 1));        // a
console.log(getNthCharacter('zyxbwpl', 5));     // w
console.log(getNthCharacter('gfedcba', 3));     // e



/** EXERCISE 5
 * Write a function that takes a string (str) as argument. Remove the first 3
 * characters of it. Return the result.
 */

function removeFirstThreeChars(str) {
    return str.slice(3);
}

// Test cases

console.log(removeFirstThreeChars('abcdefg'));      // defg
console.log(removeFirstThreeChars('1234'));         // 4
console.log(removeFirstThreeChars('fgedcba'));      // dcba



/** EXERCISE 6
 * Write a function that takes a string as argument. Extract the last 3
 * characters from the string. Return the result.
 */

function extractLastThreeChars(str) {
    return str.slice(-3);
}

// Test cases

console.log(extractLastThreeChars('abcdefg'));      // efg
console.log(extractLastThreeChars('1234'));         // 234
console.log(extractLastThreeChars('fgedcba'));      // cba



/** EXERCISE 7
 * Write a function that takes a string (str) as argument. Get the first 3
 * characters of str. Return the result.
 */

function extractFirstThreeChars(str) {
    return str.slice(0, 3);
}

// Test cases

console.log(extractFirstThreeChars('abcdefg'));      // abc
console.log(extractFirstThreeChars('1234'));         // 123
console.log(extractFirstThreeChars('fgedcba'));      // fge



/** EXERCISE 8
 * Write a function that takes a string as argument. The string contains the
 * substring 'is'. Return the index of 'is'.
 */

function findIsInString(str) {
    return str.indexOf('is');
}

// Test cases

console.log(findIsInString('praise'));      // 3
console.log(findIsInString('risky'));       // 1
console.log(findIsInString('paris'));       // 3



/** EXERCISE 9
 * Write a function that takes a string (str) as argument. Extract the first
 * half and return the result.
 */

function extractFirstHalfOfString(str) {
    return str.slice(0, str.length / 2);
}

// Test cases

console.log(extractFirstHalfOfString('abcdefgh'));      // abcd
console.log(extractFirstHalfOfString('1234'));          // 12
console.log(extractFirstHalfOfString('gedcba'));        // ged



/** EXERCISE 10
 * Write a function that takes a string (str) as argument. Remove the last 3
 * characters of str. Return the result.
 */

function removeLastThreeChars(str) {
    return str.slice(0, -3);
}

// Test cases

console.log(removeLastThreeChars('abcdefg'));       // abcd
console.log(removeLastThreeChars('1234'));          // 1
console.log(removeLastThreeChars('fgedcba'));       // fged



/** EXERCISE 11
 * Write a function that takes two numbers (a and b) as argument. Return b
 * percent of a.
 */

function percentOfNumbers(a, b) {
    return (b / 100) * a;
}

// Test cases

console.log(percentOfNumbers(100, 50));         // 50
console.log(percentOfNumbers(10, 1));           // 0.1
console.log(percentOfNumbers(500, 25));         // 125



/** EXERCISE 12
 * Write a function that takes 6 values (a,b,c,d,e,f) as arguments. Then:
 * - Sum a and b.
 * - Then substract by c.
 * - Then multiply by d and divide by e.
 * - Finally raise to the power of f and return the result.
 * Tipp: mind the order.
 */

function operatorOrder(a, b, c, d, e, f) {
    return (((a + b) - c) * d / e) ** f;
}

// Test cases

console.log(operatorOrder(6, 5, 4, 3, 2, 1));       // 10.5
console.log(operatorOrder(6, 2, 1, 4, 2, 3));       // 2744
console.log(operatorOrder(2, 3, 6, 4, 2, 3));       // -8



/** EXERCISE 13
 * Write a function that takes two strings (strOne and strTwo) as arguments. If
 * strOne contains strTwo, append strTwo to the beginning of strOne. If not,
 * append it to the end. Return the concatenation.
 */

function concatStringsInPosition(strOne, strTwo) {
    return strOne.indexOf(strTwo) === -1 ? strOne + strTwo : strTwo + strOne;
}

// Test cases

console.log(concatStringsInPosition('cheese', 'cake'));                 // cheescake
console.log(concatStringsInPosition('lips', 's'));                      // slips
console.log(concatStringsInPosition('Java', 'script'));                 // Javascript
console.log(concatStringsInPosition(' think, therefore I am', 'I'));    // I think, therefore I am



/** EXERCISE 14
 * Write a function that takes a number as argument. If the number is even,
 * return true. Otherwise, return false.
 */

function isNumberEven(a) {
    return a % 2 === 0;
}

// Test cases

console.log(isNumberEven(10));      // true
console.log(isNumberEven(-4));      // true
console.log(isNumberEven(5));       // false
console.log(isNumberEven(-111));    // false



/** EXERCISE 15 
 * Write a function that takes two strings (strOne and strTwo) as arguments.
 * Return the number of times strOne occurs in strTwo.
 */

function countSubstrInStr(strOne, strTwo) {
    return strTwo.split(strOne).length - 1;
}

// Test cases

console.log(countSubstrInStr('m', 'how many times does the character occur in this sentence?'));    // 2
console.log(countSubstrInStr('h', 'how many times does the character occur in this sentence?'));    // 4
console.log(countSubstrInStr('?', 'how many times does the character occur in this sentence?'));    // 1
console.log(countSubstrInStr('z', 'how many times does the character occur in this sentence?'));    // 0



/** EXERCISE 16
 * Write a function that takes a number (a) as argument. If a is a whole number
 * (has no decimal place), return true. Otherwise, return false.
 */

function numberIsInteger(a) {
    return a % 1 === 0;
}

// Test cases

console.log(numberIsInteger(4));            // true
console.log(numberIsInteger(1.123));        // false
console.log(numberIsInteger(1048));         // true
console.log(numberIsInteger(10.48));        // false



/** EXERCISE 17
 * Write a function that takes two numbers (a and b) as arguments. If a is
 * smaller than b, divide a by b. Otherwise, multiply both numbers. Return the
 * resulting value.
 */

function divideOrMultiply(a, b) {
    return a < b ? a / b : a * b;
}

// Test cases

console.log(divideOrMultiply(10, 100));      // 0.1
console.log(divideOrMultiply(90, 45));       // 4050
console.log(divideOrMultiply(8, 20));        // 0.4
console.log(divideOrMultiply(2, 0.5));       // 1



/** EXERCISE 18
 * Write a function that takes a number (a) as argument. Round a to the 2nd
 * digit after the decimal point. Return the rounded number.
 */

function roundToSecondDecimal(a) {
    // return a.toFixed(2);
    return Number(a.toFixed(2));
}

// Test cases

console.log(roundToSecondDecimal(2.12397));       // 2.12
console.log(roundToSecondDecimal(3.136));         // 3.14
console.log(roundToSecondDecimal(1.12397));       // 1.12
console.log(roundToSecondDecimal(26.1379));       // 26.14



/** EXERCISE 19
 * Write a function that takes a number (a) as argument. Split a into its
 * individual digits and return them in an array. Tipp: you might want to
 * change the type of the number for the splitting.
 */

function splitNumberInDigits(a) {
    return String(a).split('').map(num => Number(num));
}

// Test cases

console.log(splitNumberInDigits(10));           // [1, 0]
console.log(splitNumberInDigits(931));          // [9, 3, 1]
console.log(splitNumberInDigits(193278));       // [1, 9, 3, 2, 7, 8]



/** EXERCISE 20
 * Write a function that takes a number (a) as argument. If is a prime, return
 * a. If not, return the next higher prime number.
 */

function getPrimeNumber(a) {
    const isPrime = number => {
        if (number <= 1) return false;

        for (let i=2; i<number; i++) {
            if (number % i === 0) return false;
        }

        return true;
    }

    let i = -1;
    do {
        i++;
    } while (!isPrime(a + i));

    return a + i;
}

// Test cases

console.log(getPrimeNumber(3));         // 3
console.log(getPrimeNumber(-1));        // 2
console.log(getPrimeNumber(34));        // 37
console.log(getPrimeNumber(17));        // 17



/** EXERCISE 21
 * Write a function that takes two numbers, say x and y, as arguments. Check if
 * x is divisible by y. If yes, return x. If not, return the next higher
 * natural number that is dibisible by y.
 */

function getDivisibleNumber(x, y) {
    const isDivisible = (numOne, numTwo) => numOne % numTwo === 0;

    let i = -1;
    do {
        i++;
    } while (!isDivisible(x + i, y));

    return x + i;
}

// Test cases

console.log(getDivisibleNumber(4, 2));          // 4
console.log(getDivisibleNumber(19, 3));         // 21
console.log(getDivisibleNumber(2, 10));         // 10