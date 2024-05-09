"use client"

import Blogtile from "@/components/Blogtile";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getMyBlogs } from "../actions/blog";
import { userAtom } from "../atoms/userAtom";
import { useRecoilState } from "recoil";

export default function YourBlogs(){

    const [blogs, setBlogs] = useState([{id:0, title: "", content: "", author: {name: ""}}]);
    const [user, setUser] = useRecoilState(userAtom);
// 
    async function fetchBlogs() {
        console.log(user.id)
        const response = await getMyBlogs(user.id);
        if(response) setBlogs(response);
        console.log(response)
    }

    useEffect(()=>{
        fetchBlogs();
        
    }, [blogs]);
 
    return <div className="py-10">
        {blogs.map((blog)=>(
            <Link href={`/blog/${blog.id}`} ><Blogtile id={blog.id} title={blog.title} content={blog.content} author={blog.author.name}/></Link>
        ))}
    </div>
}