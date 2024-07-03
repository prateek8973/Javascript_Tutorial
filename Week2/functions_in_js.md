# Functions

## Passing objects to a function as a parameter

The changes in object's parameters are visible outside the function as well.
 
```javascript
function myFunc(theObject) {
  theObject.make = "Toyota";
}

const mycar = {
  make: "Honda",
  model: "Accord",
  year: 1998,
};

console.log(mycar.make); // "Honda"
myFunc(mycar);
console.log(mycar.make); // "Toyota"
```

## Passing array as a parameter to a function
```javascript
function myFunc(theArr) {
  theArr[0] = 30;
}

const arr = [45];

console.log(arr[0]); // 45
myFunc(arr);
console.log(arr[0]); // 30
```

## Function expressions

Functions can be created by the **function expression** .

```javascript 
const square = function (number) {
  return number * number;
};

console.log(square(4)); // 16
```
## Function hoisting

Consider the example below:
```javascript
console.log(square(5)); // 25

function square(n) {
  return n * n;
}
```

This code runs without any error, despite the ```square()``` function being called before it's declared. This is because the JavaScript interpreter hoists the entire function declaration to the top of the current scope, so the code above is equivalent to:
 
```javascript
// All function declarations are effectively at the top of the scope
function square(n) {
  return n * n;
}

console.log(square(5)); // 25
```

## Nested Functions and Closures

You may nest a function within another function. The nested (inner) function is private to its containing (outer) function.

It also forms a closure. A closure is an expression (most commonly, a function) that can have free variables together with an environment that binds those variables (that "closes" the expression).

The inner function can be accessed only from statements in the outer function.

The inner function forms a closure.

**The inner function can use the arguments and variables of the outer function, while the outer function cannot use the arguments and variables of the inner function.**

```javascript
function addSquares(a, b) {
  function square(x) {
    return x * x;
  }
  return square(a) + square(b);
}

console.log(addSquares(2, 3)); // 13
console.log(addSquares(3, 4)); // 25
console.log(addSquares(4, 5)); // 41
```
Since the inner function forms a closure, you can call the outer function and specify arguments for both the outer and inner function:
```javascript
function outside(x) {
  function inside(y) {
    return x + y;
  }
  return inside;
}

const fnInside = outside(3); // Think of it like: give me a function that adds 3 to whatever you give it
console.log(fnInside(5)); // 8
console.log(outside(3)(5)); // 8
```



