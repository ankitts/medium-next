"use client"

import { signup } from "@/app/actions/user";
import { userAtom } from "@/app/atoms/userAtom";
import { Cinzel } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useRecoilState } from "recoil";

export default function Signup(){

    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // const [user, setUser] = useRecoilState(userAtom);

    const router = useRouter();

    async function onclickHandler(){
        // console.log("clicked")
        const response = await signup(name, username, password);
        // console.log("signed up")
        if(response.token && response.id){
            localStorage.setItem("token", response.token);
            // setUser({
            //     username: username,
            //     name: name,
            //     id: response.id
            // })
            router.push('/blogs')
        }
        // console.log(response);
    }

    return <div className="bg-gray-400 flex justify-center h-screen">
        <div className="flex flex-col justify-center">
            <div className="bg-slate-950 w-80 h-max text-center rounded-lg p-4 ">
                <div className="text-2xl my-4 text-white">
                    Create an account.
                </div>
                <div className="my-4 text-left">
                    <div className="text-white">Name</div>
                    <div>
                        <input onChange={(e)=>setName(e.target.value)} className="rounded-sm w-full h-8 pl-1" type="text" placeholder="John Doe"></input>
                    </div>
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
                        <input onChange={(e)=>setPassword(e.target.value)}  className="rounded-sm w-full h-8 pl-1" type="text" placeholder="123456"></input>
                    </div>
                </div>
                <div className="my-4">
                    <button onClick={onclickHandler} className="bg-gray-400 hover:bg-gray-700 w-72 rounded-md h-8">Signup</button>
                </div>
                <div className="text-white">
                    Already have an account?
                    <Link href="/login" className="ml-2 hover:text-green-500 underline"> Sign in</Link>
                </div>
            </div>
            
        </div>
    </div>
}