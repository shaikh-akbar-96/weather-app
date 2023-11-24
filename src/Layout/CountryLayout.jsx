import React from "react";
import { Outlet } from "react-router-dom";

const CountryLayout = () => {
  return (
    <div>
      <h1>Capital Weather</h1>
      <Outlet />
    </div>
  );
};

export default CountryLayout;
