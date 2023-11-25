import axios from "axios";

export const getCountryData = async (
  countryName,
  setCountryData,
  setLoading
) => {
  const API_URL = `https://restcountries.com/v3.1/name/${countryName}`;
  try {
    const { data } = await axios.get(API_URL);
    setCountryData(data);
    // console.log(data);
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};

export const getCapitalWeatherData = async (
  capital_name,
  setCapitalWeatherData,
  setLoading
) => {
  const API_URL = `https://api.weatherapi.com/v1/current.json?key=dd1334ccb0e64fc0a99144806231402&q=${capital_name}`;

  try {
    const { data } = await axios.get(API_URL);
    setCapitalWeatherData(data);
    console.log(data);
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};
