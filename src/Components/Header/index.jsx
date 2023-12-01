import React, { useContext, useState } from "react";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import "../../pages/Home/home.scss";

const Header = () => {
  const { user, setUser } = useContext(AppContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser("");
    navigate("/");
  };

  const navigateToHome = () => {
    navigate("/home");
  };

  return (
    <header>
      <div className="header">
        <span>Welcome ! {user.userName}</span>
        {user.userName && (
          <nav
            className="headerButton
          "
          >
            <Button
              value={"Home"}
              handleClick={navigateToHome}
              isDisabled={false}
            />
            <Button
              value={"Logout"}
              handleClick={handleLogout}
              isDisabled={false}
            />
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
