import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "../src/routes/router.jsx";
// import LoginPage from "./Components/Login";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
