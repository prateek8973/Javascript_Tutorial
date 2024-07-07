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

