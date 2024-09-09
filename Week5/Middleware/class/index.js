// here we created routes with and without middleware.

const express = require("express");
const app = express();

// route without middleware
/*
// function that returns a boolean if age of the person is more than 14.
function isOldEnough(age) {
    if(age >= 14) {
        return true;
    }
    else {
        return false;
    }
}

app.get("/ride1", function(req, res) {
    if(isOldEnough(req.query.age)) {
        res.json({
            msg: "You have successfully riden the ride 1."
        })
    }
    else {
        res.status(411).json({
            msg: "Sorry you are not of age yet."
        })
    }
})

app.get("/ride2", function(req, res) {
    if(isOldEnough(req.query.age)) {
        res.json({
            msg: "You have successfully riden the ride 2."
        })
    }
    else {
        res.status(411).json({
            msg: "Sorry you are not of age yet."
        })
    }
})
*/

//-----------------------------------------------------------------------

// route with middleware

function isOldEnoughMiddleware(req, res, next) {
    const age = req.query.age;
    if (age >= 14) {
        next();
    }
    else {
        res.json({
            msg: "Sorry you are not of age yet."
        })
    }
}

// we can use "app.use(isOldEnoughMiddleware);", which makes all the route BELOW IT to use that particular middleware.
// or we can simply call middleware function as shown below.  

app.get("/ride1",isOldEnoughMiddleware, function(req, res) {
        res.json({
            msg: "You have successfully riden the ride 1."
        })
    })

app.get("/ride2",isOldEnoughMiddleware, function(req, res) {
        res.json({
            msg: "You have successfully riden the ride 2."
        })
})

app.listen(3000);
