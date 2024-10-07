require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin");
const app = express();
app.use(express.json());

app.use("/api/v1/user", userRouter);
app.use("/api/v1/course", courseRouter);
app.use("/api/v1/admin", adminRouter);

async function main() {
    // passwords/URLs and other important content will be imported from the '.env' file. eg -> "process.env.PORT"
    // connecting to db should be async, so that if the db fails backend will not be up.
    await mongoose.connect(process.env.DB_connection_string)
    app.listen(process.env.PORT);
    console.log("listening on port ****");
}

main();