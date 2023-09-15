import React, { useEffect, useState } from "react";
import { search } from "../assets";
import { json } from "react-router-dom";


const SearchInput = () => {

    const [data, setData] = useState([])

    const [loading, setLoading] = useState(true)

    const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;

    // const searchMovie = () => {
    //     fetch(
    //         `https://api.themoviedb.org/3/search/movie?query=barbie&include_adult=false&language=en-US&page=1?api_key=${apiKey}`
    //     )
    //   //  ${document.getElementById("input").value}
    //     .then((res) => res.json())
    //     .then((json) => setData(json.results))
    //     .then(() => setLoading(false))
    //     .catch((err) => console.error(err))
    // }

    // useEffect(() => { 
    //     searchMovie()
    // }, [])

    
const handleSubmit = (e) =>{
    e.preventDefault()
}


  return (
    <div className="searchInput">
        <form action=""
        onSubmit={handleSubmit}
        >
      <input
      id="input"
        type="search"
        className="searchInput"
        placeholder="What do you want to watch?"
        onChange={(e) => e.target.value}
        
      ></input>
      <img src={search} alt="search" />

        </form>
    </div>
  );
};

export default SearchInput;
