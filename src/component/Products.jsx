/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Product from "./Product";
import Loadingg from "./Loadingg";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    const api = await fetch(`https://fakestoreapi.com/products`);
    const data = await api.json();
    setProducts(data);
    setLoading(false);
  };
  // console.log(products);
  if (loading) {
    return <Loadingg />;
  }
  return (
    <div className=" flex flex-wrap gap-20 mt-10 justify-center">
      {products.map((product) => {
        return <Product key={product.id} {...product} />;
      })}
    </div>
  );
};

export default Products;
