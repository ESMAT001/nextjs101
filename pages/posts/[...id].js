import React from "react";
import { useRouter } from "next/router";

function post() {
  const router = useRouter();



  console.log(router.query);

  return <div>all path</div>;
}

export default post;
