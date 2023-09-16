import React, { useEffect, useState } from "react";
import { Loader } from "./Loader";
import { useParams , NavLink} from "react-router-dom";
import Styled from "styled-components";

const SuggestedMovies = () => {
  const [loading, setLoading] = useState(true);

  const [suggested, setSuggested] = useState([]);

  const { id } = useParams();



  const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
  const getMovie = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${apiKey}`
    )
      .then((res) => res.json())
      .then((json) => setSuggested(json.results.slice(0, 3)))
      .then(() => setLoading(false))
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div style={{
      position:"relative",
      display:"flex"
    }}>
      {loading && <Loader />}
      <div
      style={{
        position:"absolute",
        top:"-15px",
        zIndex:"10",
        fontWeight:"600",
        fontFamily:"DM Sans, sans-serif",
          
      }}
      >Suggested Movies</div>
      <>
      
        {suggested.map((image) => {
          return (
            <NavLink to={`/dashboard/${image.id}`}
            key={image.id}
            style={{
              textDecoration:"none",
              cursor:"pointer",
              display:"flex",
                  gap:"2px",
                  flexDirection:"column",
                   justifyContent:"space-around"
            }}
            >
              
            <div 
            style={{
              textDecoration:"none",
              cursor:"pointer",
              display:"flex",
                  gap:"2px",
                  flexDirection:"column",
                   justifyContent:"space-around"
            }}>
             
              <SuggestedImage
                style={{
                  
                }}
              >
                <img
                  src={`https://image.tmdb.org/t/p/original${image.poster_path}`}
                  alt="suggestedmovies"
                  style={{
                    width: "105px",
                    height:"150px",
                   
                  }}
                />
              </SuggestedImage>
            </div>
            </NavLink>
          );
        })}
      </>
    </div>
  );
};
const SuggestedImage = Styled.div`
  display:flex;
  gap:10px;
`;
export default SuggestedMovies;
