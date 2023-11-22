import React from "react";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <h1>Welcome To weather App!</h1>
      <Outlet />
      <p>Website is made by @Aashu</p>
    </>
  );
};

export default Root;
