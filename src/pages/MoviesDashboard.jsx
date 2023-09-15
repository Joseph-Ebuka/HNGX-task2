import React from "react";
import { SideBar } from "../components";
import { Outlet } from "react-router-dom";
import { CgMenuGridR } from "react-icons/cg";
import { AiOutlineHome } from "react-icons/ai";
import { SlCalender } from "react-icons/sl";
import { PiTelevisionDuotone } from "react-icons/pi";
import { BsCameraReels } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { tvIcon } from "../assets";

import Styled from "styled-components";
export const MoviesDashboard = () => {
  return (
    <MainWrapper>
      <Constant>
        <PhoneMenu>
          <img src={tvIcon}   alt="icon" />
          <NavLink to="/">
            <span>
              <AiOutlineHome
                style={{
                  width: "40px",
                  height: "40px",
                  color: "#b31212",
                }}
              />
            </span>
          </NavLink>
          <NavLink to="/dashboard/movies">
            <span>
              <BsCameraReels
                style={{
                  width: "40px",
                  height: "40px",
                  color: "#b31212",
                }}
              />
            </span>
          </NavLink>
          <NavLink to="/dashboard/tv-series">
            <span>
              <PiTelevisionDuotone
                style={{
                  width: "40px",
                  height: "40px",
                  color: "#b31212",
                }}
              />
            </span>
          </NavLink>
          <NavLink to="/dashboard/upcoming">
            <span>
              <SlCalender
                style={{
                  width: "40px",
                  height: "40px",
                  color: "#b31212",
                }}
              />
            </span>
          </NavLink>
        </PhoneMenu>
        <SideBar />
      </Constant>
      <Changing>
        <Outlet />
      </Changing>
    </MainWrapper>
  );
};

const MainWrapper = Styled.div`
  display:flex;
`;

const Constant = Styled.div`
flex:1;
display:flex;
flex-direction:column;
justify-content:space-around;
align-items:center;
`;
const Changing = Styled.div`
flex:5;
`;
const PhoneMenu = Styled.div`
display:flex;
flex-direction:column;
position:fixed;
top:10px;
padding:20px;
align-items:center;
gap:80px;
  @media (max-width:400px){
    position:static;
  }
  @media (min-width:768px){
    display:none;
  }
`;
