// Promises use the reject  argument to propagate errors

const fs = require("fs");

function readFileAsync() {
    return new Promise(function(resolve, reject) {
        fs.readFile("abc.txt", "utf-8", function(err, data) {
            if(err) {
                reject("File not found.");
            } else {
                resolve(data);
            }
        })
    })
}

readFileAsync().then(function(x){
    console.log("Files has been saved");
}).catch(function(e){
    console.log(e);
})