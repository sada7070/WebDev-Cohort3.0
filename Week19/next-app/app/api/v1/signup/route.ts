import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    // extracting body came from FE
    const data = await req.json();

    console.log(data);

    return NextResponse.json({
        message: "You are signed up."
    })
}