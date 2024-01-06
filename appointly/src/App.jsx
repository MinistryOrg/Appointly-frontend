import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/App.css";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ServicesMenu from "./pages/ServiceMenu";
import { LoginProvider } from "./contexts/LoginContext";
import BrowseShops from "./pages/BrowseShops";
import { Shops } from "./Example";
import Shop from "./pages/Shop";

function App() {
  return (
    <>
      <LoginProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="shops" element={<BrowseShops />} />
            <Route path="shop/:id" element={<Shop />} />
            <Route path="/test" element={<Shop />} />
            <Route path="admin" element={<p>admin reeeeee</p>} />
            <Route path="*" element={<p>Not found re</p>} />
          </Routes>
        </BrowserRouter>
      </LoginProvider>
      {/* <Shops /> */}
    </>
  );
}

export default App;
