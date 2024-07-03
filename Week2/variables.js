// Global variable
var globalVariable = "I am a global variable";

function myFunction() {
    // Local variable
    var localVariable = "I am a local variable";

    console.log(globalVariable); // Accessible within the function
    console.log(localVariable); // Accessible within the function
}

console.log(globalVariable); // Accessible outside the function
console.log(localVariable); // Not accessible outside the function
//Hoisting 
// Variables and functions can be used before they are declared
// Variables are hoisted to the top of their scope
// Functions are hoisted before variables
console.log(myVariable); // Output: undefined
var myVariable = "I am a variable";
console.log(myVariable); // Output: "I am a variable"
function myFunction() {
    console.log("I am a function");
}

// In JavaScript, the scope of a variable defines where it is accessible within the code. The keywords var, let, and const are used to declare variables, but they differ in terms of scope and behavior.

// var
// Scope: var declares a variable with function scope or globally scoped if declared outside of a function. This means if var is declared anywhere within a function, it is accessible throughout the entire function, including before its declaration due to hoisting.
// Hoisting: Variables declared with var are hoisted to the top of their function or global scope, but only the declaration, not the initialization.
// Re-declaration: Variables declared with var can be re-declared and updated within its scope.
// let
// Scope: let provides block scope, meaning it is only accessible within the closest enclosing block (e.g., a loop, if-statement, or a curly-braces {} block).
// Hoisting: Variables declared with let are also hoisted to the top of their block scope, but accessing them before the declaration results in a ReferenceError.
// Re-declaration: Variables declared with let cannot be re-declared within the same scope but can be updated.
// const
// Scope: Like let, const also provides block scope.
// Hoisting: const declarations are hoisted to the top of their block scope, with the same temporal dead zone as let.
// Re-declaration and Updating: Variables declared with const cannot be re-declared or updated. const requires an initializer and is meant for constants. However, if the const variable holds an object or array, the object or array's contents can be updated (e.g., adding properties to an object).
// Summary
// var is function-scoped or globally-scoped, allows re-declaration and updating, and is hoisted.
// let is block-scoped, does not allow re-declaration in the same scope, allows updating, and is hoisted with a temporal dead zone.
// const is block-scoped, does not allow re-declaration or updating (immutable), and is hoisted with a temporal dead zone. It allows the modification of the object or array's contents it holds.