import React from "react";


export const Loader = () => {
  return (
    <div className="loader" 
    style={{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      height:"30vh"
    }}>

    <div className="spinner" >
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    </div>
  );
};

