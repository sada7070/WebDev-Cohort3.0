import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

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