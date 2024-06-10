"use client"
import { writeBlog } from "@/app/actions/blog";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function WriteBlog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { data: session, status } = useSession();
  const router = useRouter();

  async function onclickHandler() {
    if (!title && !content) {
      alert("Title or Content cannot be empty");
      return;
    }

    if (session) {
      const user = session.user as { id: string, name: string };
      console.log(user)
      const id = parseInt(user?.id);
      const response = await writeBlog(title, content, id);
      router.push('/blogs');
    } else {
      alert('You need to be logged in to publish your blog.')
    }
  }

  return (
    <div className="flex justify-center pt-20 pb-10">
      <div className="w-1/2 bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-6">Write a blog...</h1>
        <div className="my-4 text-left">
          <label htmlFor="title" className="text-lg mb-1 block">Title</label>
          <input
            id="title"
            onChange={(e) => setTitle(e.target.value)}
            className="rounded-md w-full h-10 pl-3 border border-gray-300"
            type="text"
            placeholder="My first blog"
          />
        </div>
        <div className="my-4 text-left">
          <label htmlFor="content" className="text-lg mb-1 block">Content</label>
          <textarea
            id="content"
            onChange={(e) => setContent(e.target.value)}
            className="rounded-md w-full h-80 pl-3 pt-3 font-serif border border-gray-300"
            placeholder="Write your blog content here..."
          />
        </div>
        <div className="">
          <button onClick={onclickHandler} className="w-full bg-gray-800 text-white hover:bg-gray-700 h-10 rounded-lg">Publish</button>
        </div>
      </div>
    </div>
  );
}
