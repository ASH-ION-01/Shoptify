


import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalamount, settotalamount] = useState(0);

  useEffect(() => {
    settotalamount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart, settotalamount]); 

  return (
    <div className="w-screen flex justify-center ">
      {cart.length > 0 ? (
        <div className="w-[1080px] flex flex-row">
          <div className="w-1/2">
            {cart.map((item, index) => (
              <div className="flex flex-col mt-5" key={item.id}>
                <CartItem key={item.id} item={item} itemindex={index}></CartItem>
              </div>
            ))}
          </div>

          <div className="w-1/2 flex flex-col justify-between items-left
           h-[540px] ml-8 mt-24">
            <div className="flex-col text-green-600">
              <div className=" font-extrabold text-[3rem]">Your Cart</div>
              <div className=" font-extrabold text-[4rem]">Summary</div>
              <p className=" text-black font-bold text-[1.5rem]">
                <span>Total Items:{cart.length}</span>
              </p>
            </div>

            <div className="flex flex-col gap-y-3 items-start">
              <p className=" font-bold text-[28px]">Total Amount:${totalamount}</p>
              <button className="w-full h-[4rem] font-extrabold text-white text-[2rem] rounded-2xl bg-green-600">Checkout Now</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-screen flex justify-center ">
          <div className="flex flex-col justify-center items-center w-[1080px] h-screen">
            <h1 className=" font-extrabold text-[4rem]">Cart is Empty!</h1>
            <NavLink to={"/"}>
              <button className="border-solid border-2 border-green-600 bg-green-600 rounded-3xl h-[4rem] w-[12rem] text-white font-bold text-[1.5rem]">Shop now</button>
            </NavLink>
          </div>
        </div>
        
      )}
    </div>
  );
};

export default Cart;
