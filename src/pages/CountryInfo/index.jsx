import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./countryInfo.css";

const CountryInfo = () => {
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
      {countryData?.map(({ name, capital }, i) => {
        return (
          <div key={i} className="country_info_card">
            <p>Country Name: {name?.common}</p>

            <br />
            <button>Capital Weather</button>
            <br />
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default CountryInfo;
