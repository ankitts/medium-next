"use client"

import Blogtile from "@/components/Blogtile";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getBlogs } from "../actions/blog";

export default function Blogs(){

    const [blogs, setBlogs] = useState([{id:0, title: "", content: ""}]);

    async function fetchBlogs() {
        const response = await getBlogs();
        if(response) setBlogs(response);
        console.log(response)
    }

    useEffect(()=>{
        
        fetchBlogs();
        
    }, []);
 
    return <div className="py-10">
        {blogs.map((blog)=>(
            <Link href={`/blog/${blog.id}`} ><Blogtile title={blog.title} content={blog.content}/></Link>
        ))}
    </div>
}