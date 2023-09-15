import React, { useEffect, useState } from "react";
import { Loader } from "./Loader";
import { useParams , NavLink} from "react-router-dom";
import Styled from "styled-components";

const SuggestedMovies = () => {
  const [loading, setLoading] = useState(true);

  const [suggested, setSuggested] = useState([]);

  const { id } = useParams();

  const getMovie = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=4d7ac1ac300688e908264e174c9ff81e`
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
        top:"-20px",
        zIndex:"10",
        fontWeight:"600",
        fontFamily:"DM Sans, sans-serif"
      }}
      >Suggested Movies</div>
      <>
      
        {suggested.map((image) => {
          return (
            <NavLink to={`/dashboard/${image.id}`}
            key={image.id}
            style={{
              textDecoration:"none",
              cursor:"pointer"
            }}
            >
              
            <div >
             
              <SuggestedImage
             
              >
                <img
                  src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
                  alt="suggestedmovies"
                  style={{
                    width: "100%",
                    height:"120px"
                  }}
                />
              </SuggestedImage>
            </div>
            <div
            style={{
              color:"#042727",
              fontSize:"9px"
            }}
            >{image.title}</div>
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
