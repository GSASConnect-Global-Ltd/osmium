import BlogHeroText from "./BlogHeroText";
import BlogNavBar from "./BlogNavBar";

function BlogTop() {
    return (
        <div className="h-[503px] bg-[#0C0E12] text-white ">
        <BlogNavBar/>
        <BlogHeroText/>
    </div>
    );
}

export default BlogTop;