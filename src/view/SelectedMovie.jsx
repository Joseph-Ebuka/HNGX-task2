import React, { useState, useEffect } from "react";
import { json, useParams } from "react-router-dom";
import Styled from "styled-components";
import { AiOutlineStar } from "react-icons/ai";
import { IoTicketSharp } from "react-icons/io5";
import { HiOutlineMenu } from "react-icons/hi";

import { Button, Loader, SuggestedMovies} from "../components";


export const SelectedMovie = () => {
  const [data, setData] = useState([]);
  const [crew, setCrew] = useState([])

  const { id } = useParams();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=4d7ac1ac300688e908264e174c9ff81e&language=en-US&page=1&2`
      );
      // Checks if the fetch was successful
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      // Parses the response as JSON and update the state
      const data = await res.json();
      setLoading(false)
      setData(data);
    };
    fetchData();
  }, [id]);


  useEffect(() => {
    const getCrewData = async () => {
      const results = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=4d7ac1ac300688e908264e174c9ff81e`
      );
      // Checks if the fetch was successful
      if (!results.ok) {
        throw new Error("Failed to fetch data");
      }
      // Parses the response as JSON and update the state
      const crew = await results.json();
      setCrew(crew);
    };
    getCrewData();
  }, [id]);



  return (
    <>
      <Wrapper>
        <Container>
          {loading && <Loader/>}
          <Box1
            style={{
              backgroundImage: `url("https://image.tmdb.org/t/p/original${data.backdrop_path}")`,
            }}
          ></Box1>
          <Box2>
            <Box2Top>
              <p
                style={{
                  display: "flex",
                  gap: "25px",
                }}
              >
                {data.original_title}.{data.release_date} . PG-13 .{" "}
                {data.runtime} minutes
                <span
                  style={{
                    color: "#B91C1C",
                    fontSize: "15px",
                    fontWeight: "500",
                  }}
                >
                   {/* {data.genres[0].name} */}
                   Drama
                </span>{" "}
                <span
                  style={{
                    color: "#B91C1C",
                    fontSize: "15px",
                    fontWeight: "500",
                  }}
                >
                   {/* {data.genres[1].name} */}
                  
                  Action
                </span>
              </p>
              <span>{data.overview}</span>
              <Box2BottomContent>
                <span>
                  Director: <p>
                    {/* {crew.crew[0].name} */}
                  </p>
                </span>
                <span>
                  Writer: <p>
                    {/* {crew.crew[0].name} */}
                  </p>
                </span>
                <span>
                  Director: <p>
                    {/* {crew.crew[0].name} */}
                    </p>
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
            <Box2Part2>
              <Box2Part2TopContent>
                <div>
                  <span>
                    <AiOutlineStar
                      style={{
                        color: "goldenrod",
                      }}
                    />{" "}
                    <span>8.5</span> <p>350k</p>
                  </span>
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
              </Box2Part2TopContent>
              <Box2Part2BottomContent>
                <SuggestedMovies2>
                  <SuggestedMovies/>
                </SuggestedMovies2>
              </Box2Part2BottomContent>
            </Box2Part2>
          </Box2>
        </Container>
      </Wrapper>
    </>
  );
};
const Box2Part2 = Styled.div`
display:flex;
flex-direction:column;
gap:10px;
`;
const Box2Part2BottomContent = Styled.div`

`;
const SuggestedMovies2 = Styled.div`
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  width:320px;
  height:170px;
  gap:2px;
  border:1px solid red;
`;
const Box2Part2TopContent = Styled.div`
div{
  display : flex;
  flex-direction:column;
  gap:20px;
  span{
    display:flex;
    justify-content:flex-end;
    align-items:center;
    gap:10px;
    span{
      color: #666;
    }
  }

}
`;
const Wrapper = Styled.div`
  display: flex;
  width:95%;
  flex:5;
  height:100vh;
  justify-content: center;
  align-items: center;
  padding:0 20px;
  font-family: 'Poppins', sans-serif !important;
  @media (max-width:768px) {
    flex-direction:column;
  }
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
background:  lightgray 50% / cover no-repeat;
  width: 100%;
  height: 45vh;
  background-position:center;
`;

const Box2 = Styled.div`
  display:flex;
  height: 45vh;
  @media (max-width:768px) {
    flex-wrap:wrap;
    
  }
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
