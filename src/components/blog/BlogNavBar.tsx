import Link from "next/link";

function BlogNavBar() {
    return (
        <nav className="flex  h-[135px] ">
        <div className="flex justify-between  items-center w-[1252px] h-[87px]  m-auto ">
        <div><img src="/blogLogo.png" alt="" /></div>
         <ul>
             <Link href={'/'} className="mr-4">Home</Link>
             <Link href={'/'} className="mr-4">About Us</Link>
             <Link href={'/services'} className="mr-4">Services</Link>
             <button className="border h-[52px] w-[174.43px] rounded-3xl"><Link href={'/'} className="mr-4">Get In Touch</Link></button>
             
         </ul>
         </div> 
     </nav>
    );
}

export default BlogNavBar;