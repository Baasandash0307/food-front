import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

const ProductCard = () => {



    return (
        <div className="w-[500px] h-[450px] bg-white rounded-xl relative">
            <Dialog>
                <DialogTrigger className="ml-2.5"><div className="flex justify-center items-center">
                    <button className="cursor-pointer">
                        <img className="w-[470px] h-[300px] mt-4 p-1 rounded-2xl object-cover" src="foodpic.png" alt="Food"></img>
                    </button>
                    <button className="w-11 h-11 rounded-3xl absolute bg-white text-red-500 mt-50 ml-90 cursor-pointer" type="submit">+</button>
                </div>
                    <div className="w-[480px]">
                        <div className="flex justify-between ml-5 mt-5 items-center">
                            <p className="text-red-500 text-[25px] font-bold">Finger food</p>
                            <p className="text-[18px] font-bold">$12.99</p>
                        </div>
                    </div>
                    <p className="text-[14px] ml-5">Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.</p></DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogDescription>
                            <div className="flex gap-10">
                                <div>
                                    <img className="rounded-2xl object-cover" src="foodpic.png"></img>
                                </div>
                                <div>
                                    <p className="flex justify-end mr-5 text-[29px] font-bold text-red-500">Finger food</p>
                                    <p className="text-[16px] mt-5">Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.</p>

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
