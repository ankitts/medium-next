"use client"
import Blogtile from "@/components/Blogtile";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getMyBlogs } from "../actions/blog";
import { useSession } from "next-auth/react";

export default function YourBlogs() {
    const [blogs, setBlogs] = useState([{ id: 0, title: "", content: "", author: { name: "" } }]);
    const { data: session, status } = useSession();

    async function fetchBlogs(userId: number) {
        const response = await getMyBlogs(userId);
        if (response) setBlogs(response);
        else alert("Error fetching blogs");
    }

    useEffect(() => {
        if (session) {
            const user = session.user as { id: string; name: string };
            const userId = parseInt(user.id);
            fetchBlogs(userId);
        } else if (status === "loading") {
            // Session is being fetched
        } else {
            alert("You are not logged in.");
        }
    }, [session]);

    return (
        <div className="bg-gray-100 min-h-screen py-10">
            <div className="max-w-5xl mx-auto">
                {blogs.map((blog) => (
                    <Link href={`/blog/${blog.id}`} key={blog.id} className="block mb-6 hover:bg-white">
                            <Blogtile id={blog.id} title={blog.title} content={blog.content} author={blog.author.name} />
                    </Link>
                ))}
            </div>
        </div>
    );
}
