import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

import { Movie } from "../components";
import { useNavigate } from "react-router-dom";

const FeaturedMovies = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="featuredMovies">
        <div className="featuredMoviesContent">
          <div className="header">
            <h3>Featured Movies</h3>
            <span onClick={() => navigate("/dashboard")}>
              see more <BsFillArrowRightCircleFill />{" "}
            </span>
          </div>
          <Movie />
        </div>
      </div>
    </>
  );
};

export default FeaturedMovies;
