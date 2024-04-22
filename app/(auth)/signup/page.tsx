import Link from "next/link";

export default function Signup(){
    return <div className="bg-gray-400 flex justify-center h-screen">
        <div className="flex flex-col justify-center">
            <div className="bg-slate-950 w-80 h-max text-center rounded-lg p-4 ">
                <div className="text-2xl my-4 text-white">
                    Create an account.
                </div>
                <div className="my-4 text-left">
                    <div className="text-white">Name</div>
                    <div>
                        <input className="rounded-sm w-full h-8 pl-1" type="text" placeholder="John Doe"></input>
                    </div>
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
                    <button className="bg-gray-400 hover:bg-gray-700 w-72 rounded-md h-8">Signup</button>
                </div>
                <div className="text-white">
                    Already have an account?
                    <Link href="/login" className="ml-2 hover:text-green-500 underline"> Sign in</Link>
                </div>
            </div>
            
        </div>
    </div>
}