import React from "react";

const Button = ({ handleClick, type, content,  title , }) => {
  const generateStyle = () => {
    if (type === "filled") {
      return {
        backgroundColor: "#d10538",
        color: "#fff",
        ouline:"none",
        border:"none",
        padding:"7px 10px",
        borderRadius:'5px',
        width:"320px",
        
        
       
      };
    } else if (type === "outline") {
      return {
        backgroundColor: "rgba(190, 18, 60, 0.10)",
        border: "1px solid #BE123C",
        width:"320px",
        padding:"7px 10px",
        borderRadius:'5px',
        gap:"10px",
        
      };
    }else{
      return{
        backgroundColor: "#d10538",
        color: "#fff",
        ouline:"none",
        border:"none",
        padding:"7px 10px",
        borderRadius:'5px',
        width:"200px",
      }
    }
  };

  return (
    <button style={generateStyle(type)} onClick={handleClick}
    >
    {content}  {title}
    </button>
  );
};

export default Button;
