"use client"
import Blog from "@/components/Blog";
import { useRouter } from "next/router";

export default function BlogPage( {params }: { params: { blogId: string[] } }) {
    // const router = useRouter();
    const blogId = params.blogId[0];
    console.log(blogId);

    return (
        <div>
            {blogId && <Blog blogId={blogId} />}
        </div>
    );
}
