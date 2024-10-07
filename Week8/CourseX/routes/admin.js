const { Router } = require("express");
const adminRouter = Router();
// importing adminModel from db
const { adminModel, courseModel } = require("../db");
const { z } = require("zod");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { adminMiddleware } = require("../middleware/admin")

adminRouter.post("/signup", async function(req, res) {
    const { email, password, firstName, lastName } = req.body;

    // input validation using zod
    const requiredBody = z.object({
        email: z.string().email(),
        password: z.string(),
        firstName: z.string(),
        lastName: z.string()
    })
    const parseData = requiredBody.safeParse(req.body);

    if(!parseData.success) {
        return res.status(422).json({
            message: "Incorrect format.",
            // printing the error
            error: parseData.error
        })
    }


    try{
        const hashedPassword = await bcrypt.hash(password, 5);

        await adminModel.create({
            email,
            password: hashedPassword,
            firstName,
            lastName
        })

        return res.status(200).json({
            message: "You are signed in."
        })
    } catch(e) {
        return res.status(409).json({
            message: "Email already exist."
        })
    }
})

adminRouter.post("/signin", async function(req, res) {
    const { email, password } = req.body;

    // verifying email
    const response = await adminModel.findOne({
        email: email
    })

    if(!response) {
        return res.status(403).json({
            message: "User does not exist."
        })
    }

        // verifying password
    const passwordMatched = await bcrypt.compare(password, response.password);

    if(passwordMatched) {
        const token = jwt.sign({
            id: response._id.toString()
        }, process.env.JWT_ADMIN_SECRET)

        res.json({
            token: token
        })
    } else{
        res.status(403).json({
            message: "Incorrect password."
        })
    }
}); 

// creating a course
adminRouter.post("/course", adminMiddleware, async function(req, res) {
    const creatorId = req.adminId;

    const { title, description, price, imageUrl } = req.body;

    const course = await courseModel.create({
        title,
        description,
        price,
        imageUrl,
        creatorId
    })

    res.json({
        message: "course created",
        courseId: course._id
    })
})

// updating the  course
adminRouter.put("/course", adminMiddleware, async function(req, res) {
    const creatorId = req.adminId;

    const { title, description, price, imageUrl, courseId } = req.body;

    const course = await courseModel.updateOne({
        // checking the course which want to be updated
        _id: courseId,
        // verifying the course creator so that they can only update their own courses
        creatorId: creatorId
    }, {
        title,
        description,
        price,
        imageUrl,
    })

    res.json({
        message: "Course updated",
        courseId: course._id
    })
})

adminRouter.get("/course/bulk", adminMiddleware, async function(req, res) {
    const creatorId = req.adminId;

    const courses = await courseModel.find({
        // verifying the course creator so that they can only update their own courses
        creatorId: creatorId
    })

    res.json({
        message: "Displaying all courses",
        courses
    })
})

module.exports = {
    adminRouter: adminRouter
}