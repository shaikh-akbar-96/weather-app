import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./countryInfo.css";
import { getCountryData } from "../../utils/helper";
import { AppContext } from "../../context/AppContext";
import Button from "../../Components/Button";
import Loading from "../../Components/Loading";

const CountryInfo = () => {
  const navigate = useNavigate();
  const {
    countryName,
    loading,
    setLoading,
    countryData,
    setCountryData,
    setCapitalName,
  } = useContext(AppContext);

  useEffect(() => {
    // Ensure that countryName is not null before calling getCountryData
    if (countryName) {
      setLoading(true);
      // getCountryData is a async function that fetch coutries based on user input
      getCountryData(countryName, setCountryData, setLoading);
    }
  }, []);

  const showCapitalWeather = (capital) => {
    const capital_name = capital ? capital[0] : "delhi";
    setCapitalName(capital_name);
    navigate("capital-weather"); 
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="country_info_container">
      {countryData?.map(({ name, capital, population, latlng, flags }, i) => {
        return (
          <div key={i} className="country_info_card">
            <p>Country Name: {name?.common}</p>
            <p>Capital: {capital ? capital[0] : "not"}</p>
            <p>Population: {population}</p>
            <p>Lattitude: {latlng[0]}</p>
            <p>Longitude: {latlng[1]}</p>
            <img
              src={flags?.png}
              alt={`Flag of ${name?.common}`}
              style={{ width: "100px", height: "65px" }}
            />
            <br />
            <br />
            <Button
              handleClick={() => showCapitalWeather(capital)}
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
