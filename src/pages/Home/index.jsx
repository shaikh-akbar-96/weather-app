import { useState } from "react";
// import "./LoginPage.css";
import { useNavigate } from "react-router-dom/dist";
const Home = () => {
  const [input, setInput] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    navigate(`/country-info?country_name=${input}`);
  };

  return (
    <>
      <div className="Login">
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
