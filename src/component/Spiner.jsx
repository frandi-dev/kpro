import React from "react";

const Spiner = ({ type = "dark", text = "Loading..." }) => {
  return (
    <div
      className={`spinner-border spinner-border-sm text-${type}`}
      role="status"
    >
      <span className="visually-hidden">{text}</span>
    </div>
  );
};

export default Spiner;
