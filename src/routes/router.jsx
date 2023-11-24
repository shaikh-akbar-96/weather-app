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
import CountryLayout from "../Layout/CountryLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<Root />}>
        <Route index element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="country"  element={<CountryLayout />}>
          <Route path="info" element={<CountryInfo />} />
          <Route path="capital-weather" element={<CapitalWeather />} />
        </Route>
      </Route>
    </>
  )
);

export default router;
