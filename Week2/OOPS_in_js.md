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
