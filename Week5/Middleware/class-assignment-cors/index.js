/*
cors - Cross origin resource sharing

*Cross-Origin Resource Sharing (CORS)** is a security feature implemented by web browsers that controls how resources on a web server can 
be requested from another domain. It's a crucial mechanism for managing `cross-origin` requests and ensuring secure interactions between 
 `different origins` on the web.
*/

const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json())
app.use(cors())

// you can restrict domains which can access the backend by adding the domain names inside the cors function
//if you not mention any domain,like in this case, any domain can access the backend NOW.
// or if the frontend and backend hosted in the same server(including ports) there is no need for cors.

app.post("/sum", function(req, res) {
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    res.json({
        ans: a + b
    })
})

app.listen(3000);