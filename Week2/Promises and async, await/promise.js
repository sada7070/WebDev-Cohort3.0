/*
    A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting
    value. Promises are used to handle asynchronous operations more effectively than traditional callback functions, providing a cleaner and
    more manageable way to deal with code that executes asynchronously, such as API calls, file I/O, or timers.
*/ 

function setTimeoutPromisified(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  function callback() {
      console.log("5 seconds have passed");
  }
  
  setTimeoutPromisified(5000).then(callback);
  

// the real operation that we want to promisify.

function doAsyncOp(resolve) {                // resolve is also a function which calls ".then" function.
    setTimeout(resolve, 3000);               // old, callback based, async function.
}

let p = new Promise(doAsyncOp);              // supposed to return you somethiing eventually.

// using the eventual value returned by  the promise.
function callback() {
  console.log("Promise succeeded.");
}
// when the 'resolve' is called from 'doAsyncOp' function, below line will be executed and that will call 'callback' function.
p.then(callback);