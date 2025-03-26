import React from 'react'

export const Footer = () => {
    return (
        <div className='w-[1700px] h-[230px] grid grid-cols-5 '>
            <div>
                <div className="w-[46px] h-[37px]">
                    <img src="/hand.png"></img>
                </div>
                <div className="text-[20px] flex">
                    <p className="text-white">Nom</p>
                    <p className="text-red-500">Nom</p>
                </div>
                <div>
                    <p className="text-white text-[12px]">Swift delivery</p>
                </div>
            </div>

            <div>
                <p className='text-gray-600'>NOMNOM</p>
                <button className='text-[16px] text-white'>Home</button>
                <button className='text-[16px] text-white'>Contact us</button>
                <button className='text-[16px] text-white'>Delivery zone</button>
            </div>


            <div>
                <p className='text-gray-600'>MENU</p>
                <button className='text-[16px] text-white'>Appetizer</button>
                <button className='text-[16px] text-white'>Salads</button>
                <button className='text-[16px] text-white'>Pizzas</button>
                <button className='text-[16px] text-white'>Main dishes</button>
                <button className='text-[16px] text-white'>Dessserts</button>
            </div>
            <div>
                <p className='text-gray-600'>MENU</p>
                <button className='text-[16px] text-white'>Side dish</button>
                <button className='text-[16px] text-white'>Brunch</button>
                <button className='text-[16px] text-white'>Desserts</button>
                <button className='text-[16px] text-white'>Beverages</button>
                <button className='text-[16px] text-white'>Fish & Sea foods</button>
            </div>

            <div className='flex'>
                <p className='text-gray-600'>FOLLOW US</p>
                <img className='w-[28px] h-[28px]' src='facebook.png'></img>
                <img className='w-[28px] h-[28px]' src='instagram.png'></img>
            </div>

        </div>
    )
}

export default Footer;