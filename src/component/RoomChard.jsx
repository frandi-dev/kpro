import idr from "../lib/Idr";

const RoomChard = ({ name, time, price, customer, status }) => {
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

  return (
    <div className="col-2" style={{ padding: "8px" }}>
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">{name.toUpperCase()}</h4>

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
