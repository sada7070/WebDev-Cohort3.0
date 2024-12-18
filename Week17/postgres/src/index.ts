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

        // 'RETURNING id' is to return the id number.rows[0].id
        const userInsertQuery = `insert into users (username, email, password) values($1, $2, $3) RETURNING id;`
        // inserting values to the 2nd table by creating relationship with the first table using 'userId'
        const addressesInsertQuery = `insert into addresses (city, country, street, pincode, user_id) values($1, $2, $3, $4, $5)`

        /*
            What if one of the queries (address query for example) fails? 
            This would require 'transactions' in SQL to ensure either both the user information and address goes in, or neither does
        */
       // transaction bigins
        await pgClient.query("BEGIN");

        const userResponse = await pgClient.query(userInsertQuery, [username, email, password]);
        // extracting user_id from users table
        const userId = userResponse.rows[0].id;
        await new Promise(x => setInterval(x, 100000));     // trying to partially run querry using setInterval
        const addressesResponse = await pgClient.query(addressesInsertQuery, [city, country, street, pincode, userId]);

        // finishing transaction
        await pgClient.query("COMMIT");

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

// JOINS in SQL

app.get("/metadata", async (req, res) => {
    const id = req.query.id;
    const query =   `SELECT u.id, u.username, u.email, a.city, a.country, a.street, a.pincode
                     FROM users u JOIN addresses a
                     ON u.id = a.user_id
                     WHERE u.id  = $1;`
    const response = await pgClient.query(query, [id]);

    res.json({
        response: response.rows
    })
})

app.listen(process.env.PORT);