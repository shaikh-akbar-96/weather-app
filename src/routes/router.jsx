import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Root from "../Components/Layout/Root";
import LoginPage from "../Components/Login";
import CountryInfo from "../Components/CountryInfo";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="LoginPage" element={<LoginPage />} />
      <Route path="CountryInfo" element={<CountryInfo />} />
    </Route>
  )
);

export default router;
