"use client"

import { signup } from "@/app/actions/user";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Signup() {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const router = useRouter();

    async function onClickHandler() {
        const signupRes = await signup(name, username, password);
        
        if (signupRes.status === 200) {
            const signinRes = await signIn("credentials", {
                username: signupRes.user?.username,
                password: signupRes.user?.password,
                redirect: false,
            });
            if (signinRes?.status === 200) {
                console.log(signinRes);
                router.push('/blogs');
            } else {
                alert('Error while signing in!');
            }
        } else {
            alert('Error while signing up!');
        }
    }

    return (
        <div className="bg-gray-800 flex flex-col justify-center items-center h-screen">
            <h1 className="text-5xl font-semibold text-gray-100 mb-8">CodeBlogs</h1>
            <div className="flex flex-col justify-center bg-white shadow-md rounded-lg p-8 w-96">
                <div className="text-3xl mb-8 text-center text-gray-800 font-semibold">
                    Create an Account
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2">Name</label>
                    <input 
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500" 
                        type="text" 
                        placeholder="John Doe" 
                    />
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
                    Signup
                </button>
                <div className="text-gray-700 text-center mt-6">
                    Already have an account?
                    <Link href="/login" className="text-indigo-500 hover:text-indigo-700 underline ml-2">
                        Sign in
                    </Link>
                </div>
            </div>
        </div>
    );
}
