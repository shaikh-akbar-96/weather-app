import React from "react";
import "./button.scss";

const Button = ({ value, handleClick, isDisabled }) => {
  return (
    <button
      className={`btn ${isDisabled ? "disabled" : ""}`}
      onClick={handleClick}
      disabled={isDisabled}
    >
      {value}
    </button>
  );
};

export default Button;
