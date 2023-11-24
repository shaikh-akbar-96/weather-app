import axios from "axios";

export const getCountryData = async (country_name,setCountryData,setLoading) => {
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
