export default function WriteBlog() {
  return (
    <div className="flex justify-center pt-20 pb-10">
      <div className="w-1/2 bg-slate-400 border-2 border-gray-400 p-6 rounded-md">
        <div className="text-3xl font-bold">
            Write a blog...
        </div>
        <div className="my-4 text-left">
          <div className="text-black text-xl mb-1">Title</div>
          <div>
            <input
              className="rounded-md w-full h-8 pl-2 border-2 border-gray-400"
              type="text"
              placeholder="My first blog"
            ></input>
          </div>
        </div>
        <div className="my-4 text-left">
          <div className="text-black text-xl mb-1">Content</div>
          <div>
            <textarea
              className="rounded-md w-full h-80 pl-2 font-serif  border-2 border-gray-400"
              placeholder="johndoe@example.com"
            ></textarea>
          </div>
        </div>
        <div className="">
            <button className="w-full bg-black text-white hover:text-green-500 h-8 rounded-lg">Publish</button>
        </div>
      </div>
    </div>
  );
}
