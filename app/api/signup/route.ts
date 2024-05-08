import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const body = await req.json();

    const client = new PrismaClient();

    const existingUser = await client.user.findUnique({
        where:{
            username: body.username
        }
    })

    if(existingUser){
        return NextResponse.json({message: "User already exists"})
    }

    const user = await client.user.create({
        data:{
            name: body.name,
            username: body.username,
            password: body.password
        }
    })
    console.log(user.id);

    return NextResponse.json({message: "Signed up"});
}