/** EXERCISE 1
 * Write a function that takes an object with two properties as argument. It
 * should return the value of the property with key `country`.
 */

function accessObjProperty(obj) {
    return obj.country;
}

// Test cases

console.log(accessObjProperty({ continent: 'Asia', country: 'Japan' }));    // Japan
console.log(accessObjProperty({ country: 'Sweden', continent: 'Europe'}));  // Sweeden



/** EXERCISE 2
 * Write a function that takes an object with two properties as argument. It
 * should return the value of the property with key `prop-2`. Tipp: you might
 * want to use the square brackets property accessor.
 */

function accessObjPropertyTwo(obj) {
    return obj['prop-2'];
}

// Test cases

console.log(accessObjPropertyTwo({ one: 1, 'prop-2': 2 }));             // 2
console.log(accessObjPropertyTwo({ 'prop-2': 'two', prop: 'test' }));   // two



/** EXERCISE 3
 * Write a function that takes an object with two properties and a string as
 * arguments. It should return the value of the property with key equal to the
 * value of the string.
 */

function accessObjPropertyThree(obj, key) {
    return obj[key]
}

// Test cases

console.log(accessObjPropertyThree({ continent: 'Asia', country: 'Japan' }, 'continent'));   // Asia
console.log(accessObjPropertyThree({ country: 'Sweden', continent: 'Europe'}, 'country'));   // Sweeden



/** EXERCISE 4
 * Write a function that takes an object (`obj`) and a string (`str`) as
 * argument. Return `true` if the object has a property with key `str`. Return
 * `false` otherwise.
 */

function propertyExists(obj, str) {
    return str in obj;
}

// Test cases

console.log(propertyExists({a: 1, b: 2, c: 3}, 'b'));                // true
console.log(propertyExists({x: 'a', y: 'b', z: 'c'}, 'a'));          // false
console.log(propertyExists({x: 'a', y: 'b', z: undefined}, 'z'));    // true



/** EXERCISE 5
 * Write a function that takes an object (`obj`) and a string (`str`) as
 * argument. Return `true` if the object has a property with key `str`, but
 * only if it has a truthy value. In other words, it should not be `null` or
 * `undefined` or `false`. Return `false` otherwise.
 */

function propertyExistsAndTruthy(obj, key) {
    return Boolean(obj[key]);
}

// Test cases

console.log(propertyExistsAndTruthy({a: 1, b: 2, c: 3}, 'b'));              // true
console.log(propertyExistsAndTruthy({x: 'a', y: null, z: 'c'}, 'y'));       // false
console.log(propertyExistsAndTruthy({x: 'a', b: 'b', z: undefined}, 'z'));  // false



/** EXERCISE 6
 * Write a function that takes a string as argument. Create an object that has
 * a property with key `key` and a value equal to the string. Return the
 * object.
 */

function createObj(str) {
    return { key: str };
}

// Test cases

console.log(createObj('a'));    // { key: 'a' }
console.log(createObj('z'));    // { key: 'z' }
console.log(createObj('b'));    // { key: 'b' }



/** EXERCISE 7
 * Write a function that takes two strings (`strOne` and `strTwo`) as
 * arguments. Create an object that has a property with key `strOne` and a
 * value of `strTwo`. Return the object.
 */

function createObjTwo(strOne, strTwo) {
    return { [strOne]: strTwo};
}

// Test cases

console.log(createObjTwo('a', 'b'));    // { a: 'b' }
console.log(createObjTwo('z', 'x'));    // { z: 'x' }
console.log(createObjTwo('b', 'w'));    // { b: 'w' }



/** EXERCISE 8
 * Write a function that takes two arrays (`arrKeys` and `arrValues`) as
 * arguments. Create an object that has properties with keys `arrKeys` and
 * corresponding values `arrValues`. Return the object.
 */

function createObjThree(arrKeys, arrValues) {
    return arrKeys.reduce((total, current, i) => ({...total, [current]: arrValues[i]}), {});
}

// Test cases

