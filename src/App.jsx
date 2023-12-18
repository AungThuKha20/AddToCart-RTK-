/* eslint-disable no-unused-vars */
import React from "react";
import "animate.css";

// import { useDispatch, useSelector } from "react-redux";
// import { increment } from "./Service/CounterSlice";
import { Route, Routes } from "react-router-dom";
import Products from "./component/Products";
import Navbar from "./component/Navbar";
import AddToCart from "./component/AddToCart";
import SearchItem from "./component/SearchItem";

import Loadingg from "./component/Loadingg";
import RouteGuard from "./component/RouteGuard";

const App = () => {
  // const { value } = useSelector((state) => state.counter);
  // const dispatch = useDispatch();

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />}></Route>
        <Route path="/addToCart" element={<AddToCart />}></Route>
        <Route
          path="/searchItem"
          element={
            <RouteGuard>
              <SearchItem />
            </RouteGuard>
          }
        ></Route>
      </Routes>
    </div>
  );
};

export default App;
