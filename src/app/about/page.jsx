import axios from "axios";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "About Page",
  description: "About Page",
  keywords: ["about"],
};

const getaatime = async () => {
  const { data } = await axios(
    `http://localhost:3000/time`,

    { next: { revalidate: 1 } }
  );
  return data.currentTime;
};
const page = () => {
  return (
    <div>
      <Link className="btn btn-ghost space-x-4" href={"/about/history"}>
        History
      </Link>
      <Link className="btn btn-ghost space-x-4" href={"/about/mission"}>
        Mission
      </Link>
      <h2>TIme: {getaatime()} </h2>
    </div>
  );
};

export default page;
