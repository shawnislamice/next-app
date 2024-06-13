"use client";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const OurMeals = () => {
  const [search, setSearch] = useState("");
  const [meals, setMeals] = useState([]);
 
  const loadData = async () => {
    const { data } = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`
    );
 
    setMeals(data.meals);
  };
  useEffect(() => {
    loadData();
  }, [search]);
//   if (meals.length == 0) return alert("error");
  return (
    <div>
      <div className="flex items-center gap-5 justify-center">
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search"
          className="bg-gray-200 input"
        />
        <button className="btn btn-outline text-pink-500">Search</button>
      </div>
      <div className="mt-5 grid grid-cols-3 gap-3">
        {meals?.map((meal) => (
          <div key={meal}>
            <Image height={100} width={200} src={meal?.strMealThumb} alt="Hello" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurMeals;