console.log(createObjThree(['a', 'b', 'c'], [1, 2, 3]));            // { a: 1, b: 2, c: 3 }
console.log(createObjThree(['w', 'x', 'y', 'z'], [10, 9, 5, 2]));   // { w: 10, x: 9, y: 5, z: 2 }
console.log(createObjThree([1, 'b'], ['a', 2]));                    // { 1: 'a', b: 2 }



/** EXERCISE 9
 * Write a function that takes an object as argument. Return an array with all
 * object keys.
 */

function getObjKeys(obj) {
    return Object.keys(obj);
}

// Test cases

console.log(getObjKeys({a: 1, b: 2, c: 3}));        // [ 'a', 'b', 'c' ]
console.log(getObjKeys({j: 9, i: 2, x: 3, z: 4}));  // [ 'j', 'i', 'x', 'z' ]
console.log(getObjKeys({w: 15, x: 22, y: 13}));     // [ 'w', 'x', 'y' ]



/** EXERCISE 10
 * Write a function that takes an object as argument. In some cases the object
 * contains other objects with some deeply nested properties. Return the
 * property `b` of object `a` inside the original object if it exists. If not,
 * return `undefined`.
 */

function getNestedProperty(obj) {
    return obj?.a?.b;
}

// Test cases

console.log(getNestedProperty({a: 1}));             // undefined
console.log(getNestedProperty({a: {b: {c: 3}}}));   // { c: 3 }
console.log(getNestedProperty({b: {a: 1}}));        // undefined
console.log(getNestedProperty({a: {b: 2}}));        // 2



/** EXERCISE 11
 * Write a function that takes an object as argument. Return the sum of all
 * object values.
 */

function sumObjectValues(obj) {
    return Object.values(obj).reduce((total, current) => total + current);
}

// Test cases

console.log(sumObjectValues({a: 1, b: 2, c: 3}));           // 6
console.log(sumObjectValues({j: 9, i: 2, x: 3, z: 4}));     // 18
console.log(sumObjectValues({w: 15, x: 22, y: 13}));        // 50



/** EXERCISE 12
 * Write a function that takes an object as argument. It should return an
 * object with all original object properties, except for the property with key
 * `b`.
 */

function removeProperty(obj) {
    const {b, ...rest} = obj;
    return rest;
}

// Test cases

console.log(removeProperty({ a: 1, b: 7, c: 3 }));          // { a: 1, c: 3 }
console.log(removeProperty({ b: 0, a: 7, d: 8 }));          // { a: 7, d: 8 }
console.log(removeProperty({ e: 6, f: 4, b: 5, a: 3 }));    // { e: 6, f: 4, a: 3 }



/** EXERCISE 13
 * Write a function that takes two objects as arguments. Unfortunately, the
 * property `b` in the second object has the wrong key. It should be named `d`
 * instead. Merge both objects and correct the wrong property name. Return the
 * resulting object. It should have the properties `a`, `b`, `c`, `d`, and `e`.
 */

function mergeObjects(objOne, objTwo) {
    const {b: d, ...rest} = objTwo;
    return {...objOne, ...rest, d};
}

// Test cases

console.log(mergeObjects({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 }));    // { a: 1, b: 2, c: 3, e: 5, d: 4 }
console.log(mergeObjects({ a: 5, b: 4 }, { c: 3, b: 1, e: 2 }));    // { a: 5, b: 4, c: 3, e: 2, d: 1 }



/** EXERCISE 14
 * Write a function that takes an object (`obj`) and a number (`n`) as
 * arguments. Multiply all values of `obj` by `n`. Return the resulting object.
 */

function multiplyValuesByNumber(obj, n) {
    return Object.entries(obj).reduce((acc, [key, val]) => ({...acc, [key]: val * n}), {});
}

// Test cases

console.log(multiplyValuesByNumber({a: 1, b: 2, c: 3}, 3));             // { a: 3, b: 6, c: 9 }
console.log(multiplyValuesByNumber({j: 9, i: 2, x: 3, z: 4}, 10));      // { j: 90, i: 20, x: 30, z: 40 }
console.log(multiplyValuesByNumber({w: 15, x: 22, y:13}, 6));           // { w: 90, x: 132, y: 78 }



