import React from "react";
import { SideBar } from "../components";
import { Outlet } from "react-router-dom";



import Styled from "styled-components";
export const MoviesDashboard = () => {
  return (
    <MainWrapper>
      <Constant>
        <SideBar />
      </Constant>
      <Changing>
      <Outlet/>
      </Changing>
     
    </MainWrapper>
  );
};
 
const MainWrapper = Styled.div`
  display:flex;
`

const Constant = Styled.div`
flex:1;
`
const Changing = Styled.div`
flex:5;
`