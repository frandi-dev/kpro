import { MdErrorOutline, MdInfoOutline } from "react-icons/md";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const Alert = ({ message, type, close }) => {
  const renderIcon = () => {
    if (type === "Error") {
      return <MdErrorOutline size={24} style={{ paddingRight: "4px" }} />;
    }

    if (type === "Info") {
      return <MdInfoOutline size={24} style={{ paddingRight: "4px" }} />;
    }

    return (
      <IoMdCheckmarkCircleOutline size={24} style={{ paddingRight: "4px" }} />
    );
  };

  return (
    <>
      <div
        aria-live="polite"
        aria-atomic="true"
        className="position-relative rounded-3"
      >
        <div
          className="toast-container p-3 top-0 start-50 translate-middle-x"
          // id="toastPlacement"
        >
          <div className="toast show border-0">
            <div
              className={`${
                type === "Error" ? "text-danger" : `text-${type.toLowerCase()}`
              }`}
            >
              <div
                className={`toast-header ${
                  type === "Error"
                    ? "text-danger"
                    : `text-${type.toLowerCase()}`
                }`}
              >
                {renderIcon()}
                <strong className="me-auto">{type}!</strong>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => close()}
                />
              </div>
              <div className="toast-body">{message}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Alert;
