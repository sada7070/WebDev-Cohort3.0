const { Router } = require("express");
const userRouter = Router();
// importing userModel from db
const { userModel, purchaseModel, courseModel } = require("../db");
const { z } = require("zod");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { userMiddleware } = require("../middleware/user");


userRouter.post("/signup", async function(req, res) {
    const { email, password, firstName, lastName } = req.body;

    // imput validation using zod
    const requiredBody = z.object({
        email: z.string().email(),
        password: z.string().min(8).max(20),
        firstName: z.string(),
        lastName: z.string()
    })
    const parseData = requiredBody.safeParse(req.body);

    if(!parseData.success) {
        return res.status(422).json({
            message: "Incorrect format.",
            // to print the error
            error: parseData.error
        })
    }

    let errorThrown = false;

    try{
        // password hashing
        const hashedPassword = await bcrypt.hash(password, 5);

        await userModel.create({
            email,
            password: hashedPassword,
            firstName,
            lastName
        })
    } catch(e) {                                                // if the email already exist in the model it will trigger the catch function
        res.status(409).json({
            message: "Email already exist." 
        })
        errorThrown = true;
    }

    if(!errorThrown) {
        res.status(200).json({
            message: "You are signed in."
        })
    }
});

userRouter.post("/signin", async function(req, res) {
    const { email, password } = req.body;

    // checking whether the entered email address exist in db or not
    const response = await userModel.findOne({
        email: email
    })

    if(!response) {
        return res.status(403).json({
            message: "user does not exist."
        })
    }

    // verifying enterd password with hashed password
    const passwordMatched = await bcrypt.compare(password, response.password);

    if(passwordMatched) {
        const token = jwt.sign({
            // creating token using unique value(ObjectId)
            id: response._id.toString()
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

userRouter.get("/purchases", userMiddleware, async function(req, res) {
    const userId = req.userId;

    const purchases = await purchaseModel.find({
        userId
    });

    // to get the details of the purchased courses
    const courseData = await courseModel.find({
        _id: { $in: purchases.map(x => x.courseId) }
    });

    res.json({
        purchases,
        courseData
    })
})

module.exports = {
    userRouter: userRouter
}