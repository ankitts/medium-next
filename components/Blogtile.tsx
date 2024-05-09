"use client"

import { deleteBlog } from "@/app/actions/blog"
import { userAtom } from "@/app/atoms/userAtom"
import { useRecoilState } from "recoil";

export default function Blogtile({id, title, content, author}: {id: number, title: string, content: string, author: string}){
    
    const [user, setUser] = useRecoilState(userAtom);

    async function deleteHandler(event: React.MouseEvent<HTMLButtonElement, MouseEvent>){
        event?.preventDefault();

        const response = await deleteBlog(id, user.id);
        if(response){
            alert("Blog Deleted")
        }
        else{
            alert("You can delete only your blog.")
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