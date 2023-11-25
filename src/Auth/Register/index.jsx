import React from "react";
import Button from "../../Components/Button";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const naviaget = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Register");
    naviaget("/");
  };

  //validation logics
  return (
    <form className="login_container" onSubmit={handleSubmit}>
      <input className="input" placeholder="Enter Name" />
      <input className="input" placeholder="Enter Email" />
      <input className="input" placeholder="Enter Password" />
      <input className="input" placeholder="Confirm Password" />
      <Button value={"Register"} />
    </form>
  );
};

export default Register;
