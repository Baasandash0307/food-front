'use client'
import Categories from "./customer/homePage/Components/categories";
import Footer from "./customer/homePage/Components/footer";
import Background from "./customer/homePage/Components/background";
import { FoodList } from "./customer/homePage/Components/FoodList";
import Header from "./customer/homePage/Components/header";

export default function Home() {
  return (
    <div className="w-full h-screen bg-neutral-700">
      <div>
        <Header/>
        <Background />
        <div className="w-full h-[178px] bg-neutral-700 mt-10">
          <Categories></Categories>
        </div>

        <FoodList />

        <div className="w-full h-[450px] bg-black">
          <div className="w-full h-20 bg-red-500 overflow-hidden whitespace-nowrap flex items-center">
            <div className="inline-block animate-scroll text-white text-[30px] font-bold">
              Fresh fast delivered &nbsp; • &nbsp; Fresh fast delivered &nbsp; •
              &nbsp; Fresh fast delivered &nbsp; • &nbsp; Fresh fast delivered
              &nbsp; • &nbsp; Fresh fast delivered &nbsp; • &nbsp; Fresh fast
              delivered &nbsp;
            </div>
          </div>

          <div className="flex justify-center">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
