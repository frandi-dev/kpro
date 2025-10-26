import { useToest } from "../context/ToestContext";
import { useAlert } from "../context/AlertContext";
import api from "../lib/api";
import useConfig from "../lib/config";
import idr from "../lib/Idr";

const RoomChard = ({
  name,
  time,
  price,
  customer,
  status,
  setLoading,
  setEditData,
  action,
}) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const role = user.role;
  const toest = useToest();
  const alert = useAlert();
  const { api_url } = useConfig();

  const renderButtonStatus = () => {
    if (status === "available") {
      return (
        <button className="btn form-control btn-outline-primary mt-4">
          Standby
        </button>
      );
    }

    if (status === "active") {
      return (
        <button className="btn form-control btn-outline-info mt-4">
          Priview
        </button>
      );
    }

    if (status === "maintenance") {
      return (
        <button className="btn form-control btn-outline-dark mt-4">
          Maintenance
        </button>
      );
    }

    if (status === "close") {
      return (
        <button className="btn form-control btn-outline-success mt-4">
          Finished
        </button>
      );
    }

    return (
      <button className="btn form-control btn-outline-secondary mt-4">
        Offline
      </button>
    );
  };

  const handleDelete = async () => {
    setLoading(true);
    try {
      await toest.message("Press 'Yes' to continue");
      const res = await api.delete(`${api_url}/rooms/${name}`);
      const result = await res.json();
      alert.success(result.message);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.info(error);
    }
  };

  const hadleEdit = (e) => {
    e.preventDefault();
    setEditData({
      name,
      price,
    });
    action(true);
  };

  return (
    <div className="col-2" style={{ padding: "8px" }}>
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">{name}</h4>
          {role === "admin" && (
            <div
              className="action position-absolute top-0 end-0 pt-3"
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <button
                className="badge text-bg-primary"
                style={{ border: "none", marginRight: 4 }}
                data-bs-toggle="modal"
                data-bs-target="#formModal"
                onClick={hadleEdit}
              >
                Edit
              </button>
              <button
                className="badge text-bg-danger"
                style={{ border: "none", marginRight: 8 }}
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
          )}

          <h6 className="card-subtitle mb-2 text-body-secondary">
            Price/H : {idr(price)}
          </h6>
          <h6 className="card-subtitle mb-2 text-body-secondary">
            Time: {time || "00:00:00"}
          </h6>
          <br />
          <span className="card-subtitle mb-2 text-body-secondary">
            Name : {customer || "..."}
          </span>
          {renderButtonStatus()}
        </div>
      </div>
    </div>
  );
};

export default RoomChard;
