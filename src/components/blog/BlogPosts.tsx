import BlogPost from "./BlogPost";

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
    if (posts.length === 0) {
      return (
      <div className="h-[400px]">
        <p className="text-4xl  text-center mt-10">Oops no posts to display.</p>;
        <p className="text-4xl  text-center">Check later.</p>;
        </div>
      )
    } else
      return (
        <div className="w-[1280px] h-[1094px] m-auto px-[32px] ">
          <BlogPost posts={posts} />
        </div>
      );
}

export default BlogPosts;