import BlogFooter from "@/components/blog/BlogFooter";
import BlogPosts from "@/components/blog/BlogPosts";
import BlogTop from "@/components/blog/BlogTop";
import { AppLayout } from "@/layouts";
import { PageHeader } from "@/components/partials";


function blog() {
    return (
        <div>
           <AppLayout>
            <PageHeader heading="Blog" body="" cta="Reach Out To Us" link="/contact"/>
           <BlogPosts/>
           </AppLayout>

        </div>
    );
}

export default blog;