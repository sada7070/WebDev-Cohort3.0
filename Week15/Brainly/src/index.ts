import express from "express";
import jwt from "jsonwebtoken";
import z from "zod";
import bcrypt from "bcrypt";
require('dotenv').config()
import { ContentMondel, UserModel } from "./db";
import { userMiddleware } from "./middleware";

const app = express();
app.use(express.json());

app.post("/api/v1/signup", async (req, res) => { 
    const{ username, password } = req.body;
    
    // input validation using zod
    const requiredBody = z.object({
        username: z.string().min(3).max(15),
        password: z.string().min(3).max(20),
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
            message: "Username does not exist."
        })
        return;
    }
    // verifying enterd password with hashed password
    const passwordMatched = await bcrypt.compare(password, (userExist.password as string));    // using 'type assertion' to convert userExist.password to type string

    if(passwordMatched) {
        const token = jwt.sign({
            // creating token using unique value(ObjectId)
            id: userExist._id
        }, process.env.JWT_USER_SECRET!);

        res.json({
            token: token
        })
    } else {
        res.status(403).json({
            message: "Wrong password."
        })
    }
});

app.post("/api/v1/content", userMiddleware, async (req, res) => {
    const { link, title } = req.body;
    await ContentMondel.create({
        link,
        title,
        // @ts-ignore
        userId: req.userId,
        tags: []
    })

    res.json({
        message: "Content added."
    })
})

app.get("/api/v1/content", userMiddleware, async (req, res) => {
    // @ts-ignore
    const userId = req.userId;
    const content = await ContentMondel.find({
        userId: userId
    }).populate("userId", "username")                           // using references/relationship to get username along with the content.
    res.json({
        content
    })
})

app.delete("/api/v1/content",userMiddleware, async (req, res) => {
    const contentId = req.body.contentId;

    await ContentMondel.deleteMany({
        contentId,
        //@ts-ignore
        userId: req.userId
    })

    res.json({
        message: "Deleted"
    })
})

app.post("/api/v1/brain/share", (req,res) => {

})

app.get("/api/v1/brain/:shareLink", (req, res) => {
    
})

app.listen(process.env.PORT_NUM!);