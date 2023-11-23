import React from "react";
import { Outlet } from "react-router-dom";
import "../pages/Home/home.css";
import "../pages/CountryInfo/countryInfo.css";
const Root = () => {
  return (
    <>
      <header className="header">Welcome To weather App!</header>
      <div className="main_container">
        <Outlet />
      </div>
      <footer className="footer">Website is made by @Aashu</footer>
    </>
  );
};

export default Root;
