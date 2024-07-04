# Var Keyword

## Source: MDN Web Docs 

## Description

The scope of a variable declared with var is one of the following curly-brace-enclosed syntaxes that most closely contains the var statement:

Function body

Static initialization block

Or if none of the above applies:

The current module, for code running in module mode

The global scope, for code running in script mode.


```javascript
function foo() {
  var x = 1;
  function bar() {
    var y = 2;
    console.log(x); // 1 (function `bar` closes over `x`)
    console.log(y); // 2 (`y` is in scope)
  }
  bar();
  console.log(x); // 1 (`x` is in scope)
  console.log(y); // ReferenceError, `y` is scoped to `bar`
}

foo();
```

Importantly, other block constructs, including block statements, try...catch, switch, headers of one of the for statements, do not create scopes for var, and variables declared with var inside such a block can continue to be referenced outside the block.
```javascript
for (var a of [1, 2, 3]);
console.log(a); // 3
```

In a script, a variable declared using var is added as a non-configurable property of the global object. This means its property descriptor cannot be changed and it cannot be deleted using delete.
```javascript 
"use strict";
var x = 1;
Object.hasOwn(globalThis, "x"); // true
delete globalThis.x; // TypeError in strict mode. Fails silently otherwise.
delete x; // SyntaxError in strict mode. Fails silently otherwise.
```

Hoisting 

var declarations, wherever they occur in a script, are processed before any code within the script is executed. Declaring a variable anywhere in the code is equivalent to declaring it at the top. This also means that a variable can appear to be used before it's declared.

```javascript
bla = 2;
var bla;
```

This is implicitly understood as:
```javascript
var bla;
bla = 2;
```
```javascript
function doSomething() {
  console.log(bar); // undefined
  var bar = 111;
  console.log(bar); // 111
}
```

## Redeclarations 

Duplicate variable declarations using var will not trigger an error, even in strict mode, and the variable will not lose its value, unless the declaration has an initializer.
```javascript
var a = 1;
var a = 2;
console.log(a); // 2
var a;
console.log(a); // 2; not undefined
```

```javascript
var a = 1;
let a = 2; // SyntaxError: Identifier 'a' has already been declared
```

```javascript
let a = 1;
{
  var a = 1; // SyntaxError: Identifier 'a' has already been declared
}
```

```javascript
function foo(a) {
  var a = 1;
  console.log(a);
}

foo(2); // Logs 1
```

```javascript
try {
  throw 1;
} catch (e) {
  var e = 2; // Works
}
console.log(e); // undefined
```

### Assigning two variables with single string value
```javascript
var a = "A";
var b = a;
```
This is equivalent to:
```javascript
var a, b = a = "A";
```

Be mindful of the order:
```javascript
var x = y,
  y = "A";
console.log(x, y); // undefined A
``` 
### Initialization of several variables

```javascript
var x = 0;
function f() {
  var x = y = 1; // Declares x locally; declares y globally.
}
f();

console.log(x, y); // 0 1

// In non-strict mode:
// x is the global one as expected;
// y is leaked outside of the function, though!
```
### Implicit globals and outer function scope
```javascript
var x = 0; // Declares x within file scope, then assigns it a value of 0.

console.log(typeof z); // "undefined", since z doesn't exist yet

function a() {
  var y = 2; // Declares y within scope of function a, then assigns it a value of 2.

  console.log(x, y); // 0 2

  function b() {
    x = 3; // Assigns 3 to existing file scoped x.
    y = 4; // Assigns 4 to existing outer y.
    z = 5; // Creates a new global variable z, and assigns it a value of 5.
    // (Throws a ReferenceError in strict mode.)
  }

  b(); // Creates z as a global variable.
  console.log(x, y, z); // 3 4 5
}

a(); // Also calls b.
console.log(x, z); // 3 5
console.log(typeof y); // "undefined", as y is local to function a
```

### Declaration with destructuring 

The left-hand side of each = can also be a binding pattern. This allows creating multiple variables at once.

```javascript
const result = /(a+)(b+)(c+)/.exec("aaabcc");
var [, a, b, c] = result;
console.log(a, b, c); // "aaa" "b" "cc"
```









 
