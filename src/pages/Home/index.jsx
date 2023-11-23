import { useState } from "react";
// import "./LoginPage.css";
import "./home.css";
import { useNavigate } from "react-router-dom/dist";
const Home = () => {
  const [input, setInput] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    navigate(`/country-info?country_name=${input}`);
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <>
      <div className="login">
        <div>
          <input
            type="text"
            placeholder="Enter Country"
            onChange={handleChange}
            className="Input"
            value={input}
          />
        </div>
        <div>
          <button
            className="button"
            type="submit"
            onClick={() => handleSubmit()}
            onKeyDown={() => handleKeyPress()}
            disabled={!input}
          >
            submit
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
