import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/App.css";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { LoginProvider } from "./contexts/LoginContext";
import BrowseShops from "./pages/BrowseShops";
import Shop from "./pages/Shop";
import { ShopProvider } from "./contexts/ShopContext";
import Appointment from "./pages/Appointment";

function App() {
  return (
    <>
      <LoginProvider>
        <BrowserRouter>
          <ShopProvider>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="shops" element={<BrowseShops />} />
              <Route path="shop/:id" element={<Shop />} />
              <Route path="appointment/:id" element={<Appointment />} />
              <Route path="admin" element={<p>admin reeeeee</p>} />
              <Route path="*" element={<p>Not found re</p>} />
            </Routes>
          </ShopProvider>
        </BrowserRouter>
      </LoginProvider>
      {/* <Shop /> */}
    </>
  );
}

export default App;
