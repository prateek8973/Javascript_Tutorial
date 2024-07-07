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

const boundGreet = greet.bind(person, 'Hey'); // Output: Hey, Charlie
boundGreet('!!'); // Output: Hey, Charlie!!
```

## Ephemeral ,application and user state 

In the context of applications, there are three main categories of state to consider: ephemeral, application, and user. Here's a breakdown of each:

**1. Ephemeral State (sometimes called UI state or local state):**

* This is temporary data that only exists within the context of a specific screen or component within the application.
* It's short-lived and doesn't persist when the user navigates away or closes the app.
* Examples:
    * The value you enter in a search bar.
    * Whether a dropdown menu is currently open.
    * The position of a slider on a scale.
* Management:
    * Ephemeral state is typically managed within the component or screen itself using built-in mechanisms provided by the development framework. 
    * This might involve using variables declared within the component or functions.


**2. Application State:**

* This data is relevant to the entire application and persists across different screens or functionalities.
* It may be stored in memory for the duration of the app session but is not saved permanently.
* Examples:
    * Shopping cart items in an e-commerce app.
    * The current level reached in a game.
    * Login status of a user.
* Management:
    * Application state often requires a more centralized management approach. 
    * Frameworks often provide state management libraries or patterns like Redux or MobX to ensure consistency and accessibility throughout the app.


**3. User State:**

* This data is specific to a particular user and is typically stored persistently across app sessions.
* It can be saved on the user's device or on a remote server.
* Examples:
    * User preferences like language settings.
    * Login credentials.
    * User progress or completed tasks.
* Management:
    * User state is typically stored using mechanisms like local storage (on the device) or a database on a server. 
    * The application needs to have ways to read, write, and synchronize user data. 


Here's an analogy: Think of your house as the application. The furniture (tables, chairs) can be seen as ephemeral state - it can be moved around within the house. Groceries in the fridge (application state) might be used across different meals but are not permanent.  However, your personal belongings in your closet (user state) are specific to you and remain even when you restock groceries. 
