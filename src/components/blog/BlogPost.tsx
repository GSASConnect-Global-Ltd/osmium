
import Link from "next/link";

interface Post {
    _id: string;
    title: string;
    imageUrl: string;
    publishedAt: string;
    authorName: string;
    body:any;
  }
  
  interface BlogPostProps {
    posts: Post[];
  }


  const BlogPost: React.FC<BlogPostProps> = ({ posts }) => {
    const blogPosts= posts.map((post)=>{
        function getFormattedDate(date:string){
            const formattedDate=Intl.DateTimeFormat("en-US",{
                day:"numeric",
                year:"numeric",
                month:"long"
            }).format(new Date(date));
            return formattedDate;
        }

        
        return (
            <div className="w-[384px] h-[523px] pt-[24px] pr-[24px] pb-[32px] pl-[24px] shadow-xl mr-4" key={post._id}>
                <div className="">
                    <img src={post.imageUrl} alt="" className="w-[336px] h-[240]" height={336} width={240} />
                    <div className="mt-10">
                 <Link href={`/posts/${post._id}`}><p className="text-[#101828] text-2xl font-semibold"> {post.title}</p></Link>
                        <p className="text-[#667085] text-sm mt-4"></p>
                    </div>
                    <div className="mt-10">
                        <p className="text-sm text-[#101828] font-semibold">{post.authorName}</p>
                        <p className="text-sm text-[#667085]">{getFormattedDate(post.publishedAt)}</p>
                    </div>
                </div>
            </div>)
    })
    return (
        <div className="flex flex-wrap">
            {blogPosts}
        </div>
    );
}

export default BlogPost;