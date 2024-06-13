import { getSinglePostData } from "@/services/GETAPI";
import { redirect } from "next/dist/server/api-utils";
import React from "react";

export const generateMetadata = async ({ params }) => {
  const postData = await getSinglePostData(params.id);
  return {
    title: {
      absolute: postData.title,
    },
    description: postData.body,
    keywords: postData.body.split(" "),
  };
};
const PostDetails = async ({ params }) => {
  const post = await getSinglePostData(params.id);
  if (!post) redirect("/");
  return (
    <div>
      <h2>Post Details of {post.title}</h2>
      <p>Description: {post?.body}</p>
    </div>
  );
};

export default PostDetails;
