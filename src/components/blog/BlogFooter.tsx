import Link from "next/link";
import { LinkedIn, Twitter, Facebook } from "../icons";


function BlogFooter() {
    return (
      <div>
        <div className="w-[1280px] h-[160px]">
            <div className="flex">
          <div className="border flex">
            <img src="/sterlingLogo.png" alt="" className="" />
            <p className="text-xl font-bold ">Sterling</p>
          </div>
          <div className="flex">
            <Link href={"/"}>About</Link>
            <Link href={"/"}>Service</Link>
            <Link href={"/"}>Work</Link>
            <Link href={"/"}>Contact</Link>
          </div>
          <div className="flex">
            <a href="#">
              <LinkedIn />
            </a>
            <a href="#">
              <Twitter />
            </a>
            <a href="#">
              <Facebook />
            </a>
          </div>
          </div>
        </div>
      </div>
    );
}

export default BlogFooter;