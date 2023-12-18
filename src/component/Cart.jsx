/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { useDispatch } from "react-redux";
import {
  decreaseQty,
  increaseQty,
  removeToCart
} from "../Service/CounterSlice";

const Cart = (props) => {
  const { id, price, title, description, image, rating, category, quantity } =
    props;
  const dispatch = useDispatch();
  const qtyPrice = price * quantity;

  return (
    <div className=" shadow-md container mx-auto  flex justify-around align-middle">
      <div className=" flex w-[350px] gap-5 align-middle ">
        <div>
          <img src={image} className="w-[60px] h-[80px] mt-1" alt="" />
        </div>
        <div>
          <p>{title.substring(0, 25)}...</p>
          <p>{qtyPrice.toFixed(2)}</p>
          <p
            onClick={() => dispatch(removeToCart(props))}
            className=" text-red-600 cursor-pointer"
          >
            Remove
          </p>
        </div>
      </div>
      <div className=" w-[20px] font-extrabold text-1xl">
        <p
          onClick={() => dispatch(increaseQty(props))}
          className=" cursor-pointer"
        >
          +
        </p>
        <p className=" font-medium">{quantity}</p>
        <p
          onClick={() => quantity > 1 && dispatch(decreaseQty(props))}
          className=" cursor-pointer"
        >
          -
        </p>
      </div>
    </div>
  );
};

export default Cart;
