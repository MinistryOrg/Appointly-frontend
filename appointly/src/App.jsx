import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

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
import { Pie, TestDate } from "./Example";
import AdminPanel from "./pages/AdminPanel";
import NotFound from "./pages/NotFound";
import Dashboard from "./components/Dashboard";
import AppointmentsList from "./components/AppointmentsList";
import EditShop from "./components/EditShop";
import EditProfile from "./components/EditProfile";
import { AdminProvider } from "./contexts/AdminContext";
import ProtectedRoute from "./components/ProtectedRoute";
import NotAnAdmin from "./pages/NotAnAdmin";
import TestSide from "./TestSide";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <ShopProvider>
            <AppointmentProvider>
              <AdminProvider>
                <Routes>
                  <Route index element={<LandingPage />} />
                  <Route path="login" element={<Login />} />
                  <Route path="register" element={<Register />} />
                  <Route path="shops" element={<BrowseShops />} />
                  <Route path="shop/:id" element={<Shop />} />
                  <Route path="appointment/:id" element={<Appointment />} />
                  <Route path="summary" element={<AppointmentSummary />} />
                  <Route
                    element={
                      <ProtectedRoute>
                        <AdminPanel />
                      </ProtectedRoute>
                    }
                  >
                    <Route
                      index
                      element={<Navigate replace to="dashboard" />}
                    />
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route
                      path="appointmentList"
                      element={<AppointmentsList />}
                    />
                    <Route path="editShop" element={<EditShop />} />
                    <Route path="editProfile" element={<EditProfile />} />
                  </Route>
                  <Route path="*" element={<NotFound />} />
                  <Route path="notadmin" element={<NotAnAdmin />} />
                </Routes>
              </AdminProvider>
            </AppointmentProvider>
          </ShopProvider>
        </BrowserRouter>
      </AuthProvider>
      {/* <TestSide /> */}
    </>
  );
}

export default App;
