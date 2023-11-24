import React, { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [countryName, setCountryName] = useState("");
  const [capitalName, setCapitalName] = useState("");
  return (
    <AppContext.Provider
      value={{ countryName, setCountryName, capitalName, setCapitalName }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
