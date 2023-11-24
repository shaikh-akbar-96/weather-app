import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button";

const Login = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/home");
  };
  return (
    <>
      <Button value={"Login"} handleClick={handleClick} />
      {/* <button onClick={() => navigate("/home")}>Login</button> */}
    </>
  );
};

export default Login;
