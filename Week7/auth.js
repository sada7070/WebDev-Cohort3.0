const jwt = require("jsonwebtoken");
const JWT_SECRET = "sadashivamurhtysp";

function auth(req, res, next) {
    // fetching the token
    const token = req.headers.token;

    // veryfing the token
    const decodedData = jwt.verify(token, JWT_SECRET);

    if(decodedData) {
        req.userId = decodedData.id;
        next();
    } else {
        req.status(403).json({
            message: "Incorrect credentials"
        })
    }
}

module.exports = {
    auth,
    JWT_SECRET
};