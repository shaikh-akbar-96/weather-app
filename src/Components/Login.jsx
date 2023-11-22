import { useState } from "react";
// import "./LoginPage.css";
import { useNavigation } from "react-router-dom";
const LoginPage = () => {
  const [input, setInput] = useState("");
  const history = useNavigation();
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const onSubmitButton = (e) => {
    e.preventDefault();
    console.log("submitted", input);
    const Api_Url = `https://restcountries.com/v3.1/name/${input}`;
    const fetchApi = async () => {
      try {
        let response = await fetch(Api_Url);
        console.log(response);
        if (response.ok) {
          let data = await response.json();
          console.log(data);
          setInput(data);
          history.push({
            pathname: "/CountryInfo",
            state: { data: setInput(data) },
          });
        } else {
          console.error("failed to fetch the data");
          console.error("API Error:", response.status, response.statusText);
        }
      } catch (error) {
        console.log("error during fetch", error);
      }
    };

    fetchApi();
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
          />
        </div>
        <div>
          <button
            className="button"
            type="submit"
            onClick={onSubmitButton}
            disabled={!input}
          >
            submit
          </button>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
