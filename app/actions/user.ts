"use server"

// import { Prismaprisma } from "@prisma/prisma";

import prisma from "@/prisma/db";

import jwt from "jsonwebtoken";

const jwt_secret = "myjwtsecret";

export async function signup(name: string, username: string, password: string) {
    
    const existingUser = await prisma.user.findUnique({
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

    const user = await prisma.user.create({
        data: {
            name: name,
            username: username,
            password: password
        }
    });

    return {
        user: user,
        status: 200
    }

    // const token = jwt.sign({
    //     userId: user.id
    // }, jwt_secret)

    // return {
    //     token: token,
    //     id: user.id,
    //     status: 200,
    //     message: "signed up"
    // }
}

// export async function signin(username: string, password: string) {
    
    
//     const user = await prisma.user.findUnique({
//         where: {
//             username: username,
//             password: password
//         }
//     });

//     if(!user){
//         return {
//             token: "",
//             status: 411,
//             message: "user doesnt exist"
//         }
//     }

//     const token = jwt.sign({
//         userId: user.id
//     }, jwt_secret)

//     return {
//         token: token,
//         name: user.name,
//         id: user.id,
//         status: 200,
//         message: "signed in"
//     }
// }


// export async function getCurrentUser(token: string){
//     const payload = jwt.verify(token, jwt_secret) as { userId: number }
//     const userId = payload.userId
//     console.log("current User is" + userId)

//     const user = await prisma.user.findUnique({
//         where:{
//             id: userId
//         }
//     })
//     if(user) {
//         return {
//             id: user.id,
//             username: user.username,
//             name: user.name
//         }
//     }
//     else{
//         return {
//             id: 0,
//             username: "",
//             name: ""
//         }
//     }
        
// }