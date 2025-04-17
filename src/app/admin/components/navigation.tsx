"use client";

import { LayoutDashboard, Settings, Truck } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BASE_URL } from "@/constants";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Navigate = () => {
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

  const [activeButton, setActiveButton] = useState("menu");

  return (
    <div className="flex">
      <div className="w-[280px] h-screen bg-neutral-200 rounded-tr-3xl rounded-br-3xl">
        <div className="flex justify-center">
          <Link href={"/admin"}>
            <button className="cursor-pointer">
              <div className="w-[146px] h-[44px] items-center mt-[36px] flex gap-3">
                <div className="w-[46px] h-[37px]">
                  <img src="/hand.png" alt="Logo"></img>
                </div>
                <div>
                  <div className="text-[20px] flex font-bold">
                    <p className="text-black">Yum</p>
                    <p className="text-black-500">Rush</p>
                  </div>
                  <div>
                    <p className="text-black text-[12px]">Swift delivery</p>
                  </div>
                </div>
              </div>
            </button>
          </Link>
        </div>

        <div className="flex justify-center mt-10">
          <div className="flex flex-col gap-5">
            <button
              onClick={() => setActiveButton("menu")}
              className={`flex cursor-pointer w-[165px] h-[40px] text-[14px] justify-center items-center rounded-2xl gap-[10px] ${
                activeButton === "menu"
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }`}
            >
              <LayoutDashboard />
              <p>Food Menu</p>
            </button>

            <button
              onClick={() => setActiveButton("orders")}
              className={`flex cursor-pointer w-[165px] h-[40px] text-[14px] justify-center items-center rounded-2xl gap-[10px] ${
                activeButton === "orders"
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }`}
            >
              <Truck />
              <p>Orders</p>
            </button>

            <button
              onClick={() => setActiveButton("settings")}
              className={`flex cursor-pointer w-[165px] h-[40px] text-[14px] justify-center items-center rounded-2xl gap-[10px] ${
                activeButton === "settings"
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }`}
            >
              <Settings />
              <p>Settings</p>
            </button>
          </div>
        </div>
      </div>

      <div className="flex ml-25 mt-10 bg-neutral-200 h-[200px] p-5 rounded-3xl">
        <div className="w-[1700px] ml-3">
          <div className="flex justify-end">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
            </Avatar>
          </div>
          <div>
            <div>
              <p className="text-[30px] font-bold">Dishes Category</p>
            </div>
            <div className="flex mt-10">
              <div className="flex gap-2">
                {categories?.map((el) => (
                  <Button
                    variant="outline"
                    className="rounded-3xl cursor-pointer"
                  >
                    {el.name}
                    <Badge
                      variant="outline"
                      className="bg-black rounded-3xl text-white"
                    >
                      0
                    </Badge>
                  </Button>
                ))}
                <button className="bg-red-500 w-[35px] rounded-3xl text-white cursor-pointer">
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigate;
