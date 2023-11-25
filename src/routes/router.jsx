import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import CountryInfo from "../pages/CountryInfo";
import CapitalWeather from "../pages/CapitalWeather";
import Home from "../pages/Home";
import Login from "../Auth/Login";
import CountryLayout from "../Layout/CountryLayout";
import RootLayout from "../Layout/RootLayout";
import Register from "../Auth/Register";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<RootLayout />}> 
        <Route index element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="home" element={<Home />} />
        <Route path='country' element={<CountryLayout />}>
          <Route index element={<CountryInfo />} />
          <Route path="capital-weather" element={<CapitalWeather />} />
        </Route>
      </Route>
    </>
  )
);

export default router;
