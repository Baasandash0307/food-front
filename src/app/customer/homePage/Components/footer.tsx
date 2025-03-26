export const Footer = () => {
  return (
    <div className="w-[1700px] h-[230px] grid grid-cols-5 mt-20">
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
        <p className="text-gray-600">NOMNOM</p>
        <div>
          <button className="text-[16px] text-white">Home</button>
        </div>
        <div>
          <button className="text-[16px] text-white">Contact us</button>
        </div>
        <div>
          <button className="text-[16px] text-white">Delivery zone</button>
        </div>
      </div>

      <div>
        <p className="text-gray-600">MENU</p>
        <div>
          <button className="text-[16px] text-white">Appetizer</button>
        </div>
        <div>
          <button className="text-[16px] text-white">Salads</button>
        </div>
        <div>
          <button className="text-[16px] text-white">Pizzas</button>
        </div>
        <div>
          <button className="text-[16px] text-white">Main dishes</button>
        </div>
        <div>
          <button className="text-[16px] text-white">Dessserts</button>
        </div>
      </div>
      <div>
        <p className="text-gray-600">MENU</p>
        <div>
          <button className="text-[16px] text-white">Side dish</button>
        </div>
        <div>
          <button className="text-[16px] text-white">Brunch</button>
        </div>
        <div>
          <button className="text-[16px] text-white">Desserts</button>
        </div>
        <div>
          <button className="text-[16px] text-white">Beverages</button>
        </div>
        <div>
          <button className="text-[16px] text-white">Fish & Sea foods</button>
        </div>
      </div>

      <div className="">
        <p className="text-gray-600">FOLLOW US</p>
        <img className="w-[28px] h-[28px]" src="facebook.png"></img>
        <img className="w-[28px] h-[28px]" src="instagram.png"></img>
      </div>
    </div>
  );
};

export default Footer;
