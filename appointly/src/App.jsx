import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/App.css";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ServicesMenu from "./pages/ServiceMenu";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="search" element={<ServicesMenu />} />
          <Route path="admin" element={<p>admin reeeeee</p>} />
          <Route path="*" element={<p>Not found re</p>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
