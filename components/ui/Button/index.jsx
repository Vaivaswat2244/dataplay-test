import React from "react";

const Button = ({ children, onClick, variant = "default" }) => {
  return (
    <button
      onClick={onClick ? onClick : () => console.log("Button is Clicked!")}
      className={`${variant}-btn custom-btn`}
    >
      {children}
    </button>
  );
};

export default Button;
