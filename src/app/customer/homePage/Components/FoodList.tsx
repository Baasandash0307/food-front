import { BASE_URL } from "@/constants";
import Card from "./card";
import Categories from "./categories";

export const FoodList = async () => {
  const response = await fetch(`${BASE_URL}/foods`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const foods = await response.json();
  console.log(foods);

  return (
    <div className="w-full bg-neutral-700">
      <div className="flex justify-center">
        <div className="w-[1700px]">
          <p className="text-[30px] text-white font-bold">Appetizer</p>
        </div>
      </div>

      <div className="mt-10 bg-neutral-700 h-[1000px]">
        <div className="flex justify-center">
          <div className="w-[1700px]">
            <Card></Card>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="w-[1700px]">
          <p className="text-[30px] text-white font-bold">Salads</p>
        </div>
      </div>

      <div className="mt-10 bg-neutral-700 h-[1000px]">
        <div className="flex justify-center">
          <div className="w-[1700px]">
            <Card></Card>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="w-[1700px]">
          <p className="text-[30px] text-white font-bold">Lunch favorites</p>
        </div>
      </div>

      <div className="mt-10 bg-neutral-700 h-[1000px]">
        <div className="flex justify-center">
          <div className="w-[1700px]">
            <Card></Card>
          </div>
        </div>
      </div>
    </div>
  );
};
