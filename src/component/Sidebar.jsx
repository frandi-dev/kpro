import { CiFaceSmile } from "react-icons/ci";

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
          <a href="#" className="nav-link text-white active">
            Rooms
          </a>
        </li>
        <li>
          <a href="#" className="nav-link text-white">
            F&B
          </a>
        </li>
        <li>
          <a href="#" className="nav-link text-white">
            Users
          </a>
        </li>
        <li>
          <a href="#" className="nav-link text-white">
            Reports
          </a>
        </li>
        <li>
          <a href="#" className="nav-link text-white">
            Settings
          </a>
        </li>
      </ul>
      <hr />
    </div>
  );
};

export default Sidebar;
