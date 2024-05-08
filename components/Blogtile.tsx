export default function Blogtile({title, content}: {title: string, content: string}){
    return <div className="bg-white flex justify-center mt-6">
        <div className="flex justify-center bg-white w-5/6 h-56 rounded-md p-4 border-2 border-gray-300">
            <div className="mr-4 w-1/6">
                <img className="h-full rounded-md" src="/vercel-logo.png" alt="no image" />
            </div>
            <div className="w-5/6">
                <div className="text-3xl font-bold">
                    {title}
                </div>
                <div className="flex justify-between text-gray-800 pr-4">
                    <div>
                        Author
                    </div>
                    <div>
                        5 min read
                    </div>
                </div>
                <div className="mt-4">
                    {content}
                </div>
            </div>
        </div>
    </div>
}