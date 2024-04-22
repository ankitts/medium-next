import Blogtile from "@/components/Blogtile";
import Link from "next/link";

export default function Blogs(){
    return <div className="py-10">
        <Link href="/blog"><Blogtile /></Link>   
        <Link href="/blog"><Blogtile /></Link>   
        <Link href="/blog"><Blogtile /></Link>   
        <Link href="/blog"><Blogtile /></Link>   
        <Link href="/blog"><Blogtile /></Link>   
    </div>
}