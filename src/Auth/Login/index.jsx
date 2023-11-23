import React from "react";
import { useNavigate } from "react-router-dom";
import "../../pages/Home/home.css";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/home")} className="loginBtn">
        Login
      </button>
    </div>
  );
};

export default Login;
