// Here we are going to creare custom "promise" class to see how everything works.
/*
    Arrow function : 
        Arrow functions do not have their own this, so they inherit this from their surrounding context, which in this case is the Promise instance.
        This ensures that this.resolve points to the correct resolve function.
*/

class Promise {
    constructor(fn) {
        const afterDone = () => {                               
            this.resolve();
        };
        fn(afterDone);
    }
    then(callback) {
        this.resolve = callback;
    }
}

function readTheFile(resolve) {
    setTimeout(function(){
        console.log("Callback based setTimeout completed.");
        resolve();
    }, 3000);
}

function setTimeoutPromisified() {
    return new Promise(readTheFile);
}

let p = setTimeoutPromisified();

function callback() {
    console.log("callback has been called");
}

p.then(callback);
