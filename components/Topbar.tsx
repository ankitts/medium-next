"use client";

import Link from "next/link";

export default function Topbar() {
  return (
    <div className="bg-black p-4 flex justify-between">
      <div className="text-white text-lg">
        <Link href="/blogs">CodeBlogs</Link>
      </div>
      <div className="flex">
        <div className="mx-4 text-white">
          <Link href="/write">Write</Link>
        </div>
        <div className="mx-4 text-white">
          <button
            onClick={() => {
              alert("clicked");
            }}
          >
            Your Blogs
          </button>
        </div>
        <div className="mx-4 text-red-500">
          <button>Logout</button>
        </div>
        
      </div>
    </div>
  );
}
