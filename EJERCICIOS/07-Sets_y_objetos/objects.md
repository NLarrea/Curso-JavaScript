# Objects

<div id='index' />

* [Exercise #1 - Accessing object properties I](#exercise-1)
* [Exercise #2 - Accessing object properties II](#exercise-2)
* [Exerise #3 - Accessing object properties III](#exercise-3)
* [Exercise #4 - Check if property exists in object](#exercise-4)
* [Exercise #5 - Check if property exists in object and is truthy](#exercise-5)
* [Exercise #6 - Creating objects I](#exercise-6)
* [Exercise #7 - Creating objects II](#exercise-7)
* [Exercise #8 - Creating objects III](#exercise-8)
* [Exercise #9 - Extract keys from object](#exercise-9)
* [Exercise #10 - Return nested object property](#exercise-10)
* [Exercise #11 - Sum object values](#exercise-11)
* [Exercise #12 - Remove a property from an object](#exercise-12)
* [Exercise #13 - Merge two objects with matching keys](#exercise-13)
* [Exercise #14 - Multiply all object values by x](#exercise-14)
* [Exercise #15 - Swap object keys and values](#exercise-15)
* [Exercise #16 - Replace empty strings in object with null values](#exercise-16)
* [Exercise #17 - Extract information from objects](#exercise-17)
* [Exercise #18 - Add property to each object in array](#exercise-18)
* [Exercise #19 - Conver array to object with counter](#exercise-19)

<br/><hr/><hr/><br/>

## Exercise 1

<div align='right'><a href='#index'>Volver arriba</a></div>

Write a function that takes an object with two properties as argument. It should return the value of the property with key `country`.

<details>
<summary>SOLUTION</summary>
<p>

```js
function accessObjProperty(obj) {
    return obj.country;
}
```

</p>
</details>

<br/><hr/><br/>

## Exercise 2

<div align='right'><a href='#index'>Volver arriba</a></div>

Write a function that takes an object with two properties as argument. It should return the value of the property with key `'prop-2'`. **Tipp:** you might want to use the square brackets property accessor

<details>
<summary>SOLUTION</summary>
<p>

```js
function accessObjPropertyTwo(obj) {
    return obj['prop-2'];
}
```

</p>
</details>

<br/><hr/><br/>

## Exercise 3

<div align='right'><a href='#index'>Volver arriba</a></div>

Write a function that takes an object with two properties and a string as arguments. It should return the value of the property with key equal to the value of the string.

<details>
<summary>SOLUTION</summary>
<p>

```js
function accessObjPropertyThree(obj, key) {
    return obj[key]
}
```

</p>
</details>

<br/><hr/><br/>

## Exercise 4

<div align='right'><a href='#index'>Volver arriba</a></div>

Write a function that takes an object (`obj`) and a string (`str`) as argument. Return `true` if the object has a property with key `str`. Return `false` otherwise.

<details>
<summary>SOLUTION</summary>
<p>

```js
function propertyExist(obj, str) {
    return str in obj;
}
```

</p>
</details>

<br/><hr/><br/>

## Exercise 5

<div align='right'><a href='#index'>Volver arriba</a></div>

Write a function that takes an object (`obj`) and a string (`str`) as argument. Return `true` if the object has a property with key `str`, but only if it has a truthy value. In other words, it should not be `null` or `undefined` or `false`. Return `false` otherwise.

<details>
<summary>SOLUTION</summary>
<p>

```js
function propertyExistsAndTruthy(obj, key) {
    return Boolean(obj[key]);
}
```

</p>
</details>

<br/><hr/><br/>

## Exercise 6

<div align='right'><a href='#index'>Volver arriba</a></div>

Write a function that takes a string as argument. Create an object that has a property with key `key` and a value equal to the string. Return the object.

<details>
<summary>SOLUTION</summary>
<p>

```js
function createObj(str) {
    return { key: str };
}
```

</p>
</details>

<br/><hr/><br/>

## Exercise 7

<div align='right'><a href='#index'>Volver arriba</a></div>

Write a function that takes two strings (`strOne` and `strTwo`) as arguments. Create an object that has a property with key `strOne` and a value of `strTwo`. Return the object.

<details>
<summary>SOLUTION</summary>
<p>

```js
function createObjTwo(strOne, strTwo) {
    return { [strOne]: strTwo};
}
```

</p>
</details>

<br/><hr/><br/>

## Exercise 8

<div align='right'><a href='#index'>Volver arriba</a></div>

Write a function that takes two arrays (`arrKeys` and `arrValues`) as arguments. Create an object that has properties with keys `arrKeys` and corresponding values `arrValues`. Return the object.

<details>
<summary>SOLUTION</summary>
<p>

```js
function createObjThree(arrKeys, arrValues) {
    return arrKeys.reduce((total, current, i) => ({...total, [current]: arrValues[i]}), {});
}
```

</p>
</details>

<br/><hr/><br/>

## Exercise 9

<div align='right'><a href='#index'>Volver arriba</a></div>

Write a function that takes an object as argument. Return an array with all object keys.

<details>
<summary>SOLUTION</summary>
<p>

```js
function getObjKeys(obj) {
    return Object.keys(obj);
}
```

</p>
</details>

<br/><hr/><br/>

## Exercise 10

<div align='right'><a href='#index'>Volver arriba</a></div>

Write a function that takes an object as argument. In some cases the object contains other objects with some deeply nested properties. Return the property `b` of object `a` inside the original object if it exists. If not, return `undefined`.

<details>
<summary>SOLUTION</summary>
<p>

```js
function getNestedProperty(obj) {
    return obj?.a?.b;
}
```

</p>
</details>

<br/><hr/><br/>

## Exercise 11

<div align='right'><a href='#index'>Volver arriba</a></div>

Write a function that takes an object as argument. Return the sum of all object values.

<details>
<summary>SOLUTION</summary>
<p>

```js
function sumObjectValues(obj) {
    return Object.values(obj).reduce((total, current) => total + current);
}
```

</p>
</details>

<br/><hr/><br/>

## Exercise 12

<div align='right'><a href='#index'>Volver arriba</a></div>

Write a function that takes an object as argument. It should return an object with all original object properties, except for the property with key `b`.

<details>
<summary>SOLUTION</summary>
<p>

```js
function removeProperty(obj) {
  	// destructuring the object
    const {b, ...rest} = obj;
    return rest;
}
```

</p>
</details>

<br/><hr/><br/>

## Exercise 13

<div align='right'><a href='#index'>Volver arriba</a></div>

Write a function that takes two objects as arguments. Unfortunately, the property `b` in the second object has the wrong key. It should be named `d` instead. Merge both objects and correct the wrong property name. Return the resulting object. It should have the properties `a`, `b`, `c`, `d`, and `e`.

<details>
<summary>SOLUTION</summary>
<p>

```js
function mergeObjects(objOne, objTwo) {
    const {b: d, ...rest} = objTwo;
    return {...objOne, ...rest, d};
}
```

</p>
</details>

<br/><hr/><br/>

## Exercise 14

<div align='right'><a href='#index'>Volver arriba</a></div>

Write a function that takes an object (`obj`) and a number (`n`) as arguments. Multiply all values of `obj` by `n`. Return the resulting object.

<details>
<summary>SOLUTION</summary>
<p>

```js
function multiplyValuesByNumber(obj, n) {
    return Object.entries(obj).reduce((acc, [key, val]) => ({...acc, [key]: val * n}), {});
}
```

</p>
</details>

<br/><hr/><br/>

## Exercise 15

<div align='right'><a href='#index'>Volver arriba</a></div>

Write a function that takes an object as argument. Somehow, the properties and keys of the object got mixed up. Swap the Javascript object's key with its values and return the resulting object.

<details>
<summary>SOLUTION</summary>
<p>

```js
function swapKeysAndValues(obj) {
    return Object.entries(obj).reduce((acc, [newVal, newKey]) => ({...acc, [newKey]: newVal}), {});
}
```

</p>
</details>

<br/><hr/><br/>

## Exercise 16

<div align='right'><a href='#index'>Volver arriba</a></div>

Write a function that takes an object as argument. Some of the property values contain empty strings. Replace empty strings and strings that contain only whitespace with `null` values. Return the resulting object.

<details>
<summary>SOLUTION</summary>
<p>

```js
function replaceEmptyStrings(obj) {
    return Object.entries(obj).reduce((acc, [key, val]) => {
        if (typeof val === 'string') {
            // check if val === '' or val === '  ':
            return {...acc, [key]: (!val || val.match(/^ *$/)) ? null : val};
        }
        return {...acc, [key]: val};
    }, {});
}
```

</p>
</details>

<br/><hr/><br/>

## Exercise 17

<div align='right'><a href='#index'>Volver arriba</a></div>

Write a function that takes an object as argument containing properties with personal information. Extract `firstName`, `lastName`, `size`, and `weight` if available. If `size` or `weight` is given transform the value to a string. Attach the unit `cm` to the `size`. Attach the unit `kg` to the `weight`. Return a new object with all available properties that we are interested in.

<details>
<summary>SOLUTION</summary>
<p>

```js
function extractInfo(obj) {
    return Object.entries(obj).reduce((acc, [key, val]) => {
        key === 'size' ? val += 'cm' : val;
        key === 'weight' ? val += 'kg' : val;

        return {...acc, [key]: val};
    }, {})
}
```

</p>
</details>

<br/><hr/><br/>

## Exercise 18

<div align='right'><a href='#index'>Volver arriba</a></div>

Write a function that takes an array of objects and a string as arguments. Add a property with key 'continent' and value equal to the string to each of the objects. Return the new array of objects. **Tipp:** try not to mutate the original array.

<details>
<summary>SOLUTION</summary>
<p>

```js
function addProperty(arr, str) {
    const newArr = JSON.parse(JSON.stringify(arr));

    for (let obj of newArr) {
        obj.continent = str;
    }

    return newArr;
}
```

</p>
</details>

<br/><hr/><br/>

## Exercise 19

<div align='right'><a href='#index'>Volver arriba</a></div>

Write a function that takes an array of numbers as argument. Convert the array to an object. It should have a key for each unique value of the array. The corresponding object value should be the number of times the key occurs within the array.

<details>
<summary>SOLUTION</summary>
<p>

```js
function arrayToObject(arr) {
    const arrSet = new Set(arr);
    const counter = {};

    for (let value of arrSet) {
        counter[value] = arr.filter(item => item === value).length;
    }

    return counter;
}
```

</p>
</details>

<br/><hr/><br/>