/** EXERCISE 15
 * Write a function that takes an object as argument. Somehow, the properties
 * and keys of the object got mixed up. Swap the Javascript object's key with
 * its values and return the resulting object.
 */

function swapKeysAndValues(obj) {
    return Object.entries(obj).reduce((acc, [newVal, newKey]) => ({...acc, [newKey]: newVal}), {});
}

// Test cases

console.log(swapKeysAndValues({Spain: 'country', Europe: 'continent'}));    // { country: 'Spain', continent: 'Europe' }
console.log(swapKeysAndValues({Naia: 'name', 25: 'age'}));                  // { age: '25', name: 'Naia'}



/** EXERCISE 16
 * Write a function that takes an object as argument. Some of the property
 * values contain empty strings. Replace empty strings and strings that contain
 * only whitespace with `null` values. Return the resulting object
 */

function replaceEmptyStrings(obj) {
    return Object.entries(obj).reduce((acc, [key, val]) => {
        if (typeof val === 'string') {
            // check if val === '' or val === '  ':
            return {...acc, [key]: (!val || val.match(/^ *$/)) ? null : val};
        }
        return {...acc, [key]: val};
    }, {});
}

// Test cases

console.log(replaceEmptyStrings({name: 'John', description: ''}));      // { name: 'John', description: null }
console.log(replaceEmptyStrings({a: 'string', b: '', c: ' ', d: 3}));   // { a: 'string', b: null, c: null, d: 3 }



/** EXERCISE 17
 * Write a function that takes an object as argument containing properties with
 * personal information. Extract `firstName`, `lastName`, `size`, and `weight`
 * if available. If `size` or `weight` is given transform the value to a
 * string. Attach the unit `cm` to the `size`. Attach the unit `kg` to the
 * `weight`. Return a new object with all available properties that we are
 * interested in.
 */

function extractInfo(obj) {
    return Object.entries(obj).reduce((acc, [key, val]) => {
        key === 'size' ? val += 'cm' : val;
        key === 'weight' ? val += 'kg' : val;

        return {...acc, [key]: val};
    }, {})
}

// Test cases

console.log(extractInfo({firstName: 'Naia', lastName: 'Larrea', size: 162, weight: 62}));
/* prints:
{ firstName: 'Naia',
  lastName: 'Larrea',
  size: '162cm',
  weight: '62kg' }
*/
console.log(extractInfo({firstName: 'Naia', lastName: 'Larrea'}));
/* prints:
{ firstName: 'Naia', lastName: 'Larrea' }
*/
console.log(extractInfo({firstName: 'Naia', lastName: 'Larrea', size: 162}));
/* prints:
{ firstName: 'Naia', lastName: 'Larrea', size: '162cm' }
*/



/** EXERCISE 18
 * Write a function that takes an array of objects and a string as arguments.
 * Add a property with key 'continent' and value equal to the string to each of
 * the objects. Return the new array of objects. Tipp: try not to mutate the
 * original array.
 */

function addProperty(arr, str) {
    const newArr = JSON.parse(JSON.stringify(arr));

    for (let obj of newArr) {
        obj.continent = str;
    }

    return newArr;
}

// Test cases

let originalArray = [{country: 'Spain'}, {country: 'France'}]
console.log(addProperty(originalArray, 'Europe'));
/* prints:
[ { country: 'Spain', continent: 'Europe' },
  { country: 'France', continent: 'Europe' } ]
*/
console.log(originalArray);     // [ { country: 'Spain' }, { country: 'France' } ]



/** EXERCISE 19
 * Write a function that takes an array of numbers as argument. Convert the
 * array to an object. It should have a key for each unique value of the array.
 * The corresponding object value should be the number of times the key occurs
 * within the array.
 */

function arrayToObject(arr) {
    const arrSet = new Set(arr);
    const counter = {};

    for (let value of arrSet) {
        counter[value] = arr.filter(item => item === value).length;
    }

    return counter;
}

console.log(arrayToObject([1, 2, 2, 4, 32, 4]));    // { 1: 1, 2: 2, 4: 2, 32: 1 }