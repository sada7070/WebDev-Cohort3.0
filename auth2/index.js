const express = require("express");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "sadashivamurthysp70";

const app = express();
app.use(express.json());

const users = [];

// using CORS to avoid other frontend domains to access my backend
// "__dirname" gives ur current directory.
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/public/index.html");
})

app.post("/signup", function(req, res){
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username: username,
        password: password
    })

    res.json({
        message: "You are signed in."
    })
})

app.post("/signin", function(req, res){
    const username = req.body.username;
    const password = req.body.password;

    const foundUser = users.find(function(u) {
        if(u.username === username && u.password === password) {
            const token = jwt.sign({
                username
            }, JWT_SECRET);

            res.json({
                token: token
            })
        }
        else {
            res.json({
                mesage: "Credentials incorrect!"
            })
        }
    })
})

// middleware to do authentication.
function auth(req, res, next) {
    const token = req.headers.token;
    const decodedData = jwt.verify(token, JWT_SECRET);

    if (decodedData.username) {
        //middleware parsing the 'username' data to the next() fucntion's 'req'.
        req.username = decodedData.username
        next()
    } else {
        res.json({
            mesage: "You are not logged in."
        })
    }
    
}

// '/me' handler to give user's name and password.
app.get("/me",auth, function(req, res){
        let foundUser = null;

        for (let i = 0; i < users.length; i++) {
            if (users[i].username === req.username) {
                foundUser = users[i];
            }
        }

        res.json({
            username: foundUser.username,
            password: foundUser.password
        })
})

app.listen(3000);
