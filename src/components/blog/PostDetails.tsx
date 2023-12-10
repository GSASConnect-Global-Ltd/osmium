import React from 'react';
import { AppLayout } from "@/layouts";
import { PageHeader } from "@/components/partials";
import BlockContent from '@sanity/block-content-to-react';

interface Post {
  _id: string;
  title: string;
  imageUrl: string;
  publishedAt: string;
  authorName: string;
  body: any; 
}


function PostDetails({ post }:{post:Post[]}) {
    function getFormattedDate(date:string){
        const formattedDate=Intl.DateTimeFormat("en-US",{
            day:"numeric",
            year:"numeric",
            month:"long"
        }).format(new Date(date));
        return formattedDate;
    }
    return (
      <div >
    
        <AppLayout>
          <PageHeader
            heading={post[0].title}
            body={getFormattedDate(post[0].publishedAt)}
            cta="Reach Out To Us"
            link="/contact"
          />
          <div className='m-20'>
        <div className='w-[720px] m-auto '>
          <h2 className='text-4xl font-black mb-4'>{post[0].title}</h2>
          <p className='italic text-lg'>by {post[0].authorName}</p>
          <p className='mb-4'>{getFormattedDate(post[0].publishedAt)}</p> {/* format the date */}
          <img src={post[0].imageUrl} alt={post[0].title} className='mb-4' />
          <p className='text-[#667085] text-justify'><BlockContent blocks={post[0].body} /></p>
          </div></div>
        </AppLayout>
      </div>
      
    );
}



export default PostDetails;