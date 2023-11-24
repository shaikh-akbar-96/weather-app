import { useContext } from "react";
import "./home.css";
import { NavLink, useNavigate } from "react-router-dom/dist";
import { AppContext } from "../../context/AppContext";
import Button from "../../Components/Button";

const Home = () => {
  const { countryName, setCountryName } = useContext(AppContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCountryName(e.target.value);
  };

  const handleSubmit = (e) => {
    navigate(`country`);
  };
  // const handleKeyPress = (e) => {
  //   if (e.key === "Enter") {
  //     handleSubmit();
  //   }
  // };

  return (
    <>
      <div className="login">
        <div>
          <input
            type="text"
            placeholder="Enter Country"
            onChange={handleChange}
            className="Input"
            value={countryName}
          />
        </div>
        <div>
        <NavLink to="info">country_info</NavLink>
          {/* <Button
            value={"submit"}
            handleClick={handleSubmit}
            isDisabled={!countryName}
          /> */}
        </div>
      </div>
    </>
  );
};

export default Home;
