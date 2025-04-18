"use client";

import { BASE_URL } from "@/constants";
import ProductCard from "./productCard";
import { useEffect, useState } from "react";
import { log } from "console";
import Navigate from "@/app/admin/components/navigation";

export const FoodList = () => {
  const [categories, setCategories] = useState<any[]>([]);
  useEffect(() => {
    const fetchFoods = async () => {
      const response = await fetch(`${BASE_URL}/categories/with-foods`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const { categories } = await response.json();
      setCategories(categories);
      console.log(categories);
    };

    fetchFoods();
  }, []);
  return (
    <>
      {categories?.slice(0,4).map((el) => (
        <div className="bg-neutral-700">
          <div className="flex justify-center">
            <div className="w-[1700px]">
              <p className="text-[30px]  text-white font-bold">{el.name}</p>
            </div>
          </div>

          <div className="mt-10 bg-neutral-700 h-[1000px]">
            <div className="flex justify-center">
              <div className="w-[1700px] gap-10 grid grid-cols-3 grid-rows-2">
                {el.foods.map((food: any) => (
                  <ProductCard food={food} />
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
