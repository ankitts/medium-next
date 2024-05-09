"use server"

import prisma from "@/prisma/db";

export async function getBlogs(){
    

    const blogs = await prisma.blog.findMany({
        include: {
            author: {
                select: {
                    name: true
                }
            }
        }
    });
    // console.log(blogs[0])
    return blogs;
}

export async function getMyBlogs(userId: number){
    

    const blogs = await prisma.blog.findMany({
        include: {
            author: {
                select: {
                    name: true
                }
            }
        },
        where: {
            userId: userId
        }
    });
    // console.log(blogs[0])
    return blogs;
}

export async function getBlog(blogId: string){
    
    const id = parseInt(blogId);

    const blog = await prisma.blog.findUnique({
        include: {
            author: {
                select: {
                    name: true
                }
            }
        },
        where: {
            id: id
        }
    })

    return blog;
}


export async function writeBlog(title: string, content:string, userId: number) {
    

    const blog = await prisma.blog.create({
        data:{
            title: title,
            content: content,
            userId: userId
        }
    })

    return blog;
}


export async function deleteBlog(blogId: number, userId: number){
    

    const blog = await prisma.blog.findUnique({
        where: {
            id: blogId
        }
    })

    if(blog?.userId != userId) return false;


    const deleteBlog = await prisma.blog.delete({
        where: {
            id: blogId,
            userId: userId
        }
    })

    return true;
}