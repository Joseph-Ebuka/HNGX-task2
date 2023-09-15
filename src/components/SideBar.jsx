import React from "react";
import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { SlCalender } from "react-icons/sl";
import { BsCameraReels } from "react-icons/bs";
import { PiTelevisionDuotone } from "react-icons/pi";

import { tvIcon } from "../assets";

export const SideBar = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Container>
        <SideBar1>
          <Logo>
            <img src={tvIcon} alt="" /> <span>MovieBox</span>
          </Logo>
          <Components>
            <nav>
              <NavLink to="/">
                <AiOutlineHome /> Home
              </NavLink>
              <NavLink to="/dashboard/movies">
                {" "}
                <BsCameraReels /> {"  "}Movies
              </NavLink>
              <NavLink to="/dashboard/tv-series">
                <PiTelevisionDuotone /> TV Series
              </NavLink>
              <NavLink to="/dashboard/upcoming">
                {" "}
                <SlCalender />
                Upcoming
              </NavLink>
            </nav>
          </Components>
          <FreeTickets>
            <div>Play movie quizes and earn free tickets</div>
            <span>50k people are playing now</span>
            <FreeTicketsButton>Start playing</FreeTicketsButton>
          </FreeTickets>
          <LogOutButton onClick={() => navigate("/")}>
            <BiLogOut /> Log out
          </LogOutButton>
        </SideBar1>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width:max-content;
  height: 100vh;
  flex:2;
  overflow: hidden;
  font-family: "Poppins", sans-serif;
  display: flex;
  @media (max-width:768px) {
  display:none;
    
  }
`;
const Container = styled.div`
  display: flex;
 
  overflow: hidden;
`;
const SideBar1 = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0px 45px 45px 0px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  background: #fff;
  width:226px;
  align-items: center;
  height: 100vh;
  gap: 15px;
`;

const Logo = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 5px;
  color: #333;
  font-family: "DM Sans", sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
`;
const Components = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: #666;
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    padding: 20px;
    transition: 0.3s ease;
    width: 100%;
    &:hover {
      background-color: #be123c1a;
    }
    &.active {
      background-color: #fa0d481a;
      border-bottom: 5px solid #c50837e8;
    }
  }
`;
const FreeTickets = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  width: 170px;
  height: 210px;
  flex-shrink: 0;
  border-radius: 20px;
  border: 1px solid rgba(190, 18, 60, 0.7);
  background: rgba(248, 231, 235, 0.4);
  padding: 10px;
  font-family: "Poppins", sans-serif;
  span {
    color: #666;
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;
const FreeTicketsButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #be123c;
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  width: 112px;
  height: 30px;
  border: 1px solid #be123c33;
  border-radius: 30px;
`;

const LogOutButton = styled.button`
  font-family: "Poppins", sans-serif;
  background-color: transparent;
  border: none;
  outline: none;
`;
