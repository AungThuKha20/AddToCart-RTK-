import React from "react";
import { useSelector } from "react-redux";
import Cart from "./Cart";
import { Button } from "@mantine/core";

const AddToCart = () => {
  const { cartItems, totalAmount } = useSelector((state) => state.cart);
  console.log(cartItems);
  return (
    <div>
      <div>
        {cartItems.map((item) => {
          return <Cart key={item.id} {...item} />;
        })}
      </div>
      <hr className=" container mx-auto" />

      {cartItems.length === 0 ? (
        <div className=" mt-[100px] flex flex-col items-center">
          <p className=" text-emerald-900 font-serif text-3xl">
            Ur Item is Empty:(
          </p>
          <button className=" bg-emerald-800 text-white px-6 mt-2 py-1 rounded-3xl hover:bg-emerald-600">
            Fill It
          </button>
        </div>
      ) : (
        <div className=" flex justify-around align-middle">
          <h2>Total</h2>
          <p>{totalAmount.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
};

export default AddToCart;
