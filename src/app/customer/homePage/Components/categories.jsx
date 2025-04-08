"use client";

import { useState } from "react";

const Categories = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div>
      <div className="flex justify-center">
        <div className="w-[1700px] h-[36px]">
          <p className="text-[30px] text-white font-bold">Categories</p>
        </div>
      </div>

      <div className="flex justify-around mt-[36px]">
        <div className="flex gap-2 w-[1700px] justify-between h-[40px] text-[18px]">
          {[
            "Appetizer",
            "Salads",
            "Pizzas",
            "Lunch favorites",
            "Main dishes",
            "Fish & Sea foods",
            "Side dishes",
            "Brunch",
            "Desserts",
          ].map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-[170px] h-[36px] rounded-2xl px-4 transition-colors ${
                activeIndex === index
                  ? "bg-red-500 text-white"
                  : "bg-white text-black"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
