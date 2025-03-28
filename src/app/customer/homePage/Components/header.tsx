'use client'
import Link from "next/link";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react";



const Header = () => {

    const [count, setCount] = useState(1)

    return (
        <div>
            <div className="w-full h-[70px] bg-black flex justify-around items-center fixed top-0 left-0 z-50">
                <div className="w-[1700px] flex justify-between">
                    <Link href={"/"}>
                        <button className="cursor-pointer">
                            <div className="w-[146px] h-[44px] flex items-center gap-3">
                                <div className="w-[46px] h-[37px]">
                                    <img src="/hand.png" alt="Logo"></img>
                                </div>
                                <div>
                                    <div className="text-[20px] flex font-bold">
                                        <p className="text-white">Yum</p>
                                        <p className="text-red-500">Rush</p>
                                    </div>
                                    <div>
                                        <p className="text-white text-[12px]">Swift delivery</p>
                                    </div>
                                </div>
                            </div>
                        </button>
                    </Link>

                    <div className="flex gap-4 items-center">
                        <div className="flex gap-3">
                            <div className="w-[255px] h-[36px] text-[12px] bg-white rounded-2xl flex items-center justify-around">
                                <img src="/vector.png" alt=""></img>
                                <p className="text-red-500">Delivery address:</p>
                                <input className="text-gray-600 w-18 outline-none" placeholder="Add location" type="text"></input>
                                <img className="w-[5px] h-[10px]" src="/arrow.png" alt="Arrow"></img>
                            </div>
                            <div className="flex gap-3">

                                <Sheet>
                                    <SheetTrigger className="bg-white">
                                        <button className="w-9 h-9 bg-white flex justify-center items-center cursor-pointer">
                                            <img className="w-4 h-4" src="/cart.png" alt="Cart" />
                                        </button>
                                    </SheetTrigger>
                                    <SheetContent className="bg-neutral-700 rounded-tl-3xl rounded-bl-3xl">
                                        <SheetHeader>
                                            <SheetTitle className=" text-white text-2xl flex">Order detail</SheetTitle>
                                            <SheetDescription>

                                                <Tabs defaultValue="account" className="mt-2">
                                                    <TabsList className="flex justify-center text-[18px] gap-3">
                                                        <TabsTrigger
                                                            value="account"
                                                            className="w-[180px] data-[state=active]:bg-red-500 rounded-2xl data-[state=active]:text-white bg-white text-red-500"
                                                        >
                                                            Cart
                                                        </TabsTrigger>

                                                        <TabsTrigger
                                                            value="password"
                                                            className="w-[180px] data-[state=active]:bg-red-500 rounded-2xl data-[state=active]:text-white bg-white text-red-500"
                                                        >
                                                            Order
                                                        </TabsTrigger>

                                                    </TabsList>
                                                    <TabsContent value="account">
                                                        <div className="w-[380px] h-[400px] rounded-2xl mt-2 bg-white p-4">
                                                            <div>
                                                                <p className="text-[20px] font-bold">My cart</p>
                                                            </div>
                                                            <div className="grid grid-cols-2 mt-5">
                                                                <div className="w-[140px] h-[110px]">
                                                                    <img className="rounded-2xl" src="/foodpic.png"></img>
                                                                </div>
                                                                <div>
                                                                    <div>
                                                                        <h1>Sunshine Stackers</h1>
                                                                        <p>Fluffy pancakes stacked with fruits, cream, syrup, and
                                                                            powdered sugar.</p>
                                                                    </div>
                                                                    <div>
                                                                        <div className="justify-start grid grid-cols-2 mt-25 gap-10">
                                                                            <div className="flex items-center gap-3">
                                                                                <button
                                                                                    onClick={() => setCount(count > 1 ? count - 1 : 1)}
                                                                                    className=" w-9 h-9  cursor-pointer"
                                                                                >
                                                                                    -
                                                                                </button>
                                                                                <p className="text-2xl">{count}</p>
                                                                                <button
                                                                                    onClick={() => setCount(count + 1)}
                                                                                    className=" w-9 h-9  cursor-pointer"
                                                                                >
                                                                                    +
                                                                                </button>
                                                                            </div>

                                                                            <div>
                                                                                <p className="text-[10px] ">Total price</p>
                                                                                <p className="text-[15px] font-bold">$12.99</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="w-[360px] h-[50px] cursor-pointer border-1 border-red-500 bg-white rounded-4xl mt-5 flex justify-center items-center">
                                                                <button className="text-[18px] cursor-pointer text-red-500 font-bold ">Add food</button>
                                                            </div>

                                                            <div className="mt-18 ml-[-16px] p-4 w-[380px] h-[400px] rounded-2xl bg-white">
                                                                <div className="">
                                                                    <p className="text-[20px] font-bold">Payment info</p>
                                                                </div>

                                                                <div className="mt-5">
                                                                    <div className="text-[16px]">
                                                                        <div className="flex justify-between">
                                                                            <p>Items</p>
                                                                            <p className="font-bold">$25.98</p>
                                                                        </div>
                                                                        <div className="flex justify-between mt-1">
                                                                            <p>Shipping</p>
                                                                            <p className="font-bold">$0.99</p>
                                                                        </div>
                                                                    </div>

                                                                    <div className="border-solid border-1 border-gray-300 mt-5"></div>

                                                                    <div className="flex justify-between text-[16px] mt-5">
                                                                        <p>Total</p>
                                                                        <p className="font-bold">$26.97</p>
                                                                    </div>
                                                                    <div className="w-[360px] h-[50px] cursor-pointer bg-red-500 rounded-4xl mt-30 flex justify-center items-center">
                                                                        <button className="text-[18px] cursor-pointer text-white font-bold ">Checkout</button>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </TabsContent>
                                                    <TabsContent value="password">Change your password here.</TabsContent>
                                                </Tabs>

                                            </SheetDescription>
                                        </SheetHeader>
                                    </SheetContent>
                                </Sheet>

                                <Popover>
                                    <PopoverTrigger className="border cursor-pointer bg-red-500 w-[37px] h-[37px] rounded-4xl flex justify-center items-center"><img className="w-4 h-4" src="/person.png" alt="Person"></img></PopoverTrigger>
                                    <Link href={"customer/loginPage/signup"}>
                                        <PopoverContent className="bg-white cursor-pointer flex justify-center border-0">
                                            <p className="border-1 w-[220px] h-[35px] items-center text-[15px] font-bold rounded-2xl bg-red-500 text-white flex justify-center">Login</p>
                                        </PopoverContent>
                                    </Link>
                                </Popover>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Add padding to body so content doesn't get hidden under fixed header */}
            {/* <div className="h-[70px]"></div> */}
        </div >
    );
};

export default Header;