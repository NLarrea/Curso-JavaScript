# Arrays

<div id='index' />

*   [Exercise #1 - Get nth element of array](#exercise-1)
*   [Exercise #2 - Remove first 3 elements of an array](#exercise-2)
*   [Exercise #3 - Get last 3 elements of an array](#exercise-3)
*   [Exercise #4 - Get first 3 elements of an array](#exercise-4)
*   [Exercise #5 - Return last n array elements](#exercise-5)
*   [Exercise #6 - Remove a specific array element](#exercise-6)
*   [Exercise #7 - Count number of elements in array](#exercise-7)
*   [Exercise #8 - Count number of negative values in array](#exercise-8)
*   [Exercise #9 - Sort an array of strings alphabetically](#exercise-9)
*   [Exercise #10 - Sort an array of numbers in descending order](#exercise-10)
*   [Exercise #11 - Calculate the sum of an array numbers](#exercise-11)
*   [Exercise #12 - Return the average of an array of numbers](#exercise-12)
*   [Exercise #13 - Return the longest string from an array of strings](#exercise-13)
*   [Exercise #14 - Check if all array elements are equal](#exercise-14)
*   [Exercise #15 - Merge an arbitrary number of arrays](#exercise-15)
*   [Exercise #16 - Sort array by object property](#exercise-16)
*   [Exercise #17 - Merge two arrays with duplicate values](#exercise-17)
*   [Exercise #18 - Sum up all array elements with values greater than given number](#exercise-18)
*   [Exercise #19 - Create a range of numbers](#exercise-19)
*   [Exercise #20 - Group array of strings by first letter](#exercise-20)
*   [Exercise #21 - Define an array with conditional elements](#exercise-21)

<br/><hr/><hr/><br/>

## Exercise 1

<div align='right'><a href='#index'>Volver arriba</a></div>

Write a function that takes an array (`arr`) and a value (`n`) as arguments. Return the nth element of `arr`.

<details>
<summary>SOLUTION</summary>
<p>

```js
function getNthElement(arr, n) {
  return arr[n - 1];
}
```

</p>
</details>

<br/><hr/><br/>

## Exercise 2

<div align='right'><a href='#index'>Volver arriba</a></div>

Write a function that takes an array (`arr`) as argument. Remove the first 3 elements of `arr`. Return the result.

<details>
<summary>SOLUTION</summary>
<p>

```js
function removeFirstThreeItems(arr) {
  return arr.slice(3);
}
```

</p>
</details>

<br/><hr/><br/>

## Exercise 3

<div align='right'><a href='#index'>Volver arriba</a></div>

Write a function that takes an array (`arr`) as argument. Extract the last 3 elements of it. Return the resulting array.

<details>
<summary>SOLUTION</summary>
<p>

```js
function removeLastThreeItems(arr) {
  return arr.slice(-3);
}
```

</p>
</details>

<br/><hr/><br/>

## Exercise 4

<div align='right'><a href='#index'>Volver arriba</a></div>

Write a function that takes an array (`arr`) as argument. Extract the first 3 elements of `arr`. Return the resulting array.

<details>
<summary>SOLUTION</summary>
<p>

```js
function extractFirstThreeItems(arr) {
  return arr.slice(0, 3);
}
```

</p>
</details>

<br/><hr/><br/>

## Exercise 5

<div align='right'><a href='#index'>Volver arriba</a></div>

Write a function that takes an array (`arr`) and a number (`n`) as arguments. It should return the las `n` elements of `arr`.

<details>
<summary>SOLUTION</summary>
<p>

```js
function getLastNElements(arr, n) {
  return arr.slice(-n);
}
```

</p>
</details>

<br/><hr/><br/>

## Exercise 6

<div align='right'><a href='#index'>Volver arriba</a></div>

Write a function that takes an array (`arr`) and a value (`b`) as arguments. The function should remove all elements equal to `b` from the array. Return the filtered array.

<details>
<summary>SOLUTION</summary>
<p>

```js
function removeGivenValue(arr, b) {
  return arr.filter(item => item !== b);
}
```

</p>
</details>

<br/><hr/><br/>

## Exercise 7

<div align='right'><a href='#index'>Volver arriba</a></div>

Write a function that takes an array (`arr`) as argument. Return the number of elements in `arr`.

<details>
<summary>SOLUTION</summary>
<p>

```js
function getNumberOfElements(arr) {
  return arr.length;
}
```

</p>
</details>

<br/><hr/><br/>

## Exercise 8

<div align='right'><a href='#index'>Volver arriba</a></div>

Write a function that takes an array of numbers as argument. Return the number of negative values in the array.

<details>
<summary>SOLUTION</summary>
<p>

```js
function getNumberOfNegativeItems(arr) {
  return arr.filter(item => item < 0).length;
}
```

</p>
</details>

<br/><hr/><br/>

## Exercise 9

<div align='right'><a href='#index'>Volver arriba</a></div>

Write a function that takes an array of strings as argument. Sort the array elements alphabetically. Return the result.

<details>
<summary>SOLUTION</summary>
<p>

```js
function sortAlphabetically(arr) {
  return arr.sort();
}
```

</p>
</details>

<br/><hr/><br/>

## Exercise 10

<div align='right'><a href='#index'>Volver arriba</a></div>

Write a function that takes an array of numbers as argument. It should return an array with the numbers sorted in descending order.

<details>
<summary>SOLUTION</summary>
<p>

```js
function sortNumbersInDescOrder(arr) {
  return arr.sort((a, b) => b - a);
}
```

</p>
</details>

<br/><hr/><br/>

## Exercise 11

<div align='right'><a href='#index'>Volver arriba</a></div>

Write a function that takes an array of numbers as argument. It should return the sum of the numbers.

<details>
<summary>SOLUTION</summary>
<p>

```js
function sumArrayOfNumbers(arr) {
  return arr.reduce((total, current) => total + current, 0);
}
```

</p>
</details>

<br/><hr/><br/>

## Exercise 12

<div align='right'><a href='#index'>Volver arriba</a></div>

Write a function that takes an array of numbers as argument. It should return the average of the numbers.

<details>
<summary>SOLUTION</summary>
<p>

```js
function getAverageValue(arr) {
  const sum = arr.reduce((total, current) => total + current, 0);
  return sum / arr.length;
}
```

</p>
</details>

<br/><hr/><br/>

## Exercise 13

<div align='right'><a href='#index'>Volver arriba</a></div>

Write a function that takes an array of strings as argument. Return the longest string.

<details>
<summary>SOLUTION</summary>
<p>

```js
function getLongestString(arr) {
  return arr.reduce((a, b) => a.length > b.length ? a : b);
}
```

</p>
</details>

<br/><hr/><br/>

## Exercise 14

<div align='right'><a href='#index'>Volver arriba</a></div>

Write a function that takes an array as argument. It should return `true` if all elements in the array are equal. It should return `false` otherwise.

<details>
<summary>SOLUTION</summary>
<p>

```js
function areAllItemsEqual(arr) {
  return new Set(arr).size === 1;
}
```

</p>
</details>

<br/><hr/><br/>

## Exercise 15

<div align='right'><a href='#index'>Volver arriba</a></div>

Write a function that takes arguments as arbitrary number of arrays. It should return an array containing the values of all arrays.

<details>
<summary>SOLUTION</summary>
<p>

```js
function mergeArrays(...arrays) {
  return arrays.flat();
}
```

</p>
</details>

<br/><hr/><br/>

## Exercise 16

<div align='right'><a href='#index'>Volver arriba</a></div>

Write a function that takes an array of objects as argument. Sort the array by property `b` in ascending order. Return the sorted array.

<details>
<summary>SOLUTION</summary>
<p>

```js
function sortByObjectProperty(arr) {
  return arr.sort((x, y) => x.b - y.b);
}
```

</p>
</details>

<br/><hr/><br/>

## Exercise 17

<div align='right'><a href='#index'>Volver arriba</a></div></div>

Write a function that takes two arrays as arguments. Merge both arrays and remove duplicate values. Sort the merged result in ascending order. Return the resulting array.

<details>
<summary>SOLUTION</summary>
<p>

```js
function mergeArraysRemovingDuplicates(arrOne, arrTwo) {
  return [...new Set([...arrOne, ...arrTwo])].sort((a, b) => a - b);
}
```

</p>
</details>

<br/><hr/><br/>

## Exercise 18

<div align='right'><a href='#index'>Volver arriba</a></div>

Write a function that takes an array (`arr`) and a number (`b`) as arguments. Sum up all array elements with `arr` value greater than `b`. Return the sum.

<details>
<summary>SOLUTION</summary>
<p>

```js
function sumNumbersGreaterThanValue(arr, b) {
  return arr.reduce((total, current) => {
    return current > b ? total + current : total;
  })
}
```

</p>
</details>

<br/><hr/><br/>

## Exercise 19

<div align='right'><a href='#index'>Volver arriba</a></div>

Write a function that takes two numbers (`min` and `max`) as arguments. Return an array of numbers in the range `min` to `max` (both included). (*Assume that `min` value is smaller than `max` value*).

<details>
<summary>SOLUTION</summary>
<p>

```js
function createRange(min, max) {
  const range = [];
  
  for (let i=min; i<=max; i++) {
    range.push(i);
  }
  
  return range;
}
```

</p>
</details>

<br/><hr/><br/>

## Exercise 20

<div align='right'><a href='#index'>Volver arriba</a></div>

Write a function that takes an array of strings as argument. Group those strings by their first letter. Return an object that contains properties with keys representing first letters. The values should be arrays of strings containing only the corresponding strigs.

***For example:*** *the array `['Alf', 'Alice', 'Ben']` should be transformed to: `{a: ['Alf', 'Alice'], b: ['Ben']}`.*

<details>
<summary>SOLUTION</summary>
<p>

```js
function groupArraysOfStrings(arr) {
  const group = {};
  
  for (let word of arr) {
    if (!Object.keys(group).includes(word[0].toLowerCase())) {
      group[word[0].toLowerCase()] = [word];
    } else {
      group[word[0].toLowerCase()].push(word);
    }
  }
  
  return group;
}
```

</p>
</details>

<br/><hr/><br/>

## Exercise 21

<div align='right'><a href='#index'>Volver arriba</a></div>

Write a function that takes an array with arbitrary elements and a number as arguments. Return a new array, the first element should be either the given number itself, or zero if the number is smaller than 6. The other elements should be the elements of the original array. Try not to mutate the original array.

<details>
<summary>SOLUTION</summary>
<p>

```js
function conditionalArray(arr, n) {
  n >= 6 ? n : n = 0;
  return [n, ...arr.slice(1)];
}
```

</p>
</details>

<br/><hr/><br/>