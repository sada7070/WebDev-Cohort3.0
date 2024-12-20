import { PrismaClient } from "@prisma/client";
import express from "express";

const app = express();
const client = new PrismaClient();

// expressifying prisma
// to get all users info
app.get("/users", async(req, res) => {
    const users = await client.user.findMany();
    res.json({
        users
    })
})

// to get specific user info including their todos
app.get("/todos/:id", async(req, res) => {
    const id = req.params.id;

    const user = await client.user.findFirst({
        where: {
            id: parseInt(id)
        },
        select: {
            todos: true,                            // getting todo info and user's name and id.
            id: true,
            username: true
            
        }
    })
    res.json({
        user
    })
})

app.listen(3000);

// the following code will insert value into the user table(no need to write raw query).
async function createUSer() {
    const user = await client.user.findFirst({
        where: {
            id: 1
        },
        include: {
            todos: true
        }
    })
    console.log(user);
}

createUSer();