import Link from "next/link";

function NavBar(){
    return (
        <div className="bg-orange-700 space-y-2 flex  flex-col items-center p-5 sm:flex-row sm:justify-around ">
       <Link href="/" className="font-bold font-serif">Muhammad Hassaan Arain</Link>
          <nav className="space-x-9 font-bold">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/blog">Blog</Link>
          </nav>
        </div>
    
    )
   
};
export default NavBar;