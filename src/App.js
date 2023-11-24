import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "../src/routes/router.jsx";
import AppContextProvider from "./context/AppContext.jsx";

function App() {
  return (
    <AppContextProvider>
      <RouterProvider router={router} />
    </AppContextProvider>
  );
}

export default App;
