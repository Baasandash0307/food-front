

const ProductCard = () => {



    return (
        <div className="w-[500px] h-[450px] bg-white rounded-xl">
            <div className="flex justify-center items-center">
                <img className="w-[470px] h-[300px] mt-4 p-1 rounded-2xl object-cover" src="foodpic.png" alt=""></img>
                <button className="w-11 h-11 rounded-3xl absolute bg-white text-red-500 mt-50 ml-90 cursor-pointer" type="submit">+</button>
            </div>
            <div className="w-[384px]">
                <div className="flex justify-between ml-5 mt-5 items-center">
                    <p className="text-red-500 text-[25px] font-bold">Finger food</p>
                    <p>$12.99</p>
                </div>
            </div>
            <p className="text-[14px] ml-5">Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.</p>
        </div>
    )
}

export default ProductCard