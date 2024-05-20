"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="bg-gray-400 flex justify-center h-screen">
      <div className="flex flex-col justify-center">
        <div>
          <div className="my-8">
            <Link href="/login">
              <div className="bg-slate-950 w-80 h-max text-center text-white rounded-lg p-4 cursor-pointer" onClick={() => router.push('/login')}>
                Log in to your account
              </div>
            </Link>
          </div>
          <div>
            <Link href="/signup">
              <div className="bg-slate-950 w-80 h-max text-center text-white rounded-lg p-4 cursor-pointer" onClick={() => router.push('/signup')}>
                Create new account
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
