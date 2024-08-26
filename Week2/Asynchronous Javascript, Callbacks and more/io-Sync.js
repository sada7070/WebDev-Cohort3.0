// I/O heavy operations
// using Synchronous readFile function.
// Synchronous function will execute code line by line, i.e., it will go to next line when the current line of code is executed
// hence this is not efficient. If the file is big so much  time will be wasted while waiting for it to complete.
// to overcome this we will use Asynchronus function.

const fs = require("fs");

const contents = fs.readFileSync("a.txt", "utf-8");
const data = fs.readFileSync("b.txt", "utf-8");
console.log(contents);
console.log(data);

