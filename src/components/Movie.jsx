import React, { useState, useEffect } from "react";
import { AiTwotoneHeart } from "react-icons/ai";
import {Bounce} from 'react-awesome-reveal'

import {  ratings, tomato } from "../assets";
import { Loader } from "./Loader";
import MovieSkeleton from "./MovieSkeleton";


const Movie = () => {
  const [loading, setLoading] = useState(true);

  const [movieList, setMovieList] = useState([]);

  const getMovie = () => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=4d7ac1ac300688e908264e174c9ff81e"
    )
      .then((res) => res.json())
      .then((json) => setMovieList(json.results))
      .then(() => setLoading(false))
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div className="mainMovie">
      {loading && <Loader/>}
      {movieList.map((content) => {
        return (
          <>
          <Bounce  cascade>
            <div key={content.id}>
              <div className="movieContent">
                <img
                  src={`https://image.tmdb.org/t/p/original/${content.poster_path}`}
                  alt=""
                />
                <span>{content.release_date}</span>
                <h3>{content.original_title}</h3>
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
                <span>{content.tagline}</span>
                <div className="series">
                  <span></span>
                  <p>
                    <AiTwotoneHeart />
                  </p>
                </div>
              </div>
            </div>
          </Bounce>
          </>
        );
      })}
    </div>
  );
};

export default Movie;
