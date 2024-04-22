import Link from "next/link";

export default function Login(){
    return <div className="bg-gray-400 flex justify-center h-screen">
        <div className="flex flex-col justify-center">
            <div className="bg-slate-950 w-80 h-max text-center rounded-lg p-4 ">
                <div className="text-2xl my-4 text-white">
                    Login
                </div>
                <div className="my-4 text-left">
                    <div className="text-white">Username</div>
                    <div>
                        <input className="rounded-sm w-full h-8 pl-1" type="text" placeholder="johndoe@example.com"></input>
                    </div>
                </div>
                <div className="my-4 text-left">
                    <div className="text-white">Password</div>
                    <div>
                        <input className="rounded-sm w-full h-8 pl-1" type="text" placeholder="123456"></input>
                    </div>
                </div>
                <div className="my-4">
                    <button className="bg-gray-400 hover:bg-gray-700 w-72 rounded-md h-8">Login</button>
                </div>
                <div className="text-white">
                    Dont have an account?
                    <Link href="/signup" className="ml-2 hover:text-green-500 underline"> Create one!</Link>
                </div>
            </div>
            
        </div>
    </div>
}