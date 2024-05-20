"use client"

import { signin } from "@/app/actions/user";
import { userAtom } from "@/app/atoms/userAtom";
import { log } from "console";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useRecoilState } from "recoil";



export default function Login(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const router = useRouter();

    async function onclickHandler(){
        const response = await signIn("credentials",{
            username: username,
            password: password,
            redirect: false
        })
        console.log("inside signin handler");
        if(response?.status==200) router.push('/blogs')
        else alert('Wrong Credentials');
    }

    return <div className="bg-gray-400 flex justify-center h-screen">
        <div className="flex flex-col justify-center">
            <div className="bg-black w-80 h-max text-center rounded-lg p-4 ">
                <div className="text-2xl my-4 text-white">
                    Login
                </div>
                <div className="my-4 text-left">
                    <div className="text-white">Username</div>
                    <div>
                        <input onChange={(e)=>setUsername(e.target.value)} className="rounded-sm w-full h-8 pl-1" type="text" placeholder="johndoe@example.com"></input>
                    </div>
                </div>
                <div className="my-4 text-left">
                    <div className="text-white">Password</div>
                    <div>
                        <input onChange={(e)=>setPassword(e.target.value)} className="rounded-sm w-full h-8 pl-1" type="text" placeholder="123456"></input>
                    </div>
                </div>
                <div className="my-4">
                    <button onClick={onclickHandler} className="bg-gray-400 hover:bg-gray-700 w-72 rounded-md h-8">Login</button>
                </div>
                <div className="text-white">
                    Dont have an account?
                    <Link href="/signup" className="ml-2 hover:text-green-500 underline"> Create one!</Link>
                </div>
            </div>
            
        </div>
    </div>
}