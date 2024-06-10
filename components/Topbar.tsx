"use client";
  
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Topbar() {
  const session = useSession(); 
  const router = useRouter();

  async function logoutHandler() {
    if (session.data) await signOut({ redirect: false });
    router.push('/login');
  }
 
  return (
    <div className="bg-gray-800 p-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-white text-2xl font-bold">
        <Link href="/blogs">
          <span className="cursor-pointer hover:text-gray-300">CodeBlogs</span>
        </Link>
      </div>

      {/* Navigation */}
      <div className="flex items-center">
        {/* Write Button */}
        <div className="mx-4 text-white">
          <Link href="/write">
            <span className="cursor-pointer hover:text-gray-300">Write</span>
          </Link>
        </div>

        {/* Your Blogs Button */}
        <div className="mx-4 text-white">
          <span
            onClick={() => router.push('/yourblogs')}
            className="cursor-pointer hover:text-gray-300"
          >
            Your Blogs
          </span>
        </div>

        {/* Logout/Login Button */}
        <div className="mx-4">
          <span
            onClick={logoutHandler}
            className={`text-white cursor-pointer ${
              session.data ? 'hover:text-red-500' : 'hover:text-gray-300'
            }`}
          >
            {session.data ? 'Logout' : 'Login'}
          </span>
        </div>

        {/* User Name */}
        <div className="mx-4 text-white">
          {session.data && session.data.user ? session.data.user.name : ""}
        </div>
      </div>
    </div>
  );
}
