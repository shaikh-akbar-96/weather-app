import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Root from "../Layout/Root";
import CountryInfo from "../pages/CountryInfo";
import CapitalWeather from "../pages/CapitalWeather";
import Home from "../pages/Home";
import Login from "../Auth/Login";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="" element={<Login />} />
      <Route path="home" element={<Home />} />
      <Route path="country-info" element={<CountryInfo />} />
      <Route path="capital-weather" element={<CapitalWeather />} />
    </Route>
  )
);

export default router;
