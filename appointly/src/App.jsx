import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/App.css";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import BrowseShops from "./pages/BrowseShops";
import Shop from "./pages/Shop";
import Appointment from "./pages/Appointment";
import AppointmentSummary from "./pages/AppointmentSummary";

import { LoginProvider } from "./contexts/LoginContext";
import { ShopProvider } from "./contexts/ShopContext";
import { AppointmentProvider } from "./contexts/AppointmentContext";

function App() {
  return (
    <>
      <LoginProvider>
        <BrowserRouter>
          <ShopProvider>
            <AppointmentProvider>
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="shops" element={<BrowseShops />} />
                <Route path="shop/:id" element={<Shop />} />
                <Route path="appointment/:id" element={<Appointment />} />
                <Route path="summary" element={<AppointmentSummary />} />
                <Route path="admin" element={<p>admin reeeeee</p>} />
                <Route path="*" element={<p>Not found re</p>} />
              </Routes>
            </AppointmentProvider>
          </ShopProvider>
        </BrowserRouter>
      </LoginProvider>
    </>
  );
}

export default App;
