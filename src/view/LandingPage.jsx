import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { ratings, tomato } from "../assets";
import { Loader } from "../components";
import styled from "styled-components";

 const  LandingPage = () => {
  const [posterMovies, setPosterMovies] = useState([]);

  const [loading, setLoading] = useState(true);

  const getMovie = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=4d7ac1ac300688e908264e174c9ff81e"
    )
      .then((res) => res.json())
      .then((json) => setPosterMovies(json.results.slice(0, 1)))
      .then(() => setLoading(false))
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <>
      {posterMovies.map((movie) => {
        return (
          <div className="landingPage"
          key={movie.id}
          >
            <LandingPageComp style={{
              backgroundImage:`url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`
            }}>

            {loading && <Loader />}
            <div className="landingPageContents">
              <Navbar />
              <div className="watchNow">
                <div className="header">
                  <span> {movie.original_title}</span>
                  <div className="ratingContent">
                    <div className="ratings">
                      <img src={ratings} alt="ratings" />
                      <p>860/100</p>
                    </div>
                    <div className="tomato">
                      <img src={tomato} alt="tomatoes" />
                      <p>97%</p>
                    </div>
                  </div>
                </div>
                <div className="content">{movie.overview}</div>
                <div className="watch">
                  <button>
                    <span>
                      <img src={tomato} alt="i" />
                      <span>Watch Trailer</span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
            </LandingPageComp>
          </div>
        );
      })}
    </>
  );
};

const LandingPageComp = styled.div`
  font-family: $primary-font;
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0.5) 100%
    ), lightgray 50%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  color: white;
  width: 100%;
  height: 80vh;
  @media (max-width:768px) {
    flex-direction: column;
    height: 50vh;
  }


`

export default LandingPage;
