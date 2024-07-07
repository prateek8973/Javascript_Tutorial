## Functions


```apply()```
```bind()```
```context()```

## Spreading operator
 
### Conditional Spreading
 non empty string is 
 
## Destructuring operator

The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

## ```setTimeout()``` function 



## event loop and task queue



## Arrow function and this keyword

In JavaScript, arrow functions handle the this keyword differently than traditional functions. Unlike traditional functions, an arrow function does not have its own this. Instead, it captures the this value of the enclosing lexical context at the time it is created.

This means that inside an arrow function, this refers to the value of this in the surrounding code where the arrow function was defined.

```javascript
var name="Jack";
const person = {
    name: "John",
    sayHelloTraditional: function() {
        console.log(`Hello, my name is ${this.name}`);
    },
     // Arrow function
    sayHelloArrow: () => {
        console.log(`Arrow: Hello, my name is ${this.name}`);
    }
};

person.sayHelloTraditional(); // Output: Traditional: Hello, my name is John
person.sayHelloArrow(); // Output: Arrow: Hello, my name is Jack
```


## Apply function 
1. apply()
The apply() method calls a function with a given this value, and arguments provided as an array (or an array-like object).

```func.apply(thisArg, [argsArray])``` 
```javascript
function greet(greeting, punctuation) {
  console.log(greeting + ', ' + this.name + punctuation);
}

const person = { name: 'Alice' };

greet.apply(person, ['Hello', '!']); // Output: Hello, Alice!
```

## Bind function

The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

```func.bind(thisArg, arg1, arg2, ...)``` 
```javascript
function greet(greeting, punctuation) {
  console.log(greeting + ', ' + this.name + punctuation);
}

const person = { name: 'Charlie' };

const boundGreet = greet.bind(person, 'Hey');
boundGreet('!!'); // Output: Hey, Charlie!!
```

