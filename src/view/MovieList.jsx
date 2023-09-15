import React, { useState, useEffect } from "react";
import { AiTwotoneHeart } from "react-icons/ai";
import { Bounce } from "react-awesome-reveal";
import {MdKeyboardBackspace} from "react-icons/md"
import { useNavigate } from "react-router-dom";




import { ratings, tomato } from "../assets";
import { Loader } from "../components";
import { NavLink } from "react-router-dom";

const Movie = () => {
  const [loading, setLoading] = useState(true);
  let navigate = useNavigate()
  const [movieList, setMovieList] = useState([]);

  const getMovie = () => {
    fetch(
      " https://api.themoviedb.org/3/discover/movie?api_key=4d7ac1ac300688e908264e174c9ff81e"
     
    )
      .then((res) => res.json())
      .then((json) => setMovieList(json.results.slice(0, 40)))
      .then(() => setLoading(false))
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div className="mainMovie">
      <MdKeyboardBackspace style={{
        position:"fixed",
        top:"1",
        left:"1",
        width:"30px",
        height:"30px",
        cursor:"pointer",

      }}
      onClick={()=> navigate(-1)}
      />
      {loading && <Loader />}
      {movieList.map((content) => {
        return (
          <NavLink to={`/dashboard/${content.id}`} data-testid="movie-card"style={{
            textDecoration:"none",
            
          }}>
          <div key={content.id}>
            <Bounce triggerOnce>
              <div>
                <div className="movieContent">
                  <img
                    data-testid="movie-poster"
                    src={`https://image.tmdb.org/t/p/original/${content.poster_path}`}
                    alt=""
                  />
                  <span
                  data-testid="movie-realease-date"
                  >{content.release_date}</span>
                 
                  <h3
                  data-testid="movie-tittle"
                  >{content.original_title}</h3>
                 
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
