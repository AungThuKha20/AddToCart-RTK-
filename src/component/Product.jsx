/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React from "react";
import { Rating } from "@mantine/core";
import { useDispatch } from "react-redux";
import { addToCart } from "../Service/CounterSlice";

const Product = (props) => {
  const { id, title, image, description, price, category, rating } = props;
  const dispatch = useDispatch();
  return (
    <div className=" w-[350px] shadow-lg p-[20px]">
      <img src={image} className=" h-[200px]" alt="" />
      <h1 className=" text-[18px] font-bold">{title.substring(0, 30)}...</h1>
      <div className="flex justify-between mt-2">
        <p className=" bg-emerald-900 rounded-full px-[10px] py-[1px] font-extrabold text-white">
          {category}
        </p>
        <p className="  bg-emerald-900 rounded-full px-[10px] py-[1px] font-extrabold text-white">
          ${price}
        </p>
      </div>
      <p className=" mt-2 font-medium text-[10px] text-gray-800">
        {description.substring(0, 60)}...
      </p>
      <div className=" mt-2">
        {" "}
        <Rating
          value={rating.rate}
          color="rgba(47, 138, 29, 1)"
          fractions={2}
          readOnly
        />
      </div>
      <div className=" animate__animated animate__headShake animate__infinite mt-3  flex justify-center">
        <button
          onClick={() => dispatch(addToCart(props))}
          className=" bg-slate-50 border border-emerald-900 rounded-md w-full py-1 hover:bg-emerald-900 hover:text-white"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
