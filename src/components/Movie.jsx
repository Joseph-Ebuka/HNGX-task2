import React, { useState, useEffect } from "react";
import { AiTwotoneHeart } from "react-icons/ai";
import { Bounce } from "react-awesome-reveal";

import { ratings, tomato } from "../assets";
import { Loader } from "./Loader";
import { NavLink } from "react-router-dom";

const Movie = () => {
  const [loading, setLoading] = useState(true);

  const [movieList, setMovieList] = useState([]);



  const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
  const getMovie = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`
    )
      .then((res) => res.json())
      .then((json) => setMovieList(json.results.slice(0, 10)))
      .then(() => setLoading(false))
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    getMovie();
  }, []);

  console.log(movieList)
  return (
    <div className="mainMovie">
      {loading && <Loader />}
      {movieList.map((content) => {
        return (
          <NavLink to={`/dashboard/${content.id}`}
          key={content.id}
          style={{
            textDecoration:"none",
          }}
          >
          <div key={content.id} data-testid="movie-card">
            <Bounce triggerOnce>
              <div>
                <div className="movieContent" >
                  <img
                    data-testid="movie-poster"
                    src={`https://image.tmdb.org/t/p/original/${content.poster_path}`}
                    alt=""
                  />
                  <span data-testid="movie-realease-date">
                    {content.release_date}
                  </span>
                  <h3 data-testid="movie-title">{content.original_title}</h3>
                  <div className="ratings">
                    <div className="ratings1">
                      <img src={ratings} alt="ratings" />
                      <span>{content.popularity}</span>
                    </div>
                    <div className="ratings2">
                      <img src={tomato} alt="tomato" />
                      <span>{content.vote_count}</span>
                    </div>
                  </div>
                  <span> Action & Adventure</span>
                  <div className="series">
                    <span></span>
                    <p>
                      <AiTwotoneHeart />
                    </p>
                  </div>
                </div>
              </div>
            </Bounce>
          </div>
          </NavLink>
        );
      })}
    </div>
  );
};

export default Movie;
