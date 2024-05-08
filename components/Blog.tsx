import { getBlog } from "@/app/actions/blog";
import { useEffect, useState } from "react";

export default function Blog({blogId} : {blogId: string}) {
    // Assume blogData contains the content fetched from the backend
    const [blog, setBlog] = useState({title : "", content: ""});

    async function fetchBlog(){
        const response = await getBlog(blogId);
        if(response) setBlog(response);
        console.log(response);
    }

    useEffect(()=>{
        fetchBlog();
    }, [])

    return (
        <div className="flex justify-center">
            <div className="my-20 w-1/2 bg-white p-4">
                <div className="text-4xl font-extrabold">
                    {blog ? blog.title : "lorem"}
                </div>
                <div className="pt-4 text-xl">
                    Author name
                </div>
                <div className="text-sm text-gray-800">
                    5 min read
                </div>
                <div className="py-4 flex justify-center">
                    <img className="w-2/3" src="/vercel-logo.png" alt="" />
                </div>
                <div className="py-6">
                    <p className="font-serif text-gray-900 text-xl">
                        {blog.content? blog.content: "lorem" }
                    </p>
                </div>
                <div className="font-semibold text-2xl">
                    Written by Author 
                </div>
            </div>
        </div>
    );
}
