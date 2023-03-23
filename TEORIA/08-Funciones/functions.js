// FUNCTION DECLARATIONS

// without parameters or return
function functionName() {
    console.log('Hello World!');
}

functionName();


// with return
function funcName() {
    return 'Hello World!';
}

console.log(funcName());


// with parameters
function sumTwoNumbers(numOne, numTwo) {
    return numOne + numTwo;
}

console.log(sumTwoNumbers(4, 2));


// unlimited number of parameters
function sumAllNumbers() {
    let sum = 0;

    for (let i=0; i<arguments.length; i++) {
        sum += arguments[i];
    }

    return sum;
}

console.log(sumAllNumbers());               // 0
console.log(sumAllNumbers(2));              // 2
console.log(sumAllNumbers(1, 3, 50, 4));    // 58


// unlimited parameters in arrow functions
const sumAllNums = (...args) => {
    let sum = 0;

    for (let num of args) {
        sum += num;
    }

    return sum;
}

console.log(sumAllNums());                  // 0
console.log(sumAllNums(2));                 // 2
console.log(sumAllNums(1, 3, 50, 4));       // 58



// ANONYMOUS FUNCTIONS

const anonymousFunction = function() {
    console.log("I'm an anonymous function and my value is stored in anonymousFunction");
}



// EXPRESSION FUNCTION
/* they are anonymous functions -> to return its value, we should call the
variable */

const square = function(n) {
    return n * n;
}

console.log(square(3));     // 9



// SELF INVOKING FUNCTIONS
/* they are anonymous functions which do not need to be called to return
a value */

(function(n) {
    console.log(n * n);     // 16
})(4)


let squaredNum = (function(n) {
    return n * n;
})(10)
console.log(squaredNum);    // 100



// ARROW FUNCTIONS

const fullName = (firstName, lastName) => `${firstName} ${lastName}`;

console.log(fullName('Naia', 'Larrea'));        // Naia Larrea
console.log(fullName('Albert', 'Einstein'));    // Albert Einstein


const printUpperCase = (...array) => {
    array.forEach(element => {
        console.log(element.toUpperCase());
    });
}

printUpperCase('JavaScript', 'Python', 'foo');



// FUNCTION WITH DEFAULT PARAMETERS

function greetings(name = 'User') {
    return `Hello, ${name}!`;
}

console.log(greetings());           // Hello, User!
console.log(greetings('Naia'));     // Hello, Naia!


const weightOfObject = (mass, gravity = 9.81) => `${mass * gravity} N`;

console.log(weightOfObject(100));   // 981 N