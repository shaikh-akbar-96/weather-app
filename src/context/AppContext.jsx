import React, { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    userName: "",
    passWord: "",
  });
  const [countryName, setCountryName] = useState("");
  const [capitalName, setCapitalName] = useState("");
  const [countryData, setCountryData] = useState(null);
  const [capitalWeatherData, setCapitalWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        countryName,
        setCountryName,
        capitalName,
        setCapitalName,
        countryData,
        setCountryData,
        loading,
        setLoading,
        capitalWeatherData,
        setCapitalWeatherData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
