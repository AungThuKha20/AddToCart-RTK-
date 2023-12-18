/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

import { Rating } from "@mantine/core";
import { useDispatch } from "react-redux";
import { addToCart } from "../Service/CounterSlice";

const SearchItemChild = (props) => {
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
      <div className=" mt-3 flex justify-between">
        <button
          onClick={() => dispatch(addToCart(props))}
          className=" bg-slate-50 border border-emerald-900 rounded-2xl px-[10px] py-1 hover:bg-emerald-900 hover:text-white"
        >
          Add To Cart
        </button>
        <button className=" bg-slate-50 border border-emerald-900 rounded-2xl px-[10px] py-1 hover:bg-emerald-900 hover:text-white">
          Details
        </button>
      </div>
    </div>
  );
};

export default SearchItemChild;
