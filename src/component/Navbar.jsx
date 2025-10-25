import { FaRegCircleUser } from "react-icons/fa6";

const Navbar = () => {
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
              <a className="dropdown-item" href="#">
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
