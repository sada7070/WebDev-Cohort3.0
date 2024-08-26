// I/O heavy operations
// using Asynchronous readFile function.
// Asynchronous function will start executing every file at once and which ever finishes first that will be executed.
// hence it is more efficient

const fs = require("fs");

function print(err, data) {                         // this is the std function format for "readFile" written by this module owner
    if (err) {
        console.log("File not found!!");
    }
    else {
        console.log(data);
    }
}

fs.readFile("a.txt", "utf-8", print);               // here the 3rd argument  is the function name which will be executed automatically once it is ready to execute.
fs.readFile("b.txt", "utf-8", print);
console.log("Done!");                              

 // here "Done!" will be executed first since other 2 lines take more time comparatively even though all 3 lines started to run at a same time.