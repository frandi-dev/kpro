import { useEffect, useState } from "react";
import useConfig from "../lib/config";
import api from "../lib/api";
import { useAlert } from "../context/AlertContext";

const Users = () => {
  const [users, setUsers] = useState();
  const [loading, setLoading] = useState(false);
  const { api_url } = useConfig();
  const alert = useAlert();

  // fetch user
  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const res = await api.get(`${api_url}/users`);
        const result = await res.json();
        console.log(result);

        setUsers(result.data);
      } catch (error) {
        alert.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [loading, setLoading]);

  return (
    <>
      <div
        className="d-flex align-items-stretch flex-column  p-2"
        style={{ height: "95vh" }}
      >
        <div className="row">
          <div className="col-8">
            <button className="btn btn-primary">Add new user</button>
          </div>
          <div className="col">
            <form className="d-flex mb-3" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
        <table className="table table-hover table-bordered mb-auto ">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Role</th>
              <th scope="col">status</th>
              <th scope="col">action</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((user, i) => (
                <tr key={user.id} style={{ alignItems: "center" }}>
                  <th scope="row">{i + 1}</th>
                  <td>{user.username}</td>
                  <td>{user.role}</td>
                  <td>
                    {user.is_online ? (
                      <span className="text-success">ONLINE</span>
                    ) : (
                      <span className="text-danger">OFFLINE</span>
                    )}
                  </td>
                  <td>
                    <button
                      className="btn btn-outline-primary"
                      style={{
                        "--bs-btn-padding-y": ".25rem",
                        "--bs-btn-padding-x": ".5rem",
                        "--bs-btn-font-size": ".75rem",
                        marginRight: "6px",
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-outline-danger"
                      style={{
                        "--bs-btn-padding-y": ".25rem",
                        "--bs-btn-padding-x": ".5rem",
                        "--bs-btn-font-size": ".75rem",
                        marginRight: "6px",
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <div className="p-2">
          <nav aria-label="Page navigation">
            <ul className="pagination">
              <li className="page-item">
                <button className="page-link" aria-label="Previous">
                  <span aria-hidden="true">«</span>
                </button>
              </li>
              <li className="page-item">
                <a className="page-link">1</a>
              </li>
              <li className="page-item">
                <button className="page-link" aria-label="Next">
                  <span aria-hidden="true">»</span>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Users;
