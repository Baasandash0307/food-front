'use client'

import { LayoutDashboard, Settings, Truck } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const Navigate = () => {

    const [activeButton, setActiveButton] = useState('menu');

    return (
        <div className="w-[220px] h-screen bg-neutral-300 rounded-tr-3xl rounded-br-3xl">
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
                        onClick={() => setActiveButton('menu')}
                        className={`flex cursor-pointer w-[165px] h-[40px] text-[14px] justify-center items-center rounded-2xl gap-[10px] ${activeButton === 'menu' ? 'bg-black text-white' : 'bg-white text-black'
                            }`}
                    >
                        <LayoutDashboard />
                        <p>Food Menu</p>
                    </button>

                    <button
                        onClick={() => setActiveButton('orders')}
                        className={`flex cursor-pointer w-[165px] h-[40px] text-[14px] justify-center items-center rounded-2xl gap-[10px] ${activeButton === 'orders' ? 'bg-black text-white' : 'bg-white text-black'
                            }`}
                    >
                        <Truck />
                        <p>Orders</p>
                    </button>

                    <button
                        onClick={() => setActiveButton('settings')}
                        className={`flex cursor-pointer w-[165px] h-[40px] text-[14px] justify-center items-center rounded-2xl gap-[10px] ${activeButton === 'settings' ? 'bg-black text-white' : 'bg-white text-black'
                            }`}
                    >
                        <Settings />
                        <p>Settings</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navigate;