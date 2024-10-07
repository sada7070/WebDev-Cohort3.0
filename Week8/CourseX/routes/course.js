const { Router } = require("express");
const courseRouter = Router();
// importing courseModel from database
const { courseModel } = require("../db");
const { purchaseModel } = require("../db");
const { userMiddleware } = require("../middleware/user");

courseRouter.post("/purchase", userMiddleware, async function(req, res) {
    const userId = req.userId;
    const courseId = req.body.courseId
    // you can add check here to see the user already purchased the course or not
    // should check that the user has actually paid the price

    await purchaseModel.create({
        userId,
        courseId
    })

    res.json({
        message: "you have successfully bought the course."
        // you should have contnent table in db and the purchased course should reflect here
    })
})

courseRouter.get("/preview", async function(req, res) {
    const courses = await courseModel.find({});
    res.json({
        courses
    })
})

module.exports = {
    courseRouter: courseRouter
}