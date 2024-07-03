const posts = [
    { title: 'Post One', body: 'This is post one.' },
    { title: 'Post Two', body: 'This is post two.' }
];

function getPosts() { // callback function to display posts on the page
    setTimeout(() => { // simulate server response time
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output; // display posts on the page
    }, 1000); //this function will run after 1 second
}

function createPost(post, callback) { // this function will create a new post and add it to the posts array 
    setTimeout(() => { //callback function to simulate server response time 
        posts.push(post);
        callback(); // this will call the getPosts function
    }, 2000);// this is asynchronous  because it will run after 2 seconds
}
// This code defines a function called createPost that takes two parameters: post and callback. The purpose of this function is to create a new post and add it to an array called posts.

// Inside the createPost function, there is a setTimeout function. This function is used to simulate a delay in server response time. It takes two arguments: a callback function and a time delay in milliseconds. In this case, the callback function is defined using an arrow function () => { ... }.

// Inside the callback function, the post parameter is pushed into the posts array using the push method. After that, the callback function is called. The purpose of calling the callback function is to notify the caller that the post has been created and added to the array.

// The setTimeout function is asynchronous, which means that it will not block the execution of the code. Instead, it will wait for the specified delay (in this case, 2000 milliseconds or 2 seconds) before executing the callback function.


createPost({ title: 'Post Three', body: 'This is post three.' }, getPosts);
