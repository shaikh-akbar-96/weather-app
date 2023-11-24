import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "../pages/Home/home.css";
import "../pages/CountryInfo/countryInfo.css";
import Button from "../Components/Button";
const Root = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/home");
  };
  return (
    <>
      <header className="header">
        Welcome To weather App!
        <Button value={"Home"} handleClick={handleClick} />
      </header>
      <div className="main_container">
        <Outlet />
      </div>
      <footer className="footer">Website is made by @Aashu</footer>
    </>
  );
};

export default Root;
