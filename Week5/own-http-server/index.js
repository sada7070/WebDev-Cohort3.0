// creating our own http server to do basic calculate operations.

const express = require("express");
const app = express();

app.get("/sum", function(req, res) {
    // converting the string to integer type
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    // returning thr result in the json format.
    res.json({
        ans: a + b
    })
})

app.get("/multiply", function(req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    const multiply = a * b;
    res.json({
        msg: multiply
    })
})

app.get("/divide", function(req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    if(b == 0) {
        res.json({
            msg: "divide by zero is not possible."
        })
    }

    const divide = a / b;
    res.json({
        msg: divide
    })
})

app.get("/subtract", function(req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    const subtract = a - b;
    res.json({
        msg: subtract
    })
})

app.listen(3000);