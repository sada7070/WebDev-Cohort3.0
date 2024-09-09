// Create a middleware that counts total number of requests sent to a server. Also create an endpoint that exposes it

const express = require("express");

// creating an instance(app) of the express.
const app = express();

let requestCount = 0;

// middleware function
function requestIncreaser(req, res, next) {
    requestCount ++;
    console.log(`Total number of requests = ${requestCount}.`)
    next();
    // if the 'next()' is not called, 'reakSumHandler' will not be called.
}

function realSumHandler(req, res) {
    // main logic
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a + b
    })
}

// route handler -> whenever request comes to '/sum', first go to 'requestIncreaser' and  if 'requestIncreaser' allows go to 'realSumHandler'.
app.get("/sum", requestIncreaser, realSumHandler)

app.listen(3000);