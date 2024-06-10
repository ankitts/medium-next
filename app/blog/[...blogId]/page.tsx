"use client"
import Blog from "@/components/Blog";
import { useRouter } from "next/router";

export default function BlogPage( {params }: { params: { blogId: string[] } }) {
    const blogId = params.blogId[0];

    return (
        <div className="bg-gray-100 min-h-screen py-10">
            {blogId && <Blog blogId={blogId} />}
        </div>
    );
}
