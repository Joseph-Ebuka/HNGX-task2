import React from "react";
import { search } from "../assets";


const SearchInput = () => {
  return (
    <div className="searchInput">
      <input
        type="search"
        className="searchInput"
        placeholder="What do you want to watch?"
      ></input>
      <img src={search} alt="search" />
    </div>
  );
};

export default SearchInput;
