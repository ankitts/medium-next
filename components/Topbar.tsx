"use client";
  
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Topbar() {

  const session = useSession(); 
  const router = useRouter();

  async function logoutHandler(){
    if(session.data) await signOut({redirect: false});
    router.push('/login')
  }
 
  return (
    <div className="bg-black p-4 flex justify-between">
      <div className="text-white text-2xl">
        <Link href="/blogs">CodeBlogs</Link>
      </div>
      <div className="flex">
        <div className="mx-4 text-white">
          <Link href="/write">Write</Link>
        </div>
        <div className="mx-4 text-white">
          <button
            onClick={() => {
              router.push('/yourblogs');
            }}
          >
            Your Blogs
          </button>
        </div>
        <div className="mx-4 text-red-500">
          <button onClick={logoutHandler}>{session.data? "Logout" : "Login"}</button>
        </div>
        <div className="mx-4 text-white">
          {session.data && session.data.user? session.data.user.name : ""}
        </div>
      </div>
    </div>
  );
}
