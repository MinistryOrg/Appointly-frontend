import { Outlet } from "react-router-dom";
import HorizontalNavBar from "../components/HorizontalNavBar";
import SideBar from "../components/SideBar";

function AdminPanel() {
  return (
    <>
      <div className="antialiased">
        <HorizontalNavBar />
        <SideBar />
        <Outlet />
      </div>
    </>
  );
}

export default AdminPanel;
