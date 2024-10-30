"use client";
import { FaSearch } from "react-icons/fa";
import { useState, useEffect } from "react";
import Card from "./components/card";
const navitems = [
  { id: 1, label: "All" },
    { id: 2, label: "Sushi" },
    { id: 3, label: "Pizza" },
    { id: 4, label: "Burgers" },
    { id: 5, label: "Hot Meals" },
    { id: 6, label: "Deserts" },
    { id: 7, label: "Drinks" },
];
export default function Home() {
  const [navItem, setnavItem] = useState(0);
  const [visibleItems, setVisibleItems] = useState(9);
  const [data, setData] = useState([]);
  const handleSelect = (index) => {
    setnavItem(index);
    console.log("data", data);
  };
  //data fetch from API
  const fetchInfo = async () => {
    try {
      const res = await fetch("https://dummyjson.com/recipes");
      const result = await res.json();
      const recipes = result?.recipes ?? [];
      setData(recipes);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);
  const handleShowMore = () => {
    setVisibleItems((prev) => prev + 9); // Show 9 more items
  };

  return (
    <div className="w-full p-4 h-screen">
      <div className="relative w-full max-w-xs">
        <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
          <FaSearch className="w-5 h-5" />
        </span>
        <input
          type="text"
          data-testid="input-field"
          placeholder="Enter Restaurant name ..."
          className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>
      <div className="flex mt-6">
        {navitems.map((items, i) => (
          <div
          data-testid={items.id}
            className={`${
              navItem === i ? "bg-yellow-500" : "bg-white"
            } cursor-pointer px-8 py-4 border-2 border-yellow-500 w-fit
         first:rounded-l-xl last:rounded-r-xl`}
            key={items.id}
            onClick={() => handleSelect(i)}
          >
            <h1>{items.label}</h1>
          </div>
        ))}
      </div>
      <div className="w-4/5 m-auto mt-8 pb-4">
        {/* Render your data here */}
        <div className="grid grid-cols-3 gap-x-20 p-4">
          {data?.slice(0, visibleItems).map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </div>
        {visibleItems < data.length && (
          <div className="w-fit m-auto">
            <button data-testid="show-btn" className="w-fit p-4 border-2 border-yellow-500 rounded-2xl" onClick={handleShowMore}>+ Show More</button>
          </div>
        )}
      </div>
    </div>
  );
}
