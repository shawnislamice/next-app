import Link from "next/link";
import React from "react";

const BlogCard = ({ blog }) => {
  return (
    <div>
      <h2>Blog Card</h2>
      <div className="border rounded-lg p-5">
        <h2>{blog?.title}</h2>
        <Link
          href={`/blogs/${blog.id}`}
          className="btn  my-5 btn-outline text-red-500"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
