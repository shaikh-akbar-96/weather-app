import React, { useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import { getCapitalWeatherData } from "../../utils/helper";
import Loading from "../../Components/Loading";
import "./capital.scss";

const CapitalWeather = () => {
  const {
    loading,
    capitalWeatherData,
    capitalName,
    setCapitalWeatherData,
    setLoading,
  } = useContext(AppContext);

  const { current } = capitalWeatherData || {};
  const { temp_f, condition, wind_kph, precip_mm } = current || {};
  const { icon } = condition || {};

  useEffect(() => {
    if (capitalName) {
      setLoading(true);
      getCapitalWeatherData(capitalName, setCapitalWeatherData, setLoading);
    }
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div className="capital_weather_container">
        <p>
          <span className="capital_info">Capital Temprature:</span> {temp_f}
        </p>
        <p>
          <span>
            <img src={icon} alt="weather-icon" />
          </span>
        </p>
        <p>
          <span className="capital_info">wind_kph:</span> {wind_kph}
        </p>
        <p>
          <span className="capital_info">precip_mm: </span>
          {precip_mm}
        </p>
      </div>
    </>
  );
};
//
export default CapitalWeather;
