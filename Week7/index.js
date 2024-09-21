// Creating the backend of a todo app

const express = require("express");
const bcrypt = require("bcrypt");

// importng db model from db.js and auth,JWR_SECRET from auth.js
const { UserModel, TodoModel } = require("./db");
const { auth, JWT_SECRET } = require("./auth");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const { z } = require("zod");

// connecting db
mongoose.connect("mongodb+srv://Sada:3KLqE6wAQKIgbUSa@cluster0.43tq3.mongodb.net/todo-sada-2");
const app = express();

// to parse the body(ie., req.body.email/password/etc)
app.use(express.json());

app.post("/signup", async function(req, res) {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    // input validation using zod
    // defining the schema for the input variables using zod
    const requiredBody = z.object({
        email: z.string().min(8).max(50).email(),
        name: z.string().max(50),
        password: z.string().min(8).max(25)
    })
    const parseData = requiredBody.safeParse(req.body);

    if (!parseData.success) {
        res.json({
            message: "Incorrect format.",
            // to check what is the actual error.
            error: parseData.error
        })
    }

    let errorThrown = false;
    
    // try catch is used to get the exception inside the catch so that it can be handeled spaeratly rather than crashing the server.
    try {
        // here we are hashing the users password instead of storing the original plain text in db. since there can be multiple same password we use 'salt'
        // Salt is a random value added to the password before hashing. This prevents attackers from using precomputed tables (rainbow tables) to crack passwords.
        // 'Bcrypt' is a cryptographic hashing algorithm designed for securely hashing passwords. 'bcrypt.hash()' function contains the 'salt' within. 
        const hashedPassword = await bcrypt.hash(password, 5);
        console.log(hashedPassword);

        // here the create request will go to db server which I'm using(Mumbai in this case). So it is a promisified, hence it is a async function
        await UserModel.create({
            email: email,
            password: hashedPassword,
            name: name
        })
    } catch(e) {
        res.json({
            message: "Email already exist."
        })
        errorThrown = true;
    }

    if (!errorThrown) {
        res.json({
            message: "You are logged in"
        })
    }
});

app.post("/signin", async function(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    // checking whether the entered email exists or not. It is also async since the findOne function require time to search in db.
    const response = await UserModel.findOne({
        email: email
    })

    // if the entered email doesnt exist
    if(!response) {
        res.status(403).json({
            message: "User does not exist in our db."
        })
        return;
    }

    // if entered email exist, we are using 'compare' function which compare the entered password to hasged one and compare it with the hashed password exist in db .
    const passwordMatched = await bcrypt.compare(password, response.password);

    if (passwordMatched) {
        const token = jwt.sign({
            // creating token using the unique value(ObjectId) from which we can identify the user. ObjectId is stored in '_id' variable in db.
            id: response._id.toString()
        }, JWT_SECRET);

        res.json({
            token: token
        })
    } else {
        res.status(403).json({
            message: "Incorrect credentials"
        })
    }
});

// to add todo
app.post("/todo",auth,async function(req, res) {
    const userId = req.userId;
    const title = req.body.title;
    const done = req.body.done;

    await TodoModel.create({
        userId,
        title,
        done
    })

    res.json({
        message: "Todo created"
    })
});

// to retrive todo
app.post("/todos",auth, async function(req, res) {
    const userId = req.userId;

    const todos = await TodoModel.find({
        userId
    })
    res.json({
        todos
    })
});

app.listen(3000);