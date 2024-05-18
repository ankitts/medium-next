"use client";

import { userAtom } from "@/app/atoms/userAtom";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRecoilState } from "recoil";

export default function Topbar() {

  const [user, setUser] = useRecoilState(userAtom);

  function logoutHandler(){
    setUser({
      username: "",
      name: "",
      id: 0
    })
    localStorage.removeItem("token")
    router.push('/login')
  }
  
  const router = useRouter();

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
          <button onClick={logoutHandler}>Logout</button>
        </div>
        <div className="mx-4 text-white">
          {user ? user.name : ""}
        </div>
      </div>
    </div>
  );
}
