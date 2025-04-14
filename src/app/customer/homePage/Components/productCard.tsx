"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
import { BASE_URL } from "@/constants";

const ProductCard = () => {
  const [count, setCount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(12.99);
  const [foodList, setFoodList] = useState<{ categories: any[] }>({ categories: [] });

  const handleIncrease = () => {
    setCount((prevCount) => prevCount + 1);
    setTotalPrice((prevPrice) => prevPrice + 12.99); // Fixed logic
  };

  const handleDecrease = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
      setTotalPrice((prevPrice) => prevPrice - 12.99); // Fixed logic
    }
  };

  useEffect(() => {
    const fetchFoods = async () => {
      const response = await fetch(`${BASE_URL}/foods`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setFoodList(data);
      console.log(data);

    };

    fetchFoods();
  }, []);

  return (
    <>
      {foodList.foods.map((el) => (
        <div
          className="w-[500px] h-[450px] bg-white rounded-xl relative"
        >
          <Dialog>
            <DialogTrigger className="ml-3.5 cursor-pointer">
              <div className="flex justify-center items-center">
                <img
                  className="w-[470px] h-[300px] mt-4 p-1 rounded-2xl object-cover"
                  src="foodpic.png"
                  alt="Food"
                />
              </div>
              <div className="w-[460px]">
                <div className="flex justify-between ml-2 items-center">
                  <div className="text-red-500 text-[25px] font-bold">
                    {/* {el.foodName} */}
                  </div>
                  <div className="text-[18px] font-bold">$12.99</div>
                </div>
              </div>
              <div className="w-[470px]">
                <div className="text-[14px] ml-2">
                  Fluffy pancakes stacked with fruits, cream, syrup, and powdered
                  sugar.
                </div>
              </div>
            </DialogTrigger>
            <DialogContent>
              <DialogTitle>
                <DialogHeader>
                  <div>
                    <div className="flex gap-10">
                      <img
                        className="rounded-2xl w-[600px] h-[350px] object-cover"
                        src="/foodpic.png"
                        alt="Food"
                      />
                      <div>
                        <div className="flex justify-start mr-5 text-[29px] font-bold text-red-500">
                          Finger food
                        </div>
                        <div className="text-[16px] mt-5 flex justify-start">
                          Fluffy pancakes stacked with fruits, cream, syrup, and
                          powdered sugar.
                        </div>

                        <div className="justify-start grid grid-cols-2 mt-30">
                          <div>
                            <div className="text-[20px]">Total price</div>
                            <div className="text-[25px] font-bold">
                              ${totalPrice.toFixed(2)}
                            </div>
                          </div>

                          <div className="flex items-center gap-3">
                            <button
                              onClick={handleDecrease}
                              className="border w-9 h-9 rounded-4xl cursor-pointer"
                            >
                              -
                            </button>
                            <div className="text-2xl">{count}</div>
                            <button
                              onClick={handleIncrease}
                              className="border w-9 h-9 rounded-4xl cursor-pointer"
                            >
                              +
                            </button>
                          </div>

                          <div className="w-[275px] h-[40px] bg-black mt-5 border flex justify-center rounded-4xl">
                            <button className="text-white text-[15px] cursor-pointer">
                              Add to cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </DialogHeader>
              </DialogTitle>
            </DialogContent>
          </Dialog>
        </div>
      ))}
    </>
  );
};

export default ProductCard;
