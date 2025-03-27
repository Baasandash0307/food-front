'use client'

import { useState } from "react";

const LoginPage = () => {
    const [email, setEmail] = useState("");

    return (
        <div className="flex w-full justify-around">
            <div className="flex items-center">
                <div className="w-[416px] h-[288px]">
                    <h1 className="text-[24px] font-bold">Create your account</h1>
                    <p className="text-[16px] text-gray-400">Sign up to explore your favorite dishes.</p>
                    <div className="flex flex-col gap-8 mt-8">
                        <input
                            className="w-full h-[36px] border border-gray-200 outline-0 rounded-[5px] p-2"
                            type="email"
                            placeholder="Enter your email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button
                            className={`w-full h-[36px] text-white outline-0 cursor-pointer rounded-[5px] ${email ? "bg-black" : "bg-gray-300"
                                }`}
                            type="submit"
                        >
                            Let's Go
                        </button>
                    </div>
                    <div className="flex flex-row justify-center mt-8 gap-3">
                        <p className="text-gray-400">Already have an account?</p>
                        <button className="text-blue-400 cursor-pointer" type="button">Log in</button>
                    </div>
                </div>
            </div>
            <div className="w-[940px] h-[1000px] rounded-2xl flex items-center">
                <img src="/bike.png" />
            </div>
        </div>
    );
};

export default LoginPage;