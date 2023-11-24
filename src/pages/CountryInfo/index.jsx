import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./countryInfo.css";
import { getCountryData } from "../../utils/helper";
import { AppContext } from "../../context/AppContext";
import Button from "../../Components/Button";

const CountryInfo = () => {
  const navigate = useNavigate();
  const { countryName } = useContext(AppContext);

  const [countryData, setCountryData] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleSubmit = () => {
    navigate("capital-weather");
  };

  useEffect(() => {
    // Ensure that countryName is not null before calling getCountryData
    if (countryName) {
      setLoading(true);
      // getCountryData is a async function that fetch coutries based on user input
      getCountryData(countryName, setCountryData, setLoading);
    }
  }, [countryName]);

  if (loading) {
    return <div>Loading Data...</div>;
  }

  return (
    <div className="country_info">
      {countryData?.map(({ name, capital, population, latlng, flags }, i) => {
        return (
          <div key={i} className="country_info_card">
            <p>Country Name: {name?.common}</p>
            <p>Capital: {capital[0]}</p>
            <p>Population: {population}</p>
            <p>Lattitude: {latlng[0]}</p>
            <p>Longitude: {latlng[1]}</p>
            <img
              src={flags?.png}
              alt={`Flag of ${name?.common}`}
              style={{ width: "100px", height: "65px" }}
            />

            <br />
            <Button
              handleClick={handleSubmit}
              value={"Capital Weather"}
              isDisabled={!countryName}
            />
            <br />
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default CountryInfo;
