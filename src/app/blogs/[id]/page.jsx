import React from "react";

const page = ({ params }) => {
  
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
  const blog = blogs.find((blog) => blog.id == params.id);
  return (
    <div>
      <h2>{blog?.title}</h2>
    </div>
  );
};

export default page;
