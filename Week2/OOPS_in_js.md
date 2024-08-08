# Value types
## Primitive types
1. Number
1. Symbol
1. Boolean
1. undefined
1. null

## Reference types
1. Object
1. Function
1. Array

```javascript
let x=10;
let y=x;

x=20;
```
Output:
``` x=20;y=10 Value remains unchanged``` 


## Reference types
```javascript
let x={value:10};
let y=x;

x.value=20;
```
```y=20 Value changes```  
Copied by reference


```javascript
let number=10;

function increase(number){
    number++;
}

increase(number);
console.log(number);
```
Primitives are copied by **value**

```Output:10 as number in function is local to it``` 

## Objects are dynamic 
### Properties can be added as and when required
```javascript
function createCircle(radius) {
    return {
        radius,
        draw: function () {
            console.log('draw');
        }
    };
}

const circle=new Circle(10);

circle.location={x:1};
//another way :circle['location']={x:1};
```
For deleting properties

``` delete circle.location;``` 

### for in loop
```javascript
for(let key in circle){
    console.log(key,circle[key])
}
```

### Object.keys
``` javascript
const keys=Object.keys(circle);
console.log(keys);
```

### In operator
```javascript 
if('radius' in circle)
{
    console.log("Circle has radius");
}
```

### Private Properties and Methods
```javascript
function Circle(radius){
    let defaultLocation={x:0,y:0}; //local to this function

    let computeLOptimumLocation=function(factor){
}

    this.draw=function(){
    computeOptimumLocation(0.1);
    
    console.log("draw")
}
}

const circle=new Circle(10);
circle.draw();
```

### Getters/Setters
```javascript
function Circle(radius){
    this.radius=radius;    
    let defaultLocation={x:0,y:0}; //local to this function
    
    this.getDefaultLocation=function(){
    return defaultLocation;    
}
    this.draw=function(){   
    console.log("draw")
}
    Object.defineProperty(this,'defaultLocation',{get:function(){
    return defaultLocation();//read only property
    },
    set:function(value){
        if(!value.x||!value.y)
            throw new Error('Invalid Location.');
        defaultLocation=value;    
    }
});//define property
}
```
# Bind function 
# Value types
## Primitive types
1. Number
1. Symbol
1. Boolean
1. undefined
1. null

## Reference types
1. Object
1. Function
1. Array

```javascript
let x=10;
let y=x;

x=20;
```
Output:
``` x=20;y=10 Value remains unchanged``` 


## Reference types
```javascript
let x={value:10};
let y=x;

x.value=20;
```
```y=20 Value changes```  
Copied by reference


```javascript
let number=10;

function increase(number){
    number++;
}

increase(number);
console.log(number);
```
Primitives are copied by **value**

```Output:10 as number in function is local to it``` 

## Objects are dynamic 
### Properties can be added as ### and when required
```javascript
function createCircle(radius) {
    return {
        radius,
        draw: function () {
            console.log('draw');
        }
    };
}

const circle=new Circle(10);

circle.location={x:1};
//another way :circle['location']={x:1};
```


For deleting properties

``` delete circle.location;``` 

### for in loop
```javascript
for(let key in circle){
    console.log(key,circle[key])
}
```

### Object.keys
``` javascript
const keys=Object.keys(circle);
console.log(keys);
```

### In operator
```javascript 
if('radius' in circle)
{
    console.log("Circle has radius");
}
```

### Private Properties and Methods
```javascript
function Circle(radius){
    let defaultLocation={x:0,y:0}; //local to this function

    let computeLOptimumLocation=function(factor){
}

    this.draw=function(){
    computeOptimumLocation(0.1);
    
    console.log("draw")
}
}

const circle=new Circle(10);
circle.draw();
```

### Getters/Setters
```javascript
function Circle(radius){
    this.radius=radius;    
    let defaultLocation={x:0,y:0}; //local to this function
    
    this.getDefaultLocation=function(){
    return defaultLocation;    
}
    this.draw=function(){   
    console.log("draw")
}
    Object.defineProperty(this,'defaultLocation',{get:function(){
    return defaultLocation();//read only property
    },
    set:function(value){
        if(!value.x||!value.y)
            throw new Error('Invalid Location.');
        defaultLocation=value;    
    }
});//define property
}
```

# Bind function 
The `bind()` function in JavaScript is used to create a new function that, when called, has its `this` keyword set to a specific value. It allows you to bind a function to a specific object, so that the `this` value inside the function will always refer to that object.

Here's an example of how to use the `bind()` function:

```javascript
const person = {
  name: 'John',
  age: 30,
  greet: function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
};

const greetFunction = person.greet.bind(person);
greetFunction(); // Output: Hello, my name is John and I am 30 years old.
```

In the example above, we have an object `person` with a `greet` method. We use the `bind()` function to create a new function `greetFunction` that is bound to the `person` object. When we call `greetFunction()`, the `this` value inside the function is set to `person`, so it can access the `name` and `age` properties of the `person` object.

The `bind()` function is useful when you want to pass a method as a callback function, but you need to ensure that the `this` value inside the callback function is set correctly.

Remember to always assign the result of `bind()` to a new variable, as the original function is not modified.
