"use client";

import { useState } from "react";
import Categories from "./customer/homePage/Components/categories";
import Card from "./customer/homePage/Components/card";
import Footer from "./customer/homePage/Components/footer";
import Background from "./customer/homePage/Components/background";

export default function Home() {
  // const [formValues, setFormValues] = useState({
  //   email: "",
  //   phoneNumber: "",
  //   password: "",
  //   ConfirmPassword: "",
  //   date: "",
  //   image: "",
  // });

  return (
    <div className="w-full h-screen bg-neutral-700">
      <div>

        <Background />

        <div className="w-full h-[178px] bg-neutral-700 mt-10">
          <Categories></Categories>
        </div>

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

        <div className="w-full h-[450px] bg-black">
          <div className="flex items-center ">
            <div className="w-full h-[100px] overflow-hidden whitespace-nowrap bg-red-500 text-white py-2">
              <div className="flex w-max animate-scroll">
                <p className="text-4xl mx-4 font-bold">Fresh fast delivered</p>
                <p className="text-4xl mx-4 font-bold">Fresh fast delivered</p>
              </div>
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
