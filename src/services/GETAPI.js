import { redirect } from "next/dist/server/api-utils";

export const getSinglePostData = async (id) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const data = response.json();
 
    return data;
  } catch (error) {
    alert(error?.message);
  }
};
