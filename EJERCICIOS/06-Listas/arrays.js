/** EXERCISE 1
 * Write a function that takes an array (arr) and a value (n) as arguments.
 * Return the nth element of arr.
 */

function getNthElement(arr, n) {
    return arr[n - 1];
}

// Test cases

console.log(getNthElement([1, 2, 3, 4, 5], 3));         // 3
console.log(getNthElement([10, 9, 8, 7, 6], 5));        // 6
console.log(getNthElement([7, 2, 1, 6, 3], 1));         // 7



/** EXERCISE 2
 * Write a function that takes an array (arr) as argument. Remove the first 3
 * elements of arr. Return the result.
 */

function removeFirstThreeItems(arr) {
    return arr.slice(3);
}

// Test cases

console.log(removeFirstThreeItems([1, 2, 3, 4]));           // [4]
console.log(removeFirstThreeItems([5, 4, 3, 2, 1, 0]));     // [2, 1, 0]
console.log(removeFirstThreeItems([99, 1, 1]));             // []



/** EXERCISE 3
 * Write a function that takes an array (arr) as argument. Extract the last 3
 * elements of 'arr'. Return the resulting array.
 */

function extractLastThreeItems(arr) {
    return arr.slice(-3)
}

// Test cases

console.log(extractLastThreeItems([1, 2, 3, 4]));           // [2, 3, 4]
console.log(extractLastThreeItems([5, 4, 3, 2, 1, 0]));     // [2, 1, 0]
console.log(extractLastThreeItems([99, 1, 1]));             // [99, 1, 1]



/** EXERCISE 4
 * Write a function that takes an array (arr) as argument. Extract the first 3
 * elements of arr. Return the resulting array.
 */

function extractFirstThreeItems(arr) {
    return arr.slice(0, 3);
}

// Test cases

console.log(extractFirstThreeItems([1, 2, 3, 4]));           // [1, 2, 3]
console.log(extractFirstThreeItems([5, 4, 3, 2, 1, 0]));     // [5, 4, 3]
console.log(extractFirstThreeItems([99, 1, 1]));             // [99, 1, 1]



/** EXERCISE 5
 * Write a function that takes an array (arr) and a number (n) as arguments.
 * It should return the last n elements of arr.
 */

function getLastNElements(arr, n) {
    return arr.slice(-n);
}

// Test cases

console.log(getLastNElements([1, 2, 3, 4, 5], 2));              // [4, 5]
console.log(getLastNElements([1, 2, 3], 6));                    // [1, 2, 3]
console.log(getLastNElements([1, 2, 3, 4, 5, 6, 7, 8], 3));     // [6, 7, 8]



/** EXERCISE 6
 * Write a function that takes an array (arr) and a value (b) as argument. The
 * function should remove all elements equal to 'b' from the array. Return the
 * filtered array.
 */

function removeGivenValue(arr, b) {
    return arr.filter(item => item !== b);
}

// Test cases

console.log(removeGivenValue([1, 2, 3], 2));                // [1, 3]
console.log(removeGivenValue([1, 2, '2'], '2'));            // [1, 2]
console.log(removeGivenValue([false, '2', 1], false));      // ['2', 1]
console.log(removeGivenValue([1, 2, '2', 1], 1));           // [2, '2']



/** EXERCISE 7
 * Write a function that takes an array (arr) as argument. Return the number of
 * elements in arr.
 */

function getNumberOfElements(arr) {
    return arr.length;
}

// Test cases

console.log(getNumberOfElements([1, 2, 2, 4]));         // 4
console.log(getNumberOfElements([9, 9, 9]));            // 3
console.log(getNumberOfElements([4, 3, 2, 1, 0]));      // 5



/** EXERCISE 8
 * Write a function that takes an array of numbers as argument. Return the
 * number of negative values in the array.
 */

function getNumberOfNegativeItems(arr) {
    return arr.filter(item => item < 0).length;
}

// Test cases

