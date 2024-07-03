# Call Stack

The call stack is a data structure in JavaScript that keeps track of function calls. It follows the Last-In-First-Out (LIFO) principle, meaning that the last function added to the stack is the first one to be executed and removed.

When a function is called, it is pushed onto the call stack. When a function completes, it is popped off the stack, allowing the next function to be executed.

# Event Loop

The event loop is a mechanism in JavaScript that handles asynchronous operations. It continuously checks the call stack and the task queue for any pending tasks.

When the call stack is empty, the event loop takes the first task from the task queue and pushes it onto the call stack for execution. This allows asynchronous operations, such as setTimeout or AJAX requests, to be executed when their respective tasks are completed.

# Task Queue

The task queue, also known as the callback queue, is a queue that holds tasks to be executed by the event loop. These tasks are usually callbacks that are triggered by asynchronous operations.

When an asynchronous operation completes, its corresponding callback is added to the task queue. The event loop then takes these tasks from the task queue and pushes them onto the call stack for execution when the call stack is empty.

# Callbacks

Callbacks are a common pattern in JavaScript for handling asynchronous operations. A callback is a function that is passed as an argument to another function and is executed once the asynchronous operation is complete.

Here's an example of using a callback with `setTimeout`:

```javascript
setTimeout(() => {
    console.log("Callback executed after 2 seconds");
}, 2000);
```

In this example, the callback function is executed after a delay of 2 seconds.

# Promises

Promises are a more modern approach to handling asynchronous operations in JavaScript. A promise represents the eventual completion or failure of an asynchronous operation and allows you to chain multiple asynchronous operations together.

Here's an example of using a promise with `fetch`:

```javascript
fetch("https://api.example.com/data")
    .then(response => response.json())
    .then(data => {
        console.log("Data fetched successfully:", data);
    })
    .catch(error => {
        console.error("Error fetching data:", error);
    });
```

In this example, the `fetch` function returns a promise that resolves to the response from the API. We can then chain `then` methods to handle the response data and `catch` method to handle any errors.

Promises provide a more structured and readable way to handle asynchronous operations compared to callbacks.
