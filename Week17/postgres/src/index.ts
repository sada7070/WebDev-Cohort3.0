import { Client } from "pg";
import express from "express";
require('dotenv').config();

const app = express();
app.use(express.json());


const pgClient = new Client(process.env.DB_STRING);
pgClient.connect();

app.post("/signup", async (req, res) => {
    const { username, email, password, city, country, street, pincode } = req.body;
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
        const userInsertQuery = `insert into users (username, email, password) values($1, $2, $3) RETURNING id;`
        // 'RETURNING id' is to return the id number.rows[0].id
        const userResponse = await pgClient.query(userInsertQuery, [username, email, password]);

        const userId = userResponse.rows[0].id;

        // inserting values to the 2nd table by creating relationship with the first table using 'userId'
        const addressesInsertQuery = `insert into addresses (city, country, street, pincode, user_id) values($1, $2, $3, $4, $5)`
        const addressesResponse = await pgClient.query(addressesInsertQuery, [city, country, street, pincode, userId]);

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