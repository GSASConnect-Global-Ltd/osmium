import BlogPosts from "@/components/blog/BlogPosts";
import { AppLayout } from "@/layouts";
import BlogHeader from "@/components/blog/BlogHeader";
import { sanityClient } from "../sanity";

interface Post {
  _id: string;
  title: string;
  imageUrl: string;
  publishedAt: string;
  authorName: string;
  body: any;
}
export async function getStaticProps() {
  const query = `*[_type == "post"]{
        _id,
        title,
        "imageUrl": mainImage.asset->url,
        publishedAt,
        "authorName": author->name,
        body
      }`;
  const posts: Post[] = await sanityClient.fetch(query);
  // const posts: Post[] = []

  return {
    props: {
      posts,
    },
  };
}

const blog: React.FC<{ posts: Post[] }> = ({ posts }) => {
  return (
    <div>
      <AppLayout>
        <BlogHeader heading="Blog" body="" />
        <BlogPosts posts={posts} />
      </AppLayout>
    </div>
  );
};

export default blog;
