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
      const user = session.user as {id: string, name: string};
      console.log(user)
      const id = parseInt(user?.id);
      const response = await writeBlog(title, content, id);
      router.push('/blogs');
    }
    else {
      alert('You need to be logged in to publish your blog.')
    }


  }

  return (
    <div className="flex justify-center pt-20 pb-10">
      <div className="w-1/2 bg-black p-6 rounded-md">
        <div className="text-3xl text-white font-bold">
          Write a blog...
        </div>
        <div className="my-4 text-left">
          <div className="text-white text-xl mb-1">Title</div>
          <div>
            <input
              onChange={(e) => setTitle(e.target.value)}
              className="rounded-md w-full h-8 pl-2 border-2 border-gray-400"
              type="text"
              placeholder="My first blog"
            ></input>
          </div>
        </div>
        <div className="my-4 text-left">
          <div className="text-white text-xl mb-1">Content</div>
          <div>
            <textarea
              onChange={(e) => setContent(e.target.value)}
              className="rounded-md w-full h-80 pl-2 font-serif  border-2 border-gray-400"
              placeholder="johndoe@example.com"
            ></textarea>
          </div>
        </div>
        <div className="">
          <button onClick={onclickHandler} className="w-full bg-white text-black hover:bg-green-500 h-8 rounded-lg">Publish</button>
        </div>
      </div>
    </div>
  );
}
