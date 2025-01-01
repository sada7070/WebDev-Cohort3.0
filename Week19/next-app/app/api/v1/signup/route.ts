import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prismaClient = new PrismaClient();

export async function POST(req: NextRequest) {
    // extracting body came from FE
    const data = await req.json();

    await prismaClient.user.create({
        data: {
            username: data.username,
            password: data.password
        }
    })

    return NextResponse.json({
        message: "You are signed up."
    })
}