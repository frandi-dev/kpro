import { MdErrorOutline, MdInfoOutline } from "react-icons/md";
import {
  IoMdCheckmarkCircleOutline,
  IoMdCloseCircleOutline,
} from "react-icons/io";
import { useEffect } from "react";

const Alert = ({ message, type, close }) => {
  useEffect(() => {
    const time = setTimeout(() => {
      close();
    }, 8000);

    return () => clearTimeout(time);
  }, []);

  const renderIcon = () => {
    if (type === "Error") {
      return (
        <IoMdCloseCircleOutline size={24} style={{ paddingRight: "4px" }} />
      );
    }

    if (type === "Info") {
      return <MdInfoOutline size={24} style={{ paddingRight: "4px" }} />;
    }

    return (
      <IoMdCheckmarkCircleOutline size={24} style={{ paddingRight: "4px" }} />
    );
  };

  return (
    <div
      className={`alert ${
        type === "Error" ? "alert-danger" : `alert-${type.toLowerCase()}`
      } d-flex justify-content-between position-fixed start-50 translate-middle-x align-items-center`}
      role="alert"
      style={{ zIndex: "100000", marginTop: "80px" }}
    >
      {renderIcon()}
      <div className="text-nowrap">{message}</div>
    </div>
  );
};

export default Alert;
