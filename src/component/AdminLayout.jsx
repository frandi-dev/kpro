import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const AdminLayout = () => {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1 bg-light" style={{ minHeight: "100vh" }}>
        <Navbar />
        <div className="container-fluid">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
