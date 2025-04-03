import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const ProductCard = () => {
  const [count, setCount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(12.99);

  const handleIncrease = () => {
    setCount((prevCount) => prevCount + 1);
    setTotalPrice((prevPrice) => prevPrice + prevPrice);
  };

  const handleDecrease = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
      setTotalPrice((prevPrice) => prevPrice / 2);
    }
  };

  return (
    <div className="w-[500px] h-[450px] bg-white rounded-xl relative">
      <Dialog>
        <DialogTrigger className="ml-3.5 cursor-pointer">
          <div className="flex justify-center items-center">
            <img
              className="w-[470px] h-[300px] mt-4 p-1 rounded-2xl object-cover"
              src="foodpic.png"
              alt="Food"
            ></img>
          </div>
          <div className="w-[460px]">
            <div className="flex justify-between ml-2 items-center">
              <p className="text-red-500 text-[25px] font-bold">Finger food</p>
              <p className="text-[18px] font-bold">$12.99</p>
            </div>
          </div>
          <div className="w-[470px]">
            <p className="text-[14px] ml-2">
              Fluffy pancakes stacked with fruits, cream, syrup, and powdered
              sugar.
            </p>
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogDescription>
              <div className="flex gap-10">
                <div>
                  <img
                    className="rounded-2xl w-[600px] h-[350px] object-cover"
                    src="/foodpic.png"
                    alt="Food"
                  />
                </div>
                <div>
                  <div>
                    <p className="flex justify-start mr-5 text-[29px] font-bold text-red-500">
                      Finger food
                    </p>
                    <p className="text-[16px] mt-5 flex justify-start">
                      Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.
                    </p>
                  </div>

                  <div className="justify-start grid grid-cols-2 mt-30">
                    <div>
                      <p className="text-[20px]">Total price</p>
                      <p className="text-[25px] font-bold">${totalPrice.toFixed(2)}</p>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={handleDecrease}
                        className="border w-9 h-9 rounded-4xl cursor-pointer"
                      >
                        -
                      </button>
                      <p className="text-2xl">{count}</p>
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
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProductCard;
