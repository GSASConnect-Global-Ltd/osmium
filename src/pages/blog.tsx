import BlogPosts from "@/components/blog/BlogPosts";
import { AppLayout } from "@/layouts";
import { PageHeader } from "@/components/partials";
import { sanityClient } from '../sanity';

// interface Post {
//     _createdAt:string;
//     _id: string;
//     _rev: string;
//     _type: string;
//     _updatedAt: string;
//     name: string;


// }
interface Post {
    _id: string;
    title: string;
    imageUrl: string;
    publishedAt: string;
    authorName: string;
    body:any;
  }
export async function getStaticProps() {
    // const posts: Post[]= [
    //    {
    //     _createdAt: "2022-03-08T09:28:00Z",
    //     _id: "1f69c53d-418a-452f-849a-e92466bb9c75",
    //     _rev: "xnBg0xhUDzo561jnWODd5e",
    //     _type: "post",
    //     _updatedAt: "2022-03-08T09:28:00Z",
    //     name: "Capybara"
    //   },
    //   {
    //     _createdAt: "2022-03-08T09:28:00Z",
    //     _id: "1f69c53d-418a-452f-849a-e92466bb9c75",
    //     _rev: "xnBg0xhUDzo561jnWODd5e",
    //     _type: "post",
    //     _updatedAt: "2022-03-08T09:28:00Z",
    //     name: "Duru"
    //   },
    //   {
    //     _createdAt: "2022-03-08T09:28:00Z",
    //     _id: "1f69c53d-418a-452f-849a-e92466bb9c75",
    //     _rev: "xnBg0xhUDzo561jnWODd5e",
    //     _type: "post",
    //     _updatedAt: "2022-03-08T09:28:00Z",
    //     name: "Capybara"
    //   } 
    // ];
    const query = `*[_type == "post"]{
        _id,
        title,
        "imageUrl": mainImage.asset->url,
        publishedAt,
        "authorName": author->name,
        body
      }`;
    const posts: Post[] = await sanityClient.fetch(query);
  
    return {
      props: {
        posts
      }
    };
  }


const blog:React.FC<{posts:Post[]}>= ({posts})=> {
    return (
        <div>
           <AppLayout>
            <PageHeader heading="Blog" body="" cta="Reach Out To Us" link="/contact"/>
           <BlogPosts posts={posts}/>
           </AppLayout>

        </div>
    );
}

export default blog;