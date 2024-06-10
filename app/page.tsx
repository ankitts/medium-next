"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="bg-gray-800 flex justify-center items-center h-screen">
      <div className="flex flex-col justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-semibold text-gray-100 mb-8">CodeBlogs</h1>
        </div>
        <div className="mb-8">
          <Link href="/login">
            <div className="bg-white text-black w-80 h-12 text-center rounded-lg cursor-pointer hover:bg-gray-700 hover:text-white transition duration-300 flex justify-center items-center" onClick={() => router.push('/login')}>
              <span className="text-base">Log in to your account</span>
            </div>
          </Link>
        </div>
        <div>
          <Link href="/signup">
            <div className="bg-white text-black w-80 h-12 text-center rounded-lg cursor-pointer hover:bg-gray-700 hover:text-white transition duration-300 flex justify-center items-center" onClick={() => router.push('/signup')}>
              <span className="text-base">Create new account</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
