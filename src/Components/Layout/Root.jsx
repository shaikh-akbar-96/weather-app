import React from "react";
import { Outlet } from "react-router-dom";
// import LoginPage from "../Login";
// import CountryInfo from "../CountryInfo";

const Root = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Root;
