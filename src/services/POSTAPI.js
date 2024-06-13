export const getPostData = async () => {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const data = await res.json();
    return data;
  } catch (error) {
    alert(error?.message);
  }
};
