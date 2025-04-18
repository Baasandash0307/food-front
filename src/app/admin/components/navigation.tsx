"use client";

import { LayoutDashboard, Settings, Truck } from "lucide-react";
import { useEffect, useState } from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { BASE_URL } from "@/constants";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Navigate = () => {
  const [categories, setCategories] = useState<any[]>([]);
  const [activeButton, setActiveButton] = useState("menu");

  useEffect(() => {
    const fetchFoods = async () => {
      const response = await fetch(`${BASE_URL}/categories/with-foods`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const { categories } = await response.json();
      setCategories(categories);
    };

    fetchFoods();
  }, []);

  const renderContent = () => {
    switch (activeButton) {
      case "menu":
        return (
          <div className="ml-15 mr-20 mt-10 bg-neutral-200 h-auto p-5 rounded-3xl">
            <div className="w-full ml-3">
              <div className="flex justify-end mr-5">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                </Avatar>
              </div>
              <p className="text-[30px] font-bold mb-6">Dishes Category</p>
              <div className="flex flex-wrap gap-2 mb-10">
                {categories?.map((el) => (
                  <Button
                    key={el.name}
                    variant="outline"
                    className="rounded-3xl cursor-pointer"
                  >
                    {el.name}
                    <Badge
                      variant="outline"
                      className="bg-black rounded-3xl text-white ml-2"
                    >
                      0
                    </Badge>
                  </Button>
                ))}
                <button className="bg-red-500 w-[35px] rounded-3xl text-white cursor-pointer">
                  +
                </button>
              </div>

              {categories?.slice(0, 4).map((el) => (
                <div key={el.name} className="mb-16 mr-5">
                  <p className="text-[30px] font-bold">{el.name}</p>
                  <div className="grid grid-cols-3 gap-6 mt-5">
                    {el.foods.map((food: any) => (
                      <div
                        key={food.foodName}
                        className="border border-neutral-400 h-[450px] rounded-2xl overflow-hidden"
                      >
                        <div className="relative">
                          <img
                            className="w-full h-[300px] object-cover p-1 rounded-t-2xl"
                            src={food.image}
                            alt="Food"
                          />
                          <Button
                            className="absolute bottom-3 right-3 bg-white text-red-500 text-xs px-3 py-1 rounded-full shadow-md hover:bg-gray-800"
                          >
                            Edit
                          </Button>
                        </div>
                        <div className="p-3">
                          <div className="flex justify-between items-center mb-2">
                            <p className="text-red-500 text-[25px] font-bold">
                              {food.foodName}
                            </p>
                            <p className="text-[18px] font-bold">${food.price}</p>
                          </div>
                          <p className="text-[14px]">{food.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case "orders":
        return (
          <div className="ml-25 mt-10 bg-neutral-200 h-[400px] p-5 rounded-3xl">
            <p className="text-[30px] font-bold mb-3">Orders</p>
            <p>asdasdasdasd</p>
          </div>
        );

      case "settings":
        return (
          <div className="ml-25 mt-10 bg-neutral-200 h-[400px] p-5 rounded-3xl">
            <p className="text-[30px] font-bold mb-3">Settings</p>
            <p>asdasdasdasd</p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex">
      <div className="w-[280px] fixed h-screen bg-neutral-200 rounded-tr-3xl rounded-br-3xl">
        <div className="flex justify-center">
          <button className="cursor-pointer">
            <div className="w-[146px] h-[44px] items-center mt-[36px] flex gap-3">
              <div className="w-[46px] h-[37px]">
                <img src="/hand.png" alt="Logo" />
              </div>
              <div>
                <div className="text-[20px] flex font-bold">
                  <p className="text-black">Yum</p>
                  <p className="text-black-500">Rush</p>
                </div>
                <p className="text-black text-[12px]">Swift delivery</p>
              </div>
            </div>
          </button>
        </div>

        <div className="flex justify-center mt-10">
          <div className="flex flex-col gap-5">
            <button
              onClick={() => setActiveButton("menu")}
              className={`flex w-[165px] h-[40px] text-[14px] justify-center items-center rounded-2xl gap-[10px] cursor-pointer ${activeButton === "menu"
                ? "bg-black text-white"
                : "bg-white text-black"
                }`}
            >
              <LayoutDashboard />
              <p>Food Menu</p>
            </button>

            <button
              onClick={() => setActiveButton("orders")}
              className={`flex w-[165px] h-[40px] text-[14px] justify-center items-center rounded-2xl gap-[10px] cursor-pointer ${activeButton === "orders"
                ? "bg-black text-white"
                : "bg-white text-black"
                }`}
            >
              <Truck />
              <p>Orders</p>
            </button>

            <button
              onClick={() => setActiveButton("settings")}
              className={`flex w-[165px] h-[40px] text-[14px] justify-center items-center rounded-2xl gap-[10px] cursor-pointer ${activeButton === "settings"
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

      <div className="ml-[300px] w-full">{renderContent()}</div>
    </div>
  );
};

export default Navigate;
