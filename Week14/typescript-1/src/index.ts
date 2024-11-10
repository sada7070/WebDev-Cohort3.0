// Problem 1 - greeting
function greet(firstName: string) {
    return console.log("Hello " + firstName);
}
greet("Sadashivamurthy");

//Problem 2 - Sum function
function sum(num1: number, num2: number) {
    return num1+num2;
}
let ans = sum(1, 2);
console.log(ans);

//Problem 3 - Return true or false based on if a user is 18+
function adult(age: number) {
    if(age >= 18) {
        return true;
    } else {
        return false;
    }
}
let isAdult = adult(17);
console.log(isAdult);

// Problem 4 - Create a function that takes another function as input, and runs it after 1 second.
function delayed(fn: () => void) {
    setTimeout(fn, 3000);
}
delayed(function() {
    console.log("Hello");
});