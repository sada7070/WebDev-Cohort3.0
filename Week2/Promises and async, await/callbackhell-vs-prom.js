// callbackhell 
setTimeout(function() {
    console.log("Hi!");
    setTimeout(function() {
        console.log("Hello!!");
        setTimeout(function() {
            console.log("Hello there!!!");
        },5000);
    }, 3000);
},1000);

// promisified version of the same code(still has callback hell)
function setTimeoutPromisified(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  setTimeoutPromisified(1000).then(function() {
    console.log("Hi!");
    setTimeoutPromisified(3000).then(function() {
        console.log("Hello!!");
        setTimeoutPromisified(5000).then(function() {
            console.log("Hello there!!!");
          });
      });
  });


// promise chaining
function setTimeoutPromisified(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

setTimeoutPromisified(1000).then(function() {
    console.log("Hi!");
    return setTimeoutPromisified(3000)
}).then(function() {
    console.log("Hello!!");
    return setTimeoutPromisified(5000)
}).then(function() {
    console.log("Hello there!!!");
})