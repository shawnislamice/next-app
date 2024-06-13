import { getPostData } from "@/services/POSTAPI";
import Link from "next/link";
import React from "react";
import { Hind_Siliguri } from "next/font/google";
const hinf_siliguri=Hind_Siliguri({weight:['400','500'],subsets:['latin']})

const Posts = async () => {
  const postData = await getPostData();
  
  return (
    <div className={hinf_siliguri.className}>
      <div className="grid grid-cols-3 place-items-center gap-3">
        {
          postData.map(post=>(
            <Link href={`/posts/${post?.id}`} key={post} className="p-5 h-[200px] w-full border rounded-lg border-red-500">
              <h2 className="capitalize font-semibold text-blue-500">Title: {post?.title}</h2>
              <p className="text-justify opacity-90">{post?.body}</p>
            
            </Link>
          ))
        }
      </div>
    </div>
  );
};

export default Posts;
