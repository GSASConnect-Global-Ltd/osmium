import { GetStaticPaths, GetStaticProps } from 'next';
import { sanityClient } from '@/sanity';
import PostDetails from '../../components/blog/PostDetails';

interface Post {
  _id: string;
  title: string;
  imageUrl: string;
  publishedAt: string;
  authorName: string;
  body: any; 
}

export const getStaticPaths: GetStaticPaths = async () => {
  const query = '*[_type == "post"]';
  const posts: Post[] = await sanityClient.fetch(query);
  const paths = posts.map((post) => ({ params: { id: post._id } }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `*[_type == "post" && _id == "${params?.id}"]{
    _id,
    title,
    "imageUrl": mainImage.asset->url,
    publishedAt,
    "authorName": author->name,
    body
  }`;
  const post: Post = await sanityClient.fetch(query);
  return { props: { post } };
  
};


const PostPage: React.FC<{ post: Post[] }> = ({ post }:{post:Post[]}) => (
  <div>
    <PostDetails post={post} />
  </div>
);

export default PostPage;
