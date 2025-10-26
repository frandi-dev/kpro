import { useEffect, useRef } from "react";
import { CiFaceSmile } from "react-icons/ci";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark"
      style={{ width: "250px", height: "100vh" }}
    >
      <h3 style={{ margin: 0 }}>
        <CiFaceSmile style={{ marginBottom: "4px", marginRight: "4px" }} />
        KPRO
      </h3>
      <hr style={{ margin: 0, marginBottom: "8px" }} />
      <ul className="nav nav-pills flex-column mb-auto">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `nav-link ${
                isActive ? "active bg-primary text-white" : "text-white"
              }`
            }
          >
            Rooms
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/fnb"
            className={({ isActive }) =>
              `nav-link ${
                isActive ? "active bg-primary text-white" : "text-white"
              }`
            }
          >
            F&B
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/users"
            className={({ isActive }) =>
              `nav-link ${
                isActive ? "active bg-primary text-white" : "text-white"
              }`
            }
          >
            Users
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/reports"
            className={({ isActive }) =>
              `nav-link ${
                isActive ? "active bg-primary text-white" : "text-white"
              }`
            }
          >
            Reports
          </NavLink>
        </li>
        {/* <li>
          <a href="#" className="nav-link text-white">
            Settings
          </a>
        </li> */}
      </ul>
      <hr />
    </div>
  );
};

export default Sidebar;
