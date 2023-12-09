import BlogPost from "./BlogPost";

// interface Post {
//     _createdAt:string;
//     _id: string;
//     _rev: string;
//     _type: string;
//     _updatedAt: string;
//     name: string;


//   }
interface Post {
    _id: string;
    title: string;
    imageUrl: string;
    publishedAt: string;
    authorName: string;
    body:any;
  }
  interface BlogPostsProps {
    posts: Post[];
  }
const BlogPosts:React.FC<BlogPostsProps>=({posts})=> {
    return (
        <div className="w-[1280px] h-[1094px] m-auto px-[32px] ">
            <BlogPost posts={posts}/>
           
            
        </div>
    );
}

export default BlogPosts;