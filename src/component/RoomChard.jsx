const RoomChard = ({ name, time, customer, status }) => {
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
          <h5 className="card-title">{name}</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">
            Time: {time || "00:00:00"}
          </h6>

          <span className="card-text">Name : {customer || "..."}</span>
          {renderButtonStatus()}
        </div>
      </div>
    </div>
  );
};

export default RoomChard;
