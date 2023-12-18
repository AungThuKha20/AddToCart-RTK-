/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const RouteGuard = ({ children }) => {
  const Location = useLocation();
  console.log(Location);
  if (Location.state != null) {
    return children;
  } else {
    return <Navigate to={"/"} />;
  }
};

export default RouteGuard;
