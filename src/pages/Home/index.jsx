import { useContext } from "react";
import { useNavigate } from "react-router-dom/dist";
import { AppContext } from "../../context/AppContext";
import Button from "../../Components/Button";
import "./home.scss";

const Home = () => {
  const { countryName, setCountryName } = useContext(AppContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCountryName(e.target.value);
  };

  const handleSubmit = () => {
    navigate("/country");
  };

  return (
    <>
      <div className="home_main">
        <input
          type="text"
          placeholder="Enter Country"
          onChange={handleChange}
          className="input"
          value={countryName}
        />
        <Button
          value={"submit"}
          handleClick={handleSubmit}
          isDisabled={!countryName}
        />
      </div>
    </>
  );
};

export default Home;
