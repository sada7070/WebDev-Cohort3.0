/* 
    Async await syntax:
    The following code do exact same thing as in the file "callbackhell-vs-prom.js".
    The async and await syntax in JavaScript provides a way to write asynchronous code that looks and behaves like synchronous code, 
    making it easier to read and maintain. 
    It builds on top of Promises and allows you to avoid chaining .then() and .catch() methods while still working with asynchronous operations.
    async/await is essentially syntactic sugar on top of Promises. 
*/

function setTimeoutPromisified(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function solve() {
    await setTimeoutPromisified(1000);
    console.log("Hi!");
    await setTimeoutPromisified(3000);
    console.log("Hello!!");
    await setTimeoutPromisified(5000);
    console.log("Hello there!!!");
}

solve();