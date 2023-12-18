/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { TextInput } from "@mantine/core";
import { SiShopify } from "react-icons/si";
import { RiSearchEyeFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { TbShoppingCartStar } from "react-icons/tb";
import { useSelector } from "react-redux";
const Navbar = () => {
  const icon = <RiSearchEyeFill />;
  const { cartItems } = useSelector((state) => state.cart);
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const Navigate = useNavigate();
  useEffect(() => {
    fetchPd();
  }, []);

  const fetchPd = async () => {
    const api = await fetch(`https://fakestoreapi.com/products`);
    const data = await api.json();
    setProducts(data);
  };
  console.log(products);
  // console.log(cartItems);

  const filterPd = products.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );
  console.log(filterPd);

  const submitHandler = (e) => {
    e.preventDefault();
    Navigate("/searchItem", { state: { filterPd } });
  };

  return (
    <div className=" shadow-lg py-2 container mx-auto shadow-gray-100 mt-3 flex justify-around align-middle">
      <Link to={"/"}>
        <p className="">
          <SiShopify className=" text-[50px] text-emerald-800" />
        </p>
      </Link>
      <div className=" flex justify-end align-middle">
        <form onSubmit={submitHandler}>
          <TextInput
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            leftSectionPointerEvents="none"
            leftSection={icon}
            radius={50}
            placeholder="Search..."
            variant="filled"
          />
        </form>

        <Link to={"/addToCart"}>
          <div className=" ms-2">
            <p>
              <TbShoppingCartStar className=" relative text-[50px]" />
            </p>
            <p className=" absolute bg-emerald-800 px-1 top-[12px] ms-[32px] rounded-[100%] font-bold font-sans text-white text-center">
              {cartItems.length}
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
