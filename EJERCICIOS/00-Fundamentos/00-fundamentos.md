# JavaScript Fundamentals

<div id='index' />

*   [Exercise #1 - Sum two values](#exercise-1)
*   [Exercise #2 - Comparison operators, strict equality](#exercise-2)
*   [Exercise #3 - Get type of value](#exercise-3)
*   [Exercise #4 - Get nth character of string](#exercise-4)
*   [Exercise #5 - Remove first 3 characters of string](#exercise-5)
*   [Exercise #6 - Get last 3 characters of string](#exercise-6)
*   [Exercise #7 - Get first 3 characters of string](#exercise-7)
*   [Exercise #8 - Find the position of one string in another](#exercise-8)
*   [Exercise #9 - Extract first half of string](#exercise-9)
*   [Exercise #10 - Remove last 3 characters of string](#exercise-10)
*   [Exercise #11 - Return the percentage of a number](#exercise-11)
*   [Exercise #12 - Basic math operators](#exercise-12)
*   [Exercise #13 - Check whether a string contains another string and concatenate](#exercise-13)
*   [Exercise #14 - Check if a number is even](#exercise-14)
*   [Exercise #15 - How many times does a character occur?](#exercise-15)
*   [Exercise #16 - Check if a number is a whole number](#exercise-16)
*   [Exercise #17 - Multiplication, division, and comparison operators](#exercise-17)
*   [Exercise #18 - Round a number to 2 decimal places](#exercise-18)
*   [Exercise #19 - Split a number into its digits](#exercise-19)
*   [Exercise #20 - Return the next higher prime number](#exercise-20)
*   [Exercise #21 - Find the next higher natural number that is dibisible by y](#exercise-21)


<br/><hr/><hr/><br/>

## Exercise 1

<div align='right'><a href='#index'>Volver arriba</a></div>

Write a function that takes two numbers (`a` and `b`) as arguments. Sum `a` and `b`. Return the result.

<details>
<summary>SOLUTION</summary>
<p>

```js
function sumTwoNumbers(a, b) {
    return a + b;
}
```

</p>
</details>

<br/><hr/><br/>

## Exercise 2

<div align='right'><a href='#index'>Volver arriba</a></div>

Write a function that takes two values, say `a` and `b`, as arguments. Return `true` if the two values are equal and of the same type.

<details>
<summary>SOLUTION</summary>
<p>

```js
function areEqualInValueAndType(a, b) {
  return a === b;
}
```

</p>
</details>

<br/><hr/><br/>

## Exercise 3

<div align='right'><a href='#index'>Volver arriba</a></div>

Write a function that takes a value as argument. Return the type of the value.

<details>
<summary>SOLUTION</summary>
<p>

```js
function getTypeOfValue(a) {
  return typeof a;
}
```

</p>
</details>

<br/><hr/><br/>

## Exercise 4

<div align='right'><a href='#index'>Volver arriba</a></div>

Write a function that takes a string (`str`) and a number (`n`) as argument. Return the Nth character of `str`.

<details>
<summary>SOLUTION</summary>
<p>

```js
function getNthCharacter(str, n) {
  return str[n - 1];
}
```

</p>
</details>

<br/><hr/><br/>

## Exercise 5

<div align='right'><a href='#index'>Volver arriba</a></div>

Write a function that takes a string (`str`) as argument. Remove the first 3 characters of it. Return the result.

<details>
<summary>SOLUTION</summary>
<p>

```js
function removeFirstThreeChars(str) {
  return str.slice(3);
}
```

</p>
</details>

<br/><hr/><br/>

## Exercise 6

<div align='right'><a href='#index'>Volver arriba</a></div>

Write a function that takes a string as argument. Extract the last 3 characters from the string. Return the result.

<details>
<summary>SOLUTION</summary>
<p>

```js
function extractLastThreeChars(str) {
  return str.slice(-3);
}
```

</p>
</details>

<br/><hr/><br/>

## Exercise 7

<div align='right'><a href='#index'>Volver arriba</a></div>

Write a function that takes a string (`str`) as argument. Get the first 3 characters of it. Return the result.

<details>
<summary>SOLUTION</summary>
<p>

```js
function extractFirstThreeChars(str) {
  return str.slice(0, 3);
}
```

</p>
</details>

<br/><hr/><br/>

## Exercise 8

<div align='right'><a href='#index'>Volver arriba</a></div>

Write a function that takes a string as argument. The string contains the substring `'is'`. Return the index of `'is'`.

<details>
<summary>SOLUTION</summary>
<p>

```js
function findIsInString(str) {
  return str.indexOf('is');
}
```

</p>
</details>

<br/><hr/><br/>

## Exercise 9

<div align='right'><a href='#index'>Volver arriba</a></div>

Write a function that takes a string (`str`) as argument. Extract the first half and return the result. (*Assume that all the string lengths are even*).

<details>
<summary>SOLUTION</summary>
<p>

```js
function extractFirstHalfOfString(str) {
  return str.slice(0, str.length / 2);
}
```

</p>
</details>

<br/><hr/><br/>

## Exercise 10

<div align='right'><a href='#index'>Volver arriba</a></div>

Write a function that takes a string (`str`) as argument. Remove the last 3 characters of `str`. Return the result.

<details>
<summary>SOLUTION</summary>
<p>

```js
function removeLastThreeChars(str) {
  return str.slice(0, -3);
}
```

</p>
</details>

<br/><hr/><br/>

## Exercise 11

<div align='right'><a href='#index'>Volver arriba</a></div>

Write a function that takes two numbers (`a` and `b`) as arguments. Return `b` percent of `a`.

<details>
<summary>SOLUTION</summary>
<p>

```js
function percentOfNumbers(a, b) {
  return (b / 100) * a;
}
```

</p>
</details>

<br/><hr/><br/>

## Exercise 12

<div align='right'><a href='#index'>Volver arriba</a></div>

Write a function that takes 6 values (`a`, `b`, `c`, `d`, `e`, `f`) as arguments. Then:

*   Sum `a` and `b`.
*   Then substract by `c`.
*   Then multiply by `d` and divide by `e`.
*   Finally raise to the power of `f` and return the result.

**Tipp:** mind the order.

<details>
<summary>SOLUTION</summary>
<p>

```js
function operatorOrder(a, b, c, d, e, f) {
  return (((a + b) - c) * d / e) ** f;
}
```

</p>
</details>

<br/><hr/><br/>

## Exercise 13

<div align='right'><a href='#index'>Volver arriba</a></div>

Write a function that takes two strings (`strOne` and `strTwo`) as arguments. If `strOne` contains `strTwo`, append `srtTwo` to the beginning of `strOne`. If not, append it to the end. Return the concatenation.

<details>
<summary>SOLUTION</summary>
<p>

```js
function concatStringsInPosition(strOne, strTwo) {
  if (strOne.indexOf(strTwo) === -1) {
    return strOne + strTwo;
  }
  return strTwo + strOne;
}
```

In one line:

```js
function concatStringsInPosition(strOne, strTwo) {
  return strOne.indexOf(strTwo) === -1 ? strOne + strTwo : strTwo + strOne;
}
```

</p>
</details>

<br/><hr/><br/>

## Exercise 14

<div align='right'><a href='#index'>Volver arriba</a></div>

Write a function that takes a number as argument. If the number is even, return `true`. Otherwise, return `false`.

<details>
<summary>SOLUTION</summary>
<p>

```js
function isNumberEven(a) {
  return a % 2 === 0;
}
```

</p>
</details>

<br/><hr/><br/>

## Exercise 15

<div align='right'><a href='#index'>Volver arriba</a></div>

Write a function that takes two strings (`strOne` and `strTwo`) as arguments. Return the number of times `strOne` occurs in `strTwo`.

<details>
<summary>SOLUTION</summary>
<p>

```js
function countSubstrInStr(strOne, strTwo) {
  return strTwo.split(strOne).length - 1;
}
```

</p>
</details>

<br/><hr/><br/>

## Exercise 16

<div align='right'><a href='#index'>Volver arriba</a></div>

Write a function that takes a number (`a`) as argument. If `a` is a whole number (*has no decimal place*), return `true`. Otherwise, return `false`.

<details>
<summary>SOLUTION</summary>
<p>

```js
function numberIsInteger(a) {
  return a % 1 === 0;
}
```

</p>
</details>

<br/><hr/><br/>

## Exercise 17

<div align='right'><a href='#index'>Volver arriba</a></div>

Write a function that takes two numbers (`a` and `b`) as arguments. If `a` is smaller than `b`, divide `a` by `b`. Otherwise, multiply both numbers. Return the resulting value.

<details>
<summary>SOLUTION</summary>
<p>

```js
function divideOrMultiply(a, b) {
  if (a < b) {
    return a / b;
  }
  return a * b;
}
```

In one line:

```js
function divideOrMultiply(a, b) {
  return a < b ? a / b : a * b;
}
```

</p>
</details>

<br/><hr/><br/>

## Exercise 18

<div align='right'><a href='#index'>Volver arriba</a></div>

Write a function that takes a number (`a`) as argument. Round `a` to the 2nd digit after the decimal point. Return the rounded number.

<details>
<summary>SOLUTION</summary>
<p>

```js
function roundToSecondDecimal(a) {
  return Number(a.toFixed(2));
}
```

</p>
</details>

<br/><hr/><br/>

## Exercise 19

<div align='right'><a href='#index'>Volver arriba</a></div>

Write a function that takes a number (`a`) as argument. Split `a` into its individual digits and return them in an array. **TIpp:** you might want to change the type of the number for the splitting.

<details>
<summary>SOLUTION</summary>
<p>

```js
function splitNumberInDigits(a) {
  return String(a).split('').map(num => Number(num));
}
```

</p>
</details>

<br/><hr/><br/>

## Exercise 20

<div align='right'><a href='#index'>Volver arriba</a></div>

Write a funciton that takes a number (`a`) as argument. If is a prime, return `a`. If not, return the next higher prime number.

<details>
<summary>SOLUTION</summary>
<p>

```js
function getPrimeNumber(a) {
  const isPrime = number => {
    if (number <= 1) return false;
    
    for (let i=2; i<number; i++) {
      if (number % i === 0) return false;
    }
    return true;
  }
  
  let i = 0;
  do {
    i++;
  } while (!isPrime(a + i - 1));
  
  return a + i - 1;
}
```

</p>
</details>

<br/><hr/><br/>

## Exercise 21

<div align='right'><a href='#index'>Volver arriba</a></div>

Write a function that takes two numbers, say `x` and `y`, as arguments. Check if `x` is divisible by `y`. If yes, return `x`. If not, return the next higher natural number that is divisible by `y`.

<details>
<summary>SOLUTION</summary>
<p>

```js
function getDivisibleNumber(x, y) {
  const isDivisible = (numOne, numTwo) => numOne % numTwo === 0;
  
  let i = -1;
  do {
    i++;
  } while (!isDivisible(x + i, y));
  
  return x + i;
}
```

</p>
</details>