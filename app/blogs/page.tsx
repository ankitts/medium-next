"use client"

import Blogtile from "@/components/Blogtile";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getBlogs } from "../actions/blog";

export default function Blogs(){

    const [blogs, setBlogs] = useState([{id:0, title: "", content: "", author: {name: ""}}]);

    async function fetchBlogs() {
        const response = await getBlogs();
        if(response) setBlogs(response);
        // console.log(response)
    }

    useEffect(()=>{
        
        fetchBlogs();
        
    }, []);
 
    return <div className="py-10">
        {blogs.map((blog)=>(
            <Link href={`/blog/${blog.id}`} ><Blogtile key={blog.id} id={blog.id} title={blog.title} content={blog.content} author={blog.author.name}/></Link>
        ))}
    </div>
}