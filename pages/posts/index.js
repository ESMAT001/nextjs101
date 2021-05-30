import React from "react";
import Link from 'next/link';


function Posts({ posts }) {
  return <div>All posts
      <ul>
         {
             posts.map((post,i)=>{
                 return (
                     <li key={post.id}>
                        <Link href={{
                            pathname:"/posts/[id]",
                            query:{id:post.id}
                        }}
                        >
                            <a>{post.title} {post.id}</a>
                        </Link>
                     </li>
                 )
             })
         }
      </ul>
       </div>;
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}

export default Posts;
