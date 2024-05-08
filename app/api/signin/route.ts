import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const body = await req.json();
    console.log(body);

    const client = new PrismaClient();
    const user = await client.user.findUnique({
        where: {
            username: body.username,
            password: body.password
        }
    })

    if(!user){
        return NextResponse.json({message: "User doesn't exist"})
    }

    return NextResponse.json({message: "Logged In"})
}