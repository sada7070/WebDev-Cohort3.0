import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

// the following code will insert value into the user table(no need to write raw query).
async function createUSer() {
    await client.user.create({
        data: {
            username: "Sada",
            password: "123",
            age: 22,
            city: "Gpet"
        }
    })
}

createUSer();