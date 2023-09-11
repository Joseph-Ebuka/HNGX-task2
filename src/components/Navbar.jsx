import React from "react";
import { tvIcon } from "../assets";
import SearchInput from "./Searchinput";
import SignIn from "./SignIn";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbarContents">
        <div className="logoTitle">
          <img src={tvIcon} alt="icon" />
          <span>MovieBox</span>
        </div>
        <div className="searchInput">
          <SearchInput />
        </div>
        <div className="signIn">
          <SignIn />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
