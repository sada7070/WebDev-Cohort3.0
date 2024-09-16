const express = require("express");
const app = express();

// middleware
app.use(express.json());

const users = [];

// should return random long string
function generateToken() {
    let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
                   'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 
                   'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    let token = "";
    for (let i = 0; i < 32; i++) {
        // 'Math.random' will give a random decimal number between 0 and 1. Multiplying it with 'options.length'(i.e.,62) gives you a 
        // decimal number from 0 to 62. 'Math.floor' rounds up this decimal to the nearest whole number.
        token += options[Math.floor(Math.random() * options.length)]; 
    }
    return token;
}

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
            const token = generateToken();
            u.token = token;
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
    // finding the user based on the token ganerated during signin
    const user = users.find(user => user.token === token);
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