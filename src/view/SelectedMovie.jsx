import React from "react";
import Styled from "styled-components";
import { AiOutlineStar } from "react-icons/ai";
import { IoTicketSharp } from "react-icons/io5";
import { HiOutlineMenu } from "react-icons/hi";

import { Button } from "../components";
import { topGun } from "../assets";

export const SelectedMovie = () => {
  return (
    <Wrapper>
      <Container>
        <Box1>
          
        </Box1>
        <Box2>
          <Box2Top>
            <p
              style={{
                display: "flex",
                gap: "25px",
              }}
            >
              Top Gun Maverick .2022 . PG-13 . 2h 10m{" "}
              <span
                style={{
                  color: "#B91C1C",
                  fontSize: "15px",
                  fontWeight: "500",
                }}
              >
                Action
              </span>{" "}
              <span
                style={{
                  color: "#B91C1C",
                  fontSize: "15px",
                  fontWeight: "500",
                }}
              >
                Drama
              </span>
            </p>
            <span>
              After thirty years, Maverick is still pushing the envelope as a
              top naval aviator, but must confront ghosts of his past when he
              leads TOP GUN's elite graduates on a mission that demands the
              ultimate sacrifice from those chosen to fly it.
            </span>
            <Box2BottomContent>
              <span>
                Director: <p>Joseph Kasinki</p>
              </span>
              <span>
                Writer: <p>Jim Cash, JAck Epps Jr, Peter Craig</p>
              </span>
              <span>
                Director: <p>Joseph Kasinki</p>
              </span>
              <div>
                <Button title="Top rated Movie #65" type="special" />
                <select
                  name=""
                  id=""
                  style={{
                    width: "300px",
                    textAlign: "left",
                    padding: "2px 10px",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  <option value="">Awards 9 nominations</option>
                  <option value="">best movie of the year</option>
                  <option value="">best movie of the year</option>
                  <option value="">best movie of the year</option>
                </select>
              </div>
            </Box2BottomContent>
          </Box2Top>
          <Box2-2>
            <div>
              <div>
                <AiOutlineStar
                  style={{
                    color: "goldenrod",
                  }}
                />{" "}
                <span>9.5</span> <p>350k</p>
              </div>
              <div>
                <Button
                  type="filled"
                  content={<IoTicketSharp />}
                  title="See Showtimes"
                ></Button>
                <Button
                  type="outline"
                  content={<HiOutlineMenu />}
                  title="More watch options"
                />
              </div>
            </div>
          </Box2-2>
        </Box2>
      </Container>
    </Wrapper>
  );
};

const Wrapper = Styled.div`
  display: flex;
  width:95%;
  flex:5;
  height:100vh;
  justify-content: center;
  align-items: center;
  padding:0 20px;
  overflow:hidden;
  font-family: 'Poppins', sans-serif !important;
`;

const Container = Styled.div`
  display:flex;
  flex-direction:column;
  width:100%;
  gap:20px;
`;

const Box1 = Styled.div`
  background-color:yellow;
  border-radius: 20px;
background: url(${topGun}), lightgray 50% / cover no-repeat;
  width: 100%;
  height: 45vh;
`;

const Box2 = Styled.div`
  display:flex;
  height: 45vh;
  
`;

const Box2Top = Styled.div`
  
  display:flex;
  flex-direction:column;
  gap:10px;
`;

const Box2BottomContent = Styled.div`
  display:flex;
  flex-direction:column;
  gap:20px;
  span{
    display:flex;
    gap:10px;
    p{
      color:#B91C1C;
    }
  }
`;
