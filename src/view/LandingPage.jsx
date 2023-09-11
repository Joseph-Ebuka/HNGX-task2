import React from "react";
import Navbar from "../components/Navbar";
import { ratings, tomato } from "../assets";

const LandingPage = () => {
  return (
    <div className="landingPage">
      <Navbar />
      <div className="watchNow">
        <div className="header">
          <span> John Wick 3 : Parabellum</span>
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
        <div className="content">
          John Wick is on the run after killing a member of the international
          assassins' guild, and with a $14 million price tag on his head, he is
          the target of hit men and women everywhere.
        </div>
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
  );
};

export default LandingPage;
