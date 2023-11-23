import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./countryInfo.css";

const CountryInfo = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const countryName = new URLSearchParams(location.search).get("country_name");
  const [countryData, setCountryData] = useState(null);
  const [loading, setLoading] = useState(true);

  const getCountryData = async (country_name) => {
    const Api_Url = `https://restcountries.com/v3.1/name/${country_name}`;
    try {
      const { data } = await axios.get(Api_Url);
      setCountryData(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  const handleSubmit = () => {
    navigate(`/capital-weather`);
  };

  useEffect(() => {
    // Ensure that countryName is not null before calling getCountryData
    if (countryName) {
      setLoading(true);
      getCountryData(countryName);
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
            <button onClick={() => handleSubmit()}>Capital Weather</button>
            <br />
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default CountryInfo;
