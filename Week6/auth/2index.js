/*
There is a problem with using `stateful` tokens.
By stateful here, we mean that we need to store these tokens in a variable right now (and eventually in a database).    
The problem is that we need to `send a request to the database` every time the user wants to hit an `authenticated endpoint`

#solution# : JWTs
JWTs, or JSON Web Tokens, are a compact and self-contained way to represent information between two parties. They are commonly used for 
authentication and information exchange in web applications.
**JWTs are Stateless**: JWTs contain all the information needed to authenticate a request, so the server doesn’t need to store session data.
All the `data` is stored in the token itself.
*/

// Replace token logic with jwt
const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();

// middleware
app.use(express.json());

const JWT_SECRET = "sadashivamurthysp";
const users = [];


app.post("/signup", function(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username: username,
        password: password
    })

    res.json({
        message: "you are signed up"
    })

    console.log(users);
})

app.post("/signin", function(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    const user = users.find(function(u) {
        // checking whether the entered username and password are correct and exist in global variable.
        if (u.username == username && u.password == password) {
            // creating token using JWT sign function, it takes 2 arguments, 
            // (1) what should be encrypted & (2) what are you using for encryption(here we are using JWT_SECRET).
            const token = jwt.sign({
                username: username
            }, JWT_SECRET);

            res.json({
                token: token
            })
        }
        else {
            res.status(403).send({
                message: "Invalid username or password"
            })
        }
    })
    console.log(users);
})

// using the token which is generated to retrive username and password.
app.get("/me", function(req, res) {
    const token = req.headers.token;
    // decoding the encoded username
    const decodedInfornation = jwt.verify(token, JWT_SECRET);
    const username = decodedInfornation.username

    // finding the user's password based on their username
    const user = users.find(user => user.username === username);
    if(user) {
        res.json({
            username: user.username,
            password: user.password
        })
    } else {
        res.json({
            message: "token invalid"
        })
    }
})

app.listen(3000);