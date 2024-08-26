// "setTimeout" is a global asynchronous function which is used to schedule execution of a one-time 'callback'(1st argument) after 'delay'(2nd argument) milliseconds.
//  if 'callback' is not a function an error will be thrown.

function timeout() {
    console.log("Hello!");
}

console.log("Hi.");

setTimeout(timeout, 1000);                      // setTimeout is an asynchronous function

console.log("Bye!!!");

let c = 0;
for(let i = 0; i <=9999999990; i++) {
    c += 1;
}

console.log("Expensive line of code.");

// here in this code, except "setTimeout" function everything else is run by the CPU. Even though "setTimeout" function is asynchronous, 
// the thread which run the js code was kept busy in for loop operation without running the "setTimeout" function after the delay. This is 
// because of thread was busy in doing CPU's operation.
// after the completion of for loop execution the thread will run the "expensive line" log before executing the "timeout" function even it 
// is waiting in queue because CPU is busy in running log statements.