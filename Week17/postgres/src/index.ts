import { Client } from "pg";
import express from "express";
require('dotenv').config();

const app = express();
app.use(express.json());


const pgClient = new Client(process.env.DB_STRING);
pgClient.connect();

app.post("/signup", async (req, res) => {
    const { username, email, password } = req.body;
    try{
        /*
            if someone inject data as below it will clear all of your data
            {
                "username": "ram",
                "email": "ram@gmial.com",
                "password": "123123');delete from users; insert into users(username, email, password) values('you', 'got', 'screwed"
            }
            then the only data present in table is 'you got screwed'.

            to overcome this we take inputs which are not appended to the  origianl query as shown below
        */
        const insertQuery = `insert into users (username, email, password) values($1, $2, $3);`
        const response = await pgClient.query(insertQuery, [username, email, password]);
        res.json({
            message: "You have signed up."
        })
    } catch(e) {
        console.log(e);
        res.json({
            message: "Unable to signin."
        })
    }
})



app.listen(process.env.PORT);