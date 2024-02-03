import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/App.css";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import BrowseShops from "./pages/BrowseShops";
import Shop from "./pages/Shop";
import Appointment from "./pages/Appointment";
import AppointmentSummary from "./pages/AppointmentSummary";

import { ShopProvider } from "./contexts/ShopContext";
import { AppointmentProvider } from "./contexts/AppointmentContext";
import { AuthProvider } from "./contexts/AuthContext";
import { TestDate } from "./Example";
import AdminPanel from "./pages/AdminPanel";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <AuthProvider>
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
                <Route path="admin" element={<AdminPanel />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </AppointmentProvider>
          </ShopProvider>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