console.log(getNumberOfNegativeItems([1, -2, 2, -4]));          // 2
console.log(getNumberOfNegativeItems([0, 9, 1]));               // 0
console.log(getNumberOfNegativeItems([4, -3, 2, 1, 0]));        // 1



/** EXERCISE 9
 * Write a function that takes an array of strings as argument. Sort the array
 * elements alphabetically. Return the result.
 */

function sortAlphabetically(arr) {
    return arr.sort();
}

// Test cases

console.log(sortAlphabetically(['b', 'c', 'd', 'a']));                      // ['a', 'b', 'c', 'd']
console.log(sortAlphabetically(['z', 'c', 'd', 'a', 'y', 'a', 'w']));       // ['a', 'a', 'c', 'd', 'w', 'y', 'z']



/** EXERCISE 10
 * Write a function that takes an array of numbers as argument. It should
 * return an array with the numbers sorted in descending order.
 */

function sortNumbersInDescOrder(arr) {
    return arr.sort((a, b) => b - a);
}

// Test cases

console.log(sortNumbersInDescOrder([1, 3, 2]));         // [3, 2, 1]
console.log(sortNumbersInDescOrder([4, 2, 3, 1]));      // [4, 3, 2, 1]



/** EXERCISE 11
 * Write a function that takes an array of numbers as argument. It should
 * return the sum of the numbers.
 */

function sumArrayOfNumbers(arr) {
    return arr.reduce((total, current) => total + current, 0);
}

console.log(sumArrayOfNumbers([10, 100, 40]));              // 150
console.log(sumArrayOfNumbers([10, 100, 1000, 1]));         // 1111
console.log(sumArrayOfNumbers([-50, 0, 50, 200]));          // 200



/** EXERCISE 12
 * Write a function that takes an array of numbers as argument. It should
 * return the average of the numbers.
 */

function getAverageValue(arr) {
    const sum = arr.reduce((total, current) => total + current, 0);
    return sum / arr.length;
}

// Test cases

console.log(getAverageValue([10, 100, 40]));            // 50
console.log(getAverageValue([10, 100, 1000]));          // 370
console.log(getAverageValue([-50, 0, 50, 200]));        // 50



/** EXERCISE 13
 * Write a function that takes an array of strings as argument. Return the
 * longest string.
 */

function getLongestString(arr) {
    return arr.reduce((a, b) => a.length > b.length ? a : b);
}

// Test cases

console.log(getLongestString(['help', 'me']));              // help
console.log(getLongestString(['I', 'need', 'candy']));      // candy



/** EXERCISE 14
 * Write a function that takes an array as argument. It should return true if
 * all elements in the array are equal. It should return false otherwise.
 */

function areAllItemsEqual(arr) {
    return new Set(arr).size === 1;
}

// Test cases

console.log(areAllItemsEqual([true, true, true, true]));        // true
console.log(areAllItemsEqual(['test', 'test', 'test']));        // true
console.log(areAllItemsEqual([1, 1, 1, 2]));                    // false
console.log(areAllItemsEqual(['10', 10, 10, 10]));              // false



/** EXERCISE 15
 * Write a function that takes arguments an arbitrary number of arrays. It
 * should return an array containing the values of all arrays.
 */

function mergeArrays(...arrays) {
    return arrays.flat();
}

// Test cases

console.log(mergeArrays([1, 2, 3], [4, 5, 6]));                     // [1, 2, 3, 4, 5, 6]
console.log(mergeArrays(['a', 'b', 'c'], [4, 5, 6]));               // ['a', 'b', 'c', 4, 5, 6]
console.log(mergeArrays([true, true], [1, 2], ['a', 'b']));         // [true, true, 1, 2, 'a', 'b']



/** EXERCISE 16
 * Write a function that takes an array of objects as argument. Sort the array
 * by property b in ascending order. Return the sorted array.
 */

function sortByObjectProperty(arr) {
    return arr.sort((x, y) => x.b - y.b);
}

