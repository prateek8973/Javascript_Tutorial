# Arrays and Functions in JavaScript

## Introduction

Arrays are a fundamental data structure in JavaScript that allow you to store multiple values in a single variable.In this guide, we'll explore various array functions and their corner cases.

## Creating an 

To create an array, you can use the array literal syntax `[]` or the `Array` constructor.Here's an example:
    ```javascript
// Using array literal syntax
let fruits = ['apple', 'banana', 'orange'];

// Using Array constructor
let colors = new Array('red', 'green', 'blue');

// Array Functions

// 1. push()
// Adds one or more elements to the end of an array and returns the new length of the array.
fruits.push('grape', 'kiwi');

// 2. pop()
// Removes the last element from an array and returns that element.
let lastFruit = fruits.pop();

// 3. shift()
// Removes the first element from an array and returns that element.
let firstFruit = fruits.shift();

// 4. unshift()
// Adds one or more elements to the beginning of an array and returns the new length of the array.
fruits.unshift('mango', 'pineapple');

// 5. slice()
// Returns a shallow copy of a portion of an array into a new array object.
let slicedFruits = fruits.slice(1, 3);

// 6. splice()
// Changes the contents of an array by removing or replacing existing elements and/or adding new elements.
fruits.splice(1, 2, 'pear', 'watermelon');

// 7. concat()
// Returns a new array that combines the elements of the original array with other arrays and/or values.
let combinedArray = fruits.concat(colors);

// 8. reverse()
// Reverses the order of the elements in an array.
fruits.reverse();

// 9. sort()
// Sorts the elements of an array in place and returns the sorted array.
fruits.sort();

// 10. indexOf()
// Returns the first index at which a given element can be found in the array, or -1 if it is not present.
let orangeIndex = fruits.indexOf('orange');

// Exceptional Cases or Conditions

// 1. Accessing an element outside the array bounds
let outOfBounds = fruits[10]; // Returns undefined

// 2. Using negative index with slice()
let negativeSlice = fruits.slice(-2); // Returns ['watermelon', 'pear']

// 3. Sorting an array of numbers
let numbers = [10, 5, 8, 2, 1];
numbers.sort(); // Returns [1, 10, 2, 5, 8] (lexicographic sort)

// 4. Comparing arrays for equality
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];
arr1 === arr2; // Returns false (reference comparison)

// 5. Removing elements using splice()
fruits.splice(1, 2); // Removes 'banana' and 'orange' from the array

// 6. Adding elements using splice()
fruits.splice(1, 0, 'grape', 'kiwi'); // Inserts 'grape' and 'kiwi' at index 1

// 7. Concatenating arrays with different data types
let mixedArray = fruits.concat(123, true, { name: 'John' }); // Returns ['mango', 'grape', 'kiwi', 123, true, { name: 'John' }]

// 8. Reversing an array with non-string elements
let mixedArray = [1, 'apple', true];
mixedArray.reverse(); // Returns [true, 'apple', 1]
```