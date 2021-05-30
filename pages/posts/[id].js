import React from "react";
import { useRouter } from "next/router";
import Link from "next/Link";

function Post({ post }) {
  return (
    <div>
      <div>
        <Link href="/posts">
          <a>back</a>
        </Link>
      </div>
      post number :{post.id}
      title : {post.title}
    </div>
  );
}

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { id: post.id + "" },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts/" + params.id
  );
  const post = await res.json();
  return {
    props: {
      post,
    },
  };
}

export default Post;
