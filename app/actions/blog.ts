"use server"

import { PrismaClient } from "@prisma/client";

export async function getBlogs(){
    const client = new PrismaClient();

    const blogs = await client.blog.findMany();
    console.log(blogs)
    return blogs;
}

export async function getBlog(blogId: string){
    const client = new PrismaClient();
    const id = parseInt(blogId);

    const blog = await client.blog.findUnique({
        where: {
            id: id
        }
    })

    return blog;
}


export async function writeBlog(title: string, content:string) {
    const client = new PrismaClient();

    const blog = await client.blog.create({
        data:{
            title: title,
            content: content
        }
    })

    return blog;
}