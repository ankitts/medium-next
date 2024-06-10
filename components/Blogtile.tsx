import { deleteBlog } from "@/app/actions/blog";
import { useSession } from "next-auth/react";
import { useRecoilState } from "recoil";
import { useState } from "react";

export default function Blogtile({ id, title, content, author }: { id: number; title: string; content: string; author: string }) {
    const { data: session, status } = useSession();
    const [showFullContent, setShowFullContent] = useState(false);

    async function deleteHandler(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        event?.preventDefault();
        if (session) {
            const user = session.user as { id: string; name: string };
            const userId = parseInt(user.id);
            const response = await deleteBlog(id, userId);
            if (response) {
                alert("Blog Deleted");
                window.location.reload();
            } else {
                alert("You can delete only your blog.");
            }
        } else {
            alert("You need to be logged in to delete any blog.");
        }
    }

    return (
        <div className="bg-white rounded-md shadow-md p-4 my-6">
            <div className="flex items-center">
                <div className="mr-4 w-1/6">
                    <img className="h-full rounded-md" src="/vercel-logo.png" alt="no image" />
                </div>
                <div className="w-5/6">
                    <div className="flex justify-between mb-4">
                        <h2 className="text-xl font-bold">{title}</h2>
                        {session && (
                            <button onClick={deleteHandler} className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600">
                                Delete
                            </button>
                        )}
                    </div>
                    <div className="text-gray-800 mb-4">{author}</div>
                    <div className="text-gray-700">{showFullContent ? content : content.slice(0, 500)}</div>
                    {content.length > 500 && (
                        <button
                            onClick={() => setShowFullContent(!showFullContent)}
                            className="text-indigo-600 mt-2 focus:outline-none hover:text-indigo-800"
                        >
                            {showFullContent ? "Show less" : "Read more"}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
