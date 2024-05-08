"use server"

import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";

const jwt_secret = "myjwtsecret";

export async function signup(name: string, username: string, password: string) {
    
    const client = new PrismaClient();

    const existingUser = await client.user.findUnique({
        where: {
            username: username
        }
    })

    if(existingUser){
        return {
            token: "",
            status: 411,
            message: "user already exists"
        }
    }

    const user = await client.user.create({
        data: {
            name: name,
            username: username,
            password: password
        }
    });

    const token = jwt.sign({
        userId: user.id
    }, jwt_secret)

    return {
        token: token,
        status: 200,
        message: "signed up"
    }
}

export async function signin(username: string, password: string) {
    
    const client = new PrismaClient();
    const user = await client.user.findUnique({
        where: {
            username: username,
            password: password
        }
    });

    if(!user){
        return {
            token: "",
            status: 411,
            message: "user doesnt exist"
        }
    }

    const token = jwt.sign({
        userId: user.id
    }, jwt_secret)

    return {
        token: token,
        status: 200,
        message: "signed in"
    }
}