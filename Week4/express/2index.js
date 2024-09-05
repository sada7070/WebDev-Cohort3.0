const express = require("express");
const app = express();

let users = [{
    name: "sada",
    kidneys:[{
        healthy: false
    }]
}];

app.get("/", function(req, res) {
    const johnkedney = users[0].kidneys;
    const numberOfKidnet = kidneys.listen;
})

app.listen(3000);