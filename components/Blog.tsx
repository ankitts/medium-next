import { getBlog } from "@/app/actions/blog";
import { useEffect, useState } from "react";

export default function Blog({ blogId }: { blogId: string }) {
    const [blog, setBlog] = useState({ title: "", content: "", author: { name: "" } });
    const [readTime, setReadTime] = useState(1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    async function fetchBlog() {
        try {
            const response = await getBlog(blogId);
            if (response) {
                setBlog(response);
                setReadTime(Math.max(1, Math.ceil(response.content.length / 1000)));
                setLoading(false);
            } else {
                setError("Blog not found.");
                setLoading(false);
            }
        } catch (error) {
            setError("Error fetching blog.");
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchBlog();
    }, []);

    if (loading) {
        return <div className="flex justify-center items-center h-screen">Loading...</div>;
    }

    if (error) {
        return <div className="flex justify-center items-center h-screen text-red-500">{error}</div>;
    }

    return (
        <div className="flex justify-center">
            <div className="my-20 w-2/3 bg-white p-8 shadow-md rounded-lg">
                <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
                <div className="flex items-center mb-4">
                    <div>
                        <span className="text-gray-600 mr-2">By {blog.author.name}</span>
                    </div>
                    <div>
                        <span className="text-gray-600">{readTime} min read</span>
                    </div>
                </div>
                <div className="flex justify-center mb-6">
                    <img src="/vercel-logo.png" alt="" className="w-1/3 rounded-lg" />
                </div>
                <div className="text-gray-800 leading-relaxed">{blog.content}</div>
            </div>
        </div>
    );
}
