import AdminLayout from "../components/AdminLayout";
import HorizontalNavBar from "../components/HorizontalNavBar";
import SideBar from "../components/SideBar";

function AdminPanel() {
  return (
    <>
      <div className="antialiased">
        <HorizontalNavBar />
        <SideBar />
        <AdminLayout />
      </div>
    </>
  );
}

export default AdminPanel;
