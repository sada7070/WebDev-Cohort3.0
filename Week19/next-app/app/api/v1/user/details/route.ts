// creating file named 'route' to use route handelers(it is a backend route handler(creating our own backend))

import { NextResponse } from "next/server";

export function GET() {
    return NextResponse.json({
        name: "Sada",
        email: "sada@gmial.com"
    })
}

export function POST() {
    return NextResponse.json({
        name: "Sada",
        email: "sada@gmial.com"
    })
}

export function PUT() {
    return NextResponse.json({
        name: "Sada",
        email: "sada@gmial.com"
    })
}
