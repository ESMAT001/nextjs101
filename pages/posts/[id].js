import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/Link";
import useSWR from 'swr';
import Button from "@material-tailwind/react/Button";
import useAccount from '../js/user';


function Post({ post }) {
  const user = useAccount();
  const router = useRouter();
  const userData = useAccount().userData();
  useEffect(() => {
    const dataFromLocal = JSON.parse(window.localStorage.getItem("userData"));

    if (dataFromLocal.username) {
      user.signIn(dataFromLocal.username)
    } else {
      router.push('/login')
    }


  }, [])


  function logout() {
    const res = user.signOut();
    if (res.success) router.push("/login");
  }
  return (

    <div>
      <header className="flex flex-row justify-between items-center bg-gray-100 p-4">
        <h1 className="text-md ">Index page</h1>
        <Button
          color="lightBlue"
          buttonType="filled"
          size="lg"
          ripple="dark"
          onClick={logout}
        >
          logout
        </Button>
      </header>
      <div>
      post number :{post.id}
      title : {post.title}
      </div>
    </div>
  );
}

export async function getStaticPaths() {

  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();


  const paths = posts.map((post) => ({
    params: { id: post.id + "" },
  }));


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
