"use client"

import { deleteBlog } from "@/app/actions/blog"
import { userAtom } from "@/app/atoms/userAtom"
import { useSession } from "next-auth/react";
import { useRecoilState } from "recoil";

export default function Blogtile({id, title, content, author}: {id: number, title: string, content: string, author: string}){
    
    // const [user, setUser] = useRecoilState(userAtom);
    const session  = useSession();

    async function deleteHandler(event: React.MouseEvent<HTMLButtonElement, MouseEvent>){
        event?.preventDefault();
        if(session.data){
            const userId = parseInt(session.data?.user.id);
            const response = await deleteBlog(id, userId);
            if(response){
                alert("Blog Deleted");
                window.location.reload();
            }
            else{
                alert("You can delete only your blog.")
            }
        }
        else{
            alert("You need to be logged in to delete any blog.")
        }  
    }
    
    return <div className="bg-white flex justify-center mt-6">
        <div className="flex justify-center bg-white w-5/6 h-56 rounded-md p-4 border-2 border-gray-300">
            <div className="mr-4 w-1/6">
                <img className="h-full rounded-md" src="/vercel-logo.png" alt="no image" />
            </div>
            <div className="w-5/6">
                <div className="flex justify-between">
                    <div className="text-3xl font-bold">
                        {title}
                    </div>
                    <div>
                        <button onClick={deleteHandler} className="p-2 rounded-md bg-black text-white border-gray-500 border-2 hover:bg-red-500 ">Delete</button>
                    </div>
                </div>
                <div className="flex justify-between text-gray-800 pr-4">
                    <div>
                        {author}
                    </div>
                    <div>
                        5 min read
                    
                </div>
                </div>
                <div className="mt-4">
                    {content.slice(0, 500)}
                </div>
            </div>
        </div>
    </div>
}