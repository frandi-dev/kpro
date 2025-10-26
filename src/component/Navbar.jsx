import { FaRegCircleUser } from "react-icons/fa6";
import api from "../lib/api";
import useConfig from "../lib/config";
import { useToest } from "../context/ToestContext";

const Navbar = () => {
  const { api_url } = useConfig();
  const toest = useToest();

  // handle logout
  const handleLogout = async () => {
    try {
      await toest.message("Press 'Yes' to continue");
      const res = await api.post(`${api_url}/users/logout`);
      if (res.status === 200) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        window.main_proccess.close();
      }
    } catch {
      console.log("lanjut bekerja");
    }
  };

  return (
    <nav className="navbar navbar-dark bg-dark shadow-sm px-3">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">Dashboard</span>
        <div className="dropdown dropstart d-flex">
          <span
            className="d-flex align-items-center  text-decoration-none dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{
              color: "transparent",
              cursor: "pointer",
            }}
          >
            <FaRegCircleUser size={24} className="text-light" />
          </span>
          <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
            <li>
              <a className="dropdown-item" href="#">
                Profile
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <button className="dropdown-item" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
