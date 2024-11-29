import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import z from "zod";
import bcrypt from "bcrypt";
import { UserModel } from "./db";

const app = express();

app.post("/api/v1/signup", async (req, res) => {
    const{ username, password } = req.body;
    
    // input validation using zod
    const requiredBody = z.object({
        username: z.string().min(6).max(15),
        password: z.string().min(8).max(20),
    })
    const parseData = requiredBody.safeParse(req.body);

    if(!parseData.success) {
        res.status(422).json({
            message: "Incorrect format.",
            // to print the error
            error: parseData.error
        })
        return;
    }

    let errorThrown = false;

    try{
        //password hasing
        const hashedPassword = await bcrypt.hash(password, 5);

        await UserModel.create({
            username,
            password: hashedPassword
        })
        // if the username already exist in the model, then it will trigger the catch function
    } catch(e) {
        res.status(409).json({
            messsage: "Username already exist."
        })
        errorThrown = true;
    }

    if(!errorThrown) {
        res.status(200).json({
            message: "You are signed in."
        })
    }
});

app.post("/api/v1/signin", async (req, res) => {
    const{ username, password } = req.body;
    // checking whether the entered username exist in db or not
    const userExist = await UserModel.findOne({
        username: username
    })

    if(!userExist) {
        res.status(403).json({
            message: "username does not exist."
        })
        return;
    }
    //    // verifying enterd password with hashed password
    const passwordMatched = await bcrypt.compare(password, userExist.password);

    if(passwordMatched) {
        const token = jwt.sign({
            // creating token using unique value(ObjectId)
            id: userExist._id.toString()
        }, process.env.JWT_USER_SECRET);

        res.json({
            token: token
        })
    } else {
        res.status(403).json({
            message: "Wrong password."
        })
    }
});

app.post("/api/v1/content", (req, res) => {
    
})

app.get("/api/v1/content", (req, res) => {
    
})

app.post("/api/v1/brain/share", (req, res) => {
    
})

app.get("/api/v1/brain/:shareLink", (req, res) => {
    
})