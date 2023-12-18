/* eslint-disable no-unused-vars */
import React from "react";
import { useLocation } from "react-router-dom";
import SearchItemChild from "./SearchItemChild";

const SearchItem = () => {
  const Location = useLocation();
  console.log(Location);
  const item = Location?.state?.filterPd;

  console.log(item);
  return (
    <div className="flex flex-wrap gap-20 mt-10 justify-center">
      {item?.map((pd) => {
        return <SearchItemChild key={pd.id} {...pd} />;
      })}
    </div>
  );
};

export default SearchItem;
