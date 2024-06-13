import BlogCard from "@/components/BlogCard";
import React from "react";

const page = () => {
  const blogs = [
    {
      id: 1,
      title: "Exploring the Wonders of Nature",
      author: "Jane Doe",
      date: "2024-06-01",
      content:
        "Nature has always been a source of inspiration and wonder. From majestic mountains to serene lakes...",
      tags: ["Nature", "Travel", "Adventure"],
    },
    {
      id: 2,
      title: "Exploring the Wonders of Nature",
      author: "Jane Doe",
      date: "2024-06-01",
      content:
        "Nature has always been a source of inspiration and wonder. From majestic mountains to serene lakes...",
      tags: ["Nature", "Travel", "Adventure"],
    },
    {
      id: 3,
      title: "Exploring the Wonders of Nature",
      author: "Jane Doe",
      date: "2024-06-01",
      content:
        "Nature has always been a source of inspiration and wonder. From majestic mountains to serene lakes...",
      tags: ["Nature", "Travel", "Adventure"],
    },
    {
      id: 4,
      title: "Exploring the Wonders of Nature",
      author: "Jane Doe",
      date: "2024-06-01",
      content:
        "Nature has always been a source of inspiration and wonder. From majestic mountains to serene lakes...",
      tags: ["Nature", "Travel", "Adventure"],
    },
    {
      id: 5,
      title: "Exploring the Wonders of Nature",
      author: "Jane Doe",
      date: "2024-06-01",
      content:
        "Nature has always been a source of inspiration and wonder. From majestic mountains to serene lakes...",
      tags: ["Nature", "Travel", "Adventure"],
    },
  ];
  return (
    <div className="grid grid-cols-3 gap-3">
      {blogs.map((blog) => (
        <BlogCard key={blog?._id} blog={blog}></BlogCard>
      ))}
    </div>
  );
};

export default page;
