"use client"
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    async function onClickHandler() {
        const response = await signIn("credentials", {
            username,
            password,
            redirect: false,
        });
        console.log("inside signin handler");
        if (response?.status === 200) router.push('/blogs');
        else alert('Wrong Credentials');
    }

    return (
        <div className="bg-gray-800 flex justify-center items-center h-screen">
            <div className="flex flex-col justify-center bg-white shadow-2xl rounded-lg p-8 w-96">
                <div className="text-3xl mb-8 text-center text-gray-800 font-semibold">
                    Login
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2">Username</label>
                    <input 
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500" 
                        type="text" 
                        placeholder="johndoe@example.com" 
                    />
                </div>
                <div className="mb-8">
                    <label className="block text-gray-700 font-medium mb-2">Password</label>
                    <input 
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500" 
                        type="password" 
                        placeholder="Enter your password" 
                    />
                </div>
                <button 
                    onClick={onClickHandler}
                    className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 transition duration-200"
                >
                    Login
                </button>
                <div className="text-gray-700 text-center mt-6">
                    Don&apos;t have an account?
                    <Link href="/signup" className="text-indigo-500 hover:text-indigo-700 underline ml-2">
                        Create one!
                    </Link>
                </div>
            </div>
        </div>
    );
}