console.log(sortByObjectProperty([{a: 1, b: 2},{a: 5, b: 4}]));         // [ { a: 1, b: 2 }, { a: 5, b: 4 } ]
console.log(sortByObjectProperty([{a: 2, b: 10},{a: 5, b: 4}]));        // [ { a: 5, b: 4 }, { a: 2, b: 10 } ]
console.log(sortByObjectProperty([{a: 1, b: 7},{a: 2, b: 1}]));         // [ { a: 2, b: 1 }, { a: 1, b: 7 } ]



/** EXERCISE 17
 * Write a function that takes two arrays as arguments. Merge both arrays and
 * remove duplicate values. Sort the merge result in ascending order. Return
 * the resulting array.
 */

function mergeArraysWithoutDuplicating(arrOne, arrTwo) {
    return [...new Set([...arrOne, ...arrTwo])].sort((a, b) => a - b);

}

// Test cases

console.log(mergeArraysWithoutDuplicating([1, 2, 3], [3, 4, 5]));                           // [1, 2, 3, 4, 5]
console.log(mergeArraysWithoutDuplicating([-10, 22, 333, 42], [-11, 5, 22, 41, 42]));       // [-11, -10, 5, 22, 41, 42, 333]



/** EXERCISE 18
 * Write a function that takes an array (arr) and a number (b) as arguments.
 * Sum up all array elements with arr value greater than b. Return the sum.
 */

function sumNumbersGreaterThanValue(arr, b) {
    return arr.reduce((total, current) => {
        if (current > b) {
            return total + current;
        }

        return total;
    }, 0)
}

// Test cases

console.log(sumNumbersGreaterThanValue([1, 2, 3, 4, 5, 6], 4));     // 11
console.log(sumNumbersGreaterThanValue([10, 30, 50], 20));          // 80



/** EXERCIDE 19
 * Write a function that takes two numbers (min and max) as arguments. Return
 * an array of numbers in the range min to max.
 */

function createRange(min, max) {
    const range = [];
    
    for (let i=min; i<=max; i++) {
        range.push(i);
    }

    return range;
}

// Test cases

console.log(createRange(0, 10));        // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(createRange(-5, 0));        // [-5, -4, -3, -2, -1, 0]



/** EXERCISE 20
 * Write a function that takes an array of strings as argument. Group those
 * strings by their first letter. Return an object that contains properties
 * with keys representing first letters. The values should be arrays of strings
 * containing only the corresponding strings.
 * 
 * For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to:
 * { a: ['Alf', 'Alice'], b: ['Ben']}
 */

function groupArrayOfStrings(arr) {
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

// Test cases

console.log(groupArrayOfStrings(['Alf', 'Alice', 'Ben']));      // {a: ['Alf', 'Alice'], b: ['Ben']}
console.log(groupArrayOfStrings(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']));
/** prints:
{ m: [ 'Monday' ],
  t: [ 'Tuesday', 'Thursday' ],
  w: [ 'Wednesday' ],
  f: [ 'Friday' ],
  s: [ 'Saturday', 'Sunday' ] }
 */



/** EXERCISE 21
 * Write a function that takes an array with arbitrary elements and a number as
 * arguments. Return a new array, the first element should be either the given
 * number itself, or zero if the number is smaller than 6. The other elements
 * should be the elements of the original array. Try not to mutate the original
 * array.
 */

function conditionalArray(arr, n) {
    n >= 6 ? n : n = 0;

    return [n, ...arr.slice(1)];
}

// Test cases

let originalArray = [1, 2, 3, 4, 5]
console.log(conditionalArray(originalArray, 3));        // [0, 2, 3, 4, 5]
console.log(originalArray);                             // [1, 2, 3, 4, 5]

console.log(conditionalArray(originalArray, 7));        // [7, 2, 3, 4, 5]
console.log(originalArray);                             // [1, 2, 3, 4, 5]