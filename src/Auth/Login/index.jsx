import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../Components/Button";
import "./login.scss";
import { AppContext } from "../../context/AppContext";

const Login = () => {
  const [currentUser, setCurrentUser] = useState({});
  const { setUser } = useContext(AppContext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ ...currentUser });
    navigate(`home`);
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    if (name === "name") {
      setCurrentUser((user) => ({ ...user, userName: value }));
    } else if (name === "password") {
      setCurrentUser((user) => ({ ...user, passWord: value }));
    }
  };

  return (
    <form className="login_container" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={currentUser.userName}
        onChange={handleChange}
        className="input"
        placeholder="Enter username..."
      />
      <input
        type="password"
        name="passWord"
        value={currentUser.passWord}
        onChange={handleChange}
        className="input"
        placeholder="Enter password..."
      />
      <Button value={"Login"} isDisabled={false} />
      <p>
        Don't have account ? <Link to="register">Register</Link>
      </p>
    </form>
  );
};

export default Login;
