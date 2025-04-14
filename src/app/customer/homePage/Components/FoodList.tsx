import { BASE_URL } from "@/constants";
import ProductCard from "./productCard";

export const FoodList = async () => {
  const response = await fetch(`${BASE_URL}/categories/with-foods`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const foods = await response.json();
  // console.log(foods)

  return (
    <>
      {foods.categories.map((el) => (
        <div className="bg-neutral-700">
          <div className="flex justify-center">
            <div className="w-[1700px]">
              <p className="text-[30px]  text-white font-bold">{el.name}</p>
            </div>
          </div>

          <div className="mt-10 bg-neutral-700 h-[1000px]">
            <div className="flex justify-center">
              <div className="w-[1700px] gap-10 grid grid-cols-3 grid-rows-2">

                <ProductCard />

              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
