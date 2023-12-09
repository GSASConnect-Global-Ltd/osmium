import React from 'react';
import { AppLayout } from "@/layouts";
import { PageHeader } from "@/components/partials";
// import BlockContent from '@sanity/block-content-to-react';

interface Post {
  _id: string;
  title: string;
  imageUrl: string;
  publishedAt: string;
  authorName: string;
  body: any; // replace 'any' with the actual type of your body
}

const PostDetails: React.FC<{ post: Post }> = ({ post }) =>  (
  <div>
    <AppLayout>
    <PageHeader heading="Blog Details" body="" cta="Reach Out To Us" link="/contact"/>
    <p>post details </p>
    <h2>{post.title}</h2>
    <img src={post.imageUrl} alt={post.title} />
    <p>{post.publishedAt}</p> {/* format the date */}
    <p>{post.authorName}</p>
    {/* <BlockContent blocks={post.body} /> display the summary */}
    </AppLayout>
  </div>
);

export default PostDetails;
