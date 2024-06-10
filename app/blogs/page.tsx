"use client";

import Blogtile from "@/components/Blogtile";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getBlogs } from "../actions/blog";

export default function Blogs() {
    const [blogs, setBlogs] = useState([{ id: 0, title: "", content: "", author: { name: "" } }]);

    async function fetchBlogs() {
        const response = await getBlogs();
        if (response) setBlogs(response);
    }

    useEffect(() => {
        fetchBlogs();
    }, []);

    return (
        <div className="bg-gray-100 min-h-screen py-10">
            <div className="max-w-5xl mx-auto">
                {blogs.map((blog) => (
                    <Link href={`/blog/${blog.id}`} key={blog.id}>
                        <div className="mb-6 cursor-pointer">
                            <Blogtile id={blog.id} title={blog.title} content={blog.content} author={blog.author.name} />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
