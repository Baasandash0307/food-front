import Link from "next/link";



const Header = () => {
    return (
        <div>
            <div className="w-full h-[70px] bg-black flex justify-around items-center">
                <div className="w-[1700px] flex justify-between">
                    <Link href={"/"}>
                        <button className="cursor-pointer">
                            <div className="w-[146px] h-[44px] flex items-center gap-3">
                                <div className="w-[46px] h-[37px]">
                                    <img src="/hand.png"></img>
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

                    <div className="flex gap-4">
                        <div className="w-[255px] h-[36px] text-[12px] bg-white rounded-2xl flex items-center justify-around">
                            <img src="/vector.png"></img>
                            <p className="text-red-500">Delivery address:</p>
                            <input className="text-gray-600 w-18 outline-none" placeholder="Add location" type="input"></input>
                            <img className="w-[5px] h-[10px]" src="/arrow.png"></img>
                        </div>
                        <div>
                            <Link href={"customer/loginPage/signup"}>
                                <button className="w-9 h-9 rounded-3xl bg-red-500 flex justify-center items-center cursor-pointer"> <img className="w-4 h-4" src="/person.png"></img> </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header;