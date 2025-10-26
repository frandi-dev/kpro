import { createContext, useContext, useState } from "react";

const ToestContext = createContext();

const ToestProvider = ({ children }) => {
  const [message, setMessage] = useState(null);
  const [resolver, setResolver] = useState(null);

  const showMessage = (text) => {
    setMessage(text);
    return new Promise((resolve, reject) => {
      setResolver({ resolve, reject });
    });
  };
  // Ketika user klik "Yes"
  const handleYes = () => {
    resolver?.resolve("yes");
    setMessage(null);
    setResolver(null);
  };

  // Ketika user klik "Cancel"
  const handleCancel = () => {
    resolver?.reject("no");
    setMessage(null);
    setResolver(null);
  };

  return (
    <ToestContext.Provider value={{ message: showMessage }}>
      {message && (
        <div
          className={`toast show position-absolute top-0 start-50 translate-middle-x`}
          style={{ zIndex: 100000, marginTop: "80px" }}
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="toast-header">
            <strong className="me-auto">Are you sure ?</strong>
          </div>

          <div className="toast-body">
            {message}
            <div className="mt-2 pt-2 border-top">
              <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={handleYes}
              >
                Yes
              </button>
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                data-bs-dismiss="toast"
                style={{ marginLeft: 4 }}
                onClick={handleCancel}
              >
                cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {children}
    </ToestContext.Provider>
  );
};

export const useToest = () => useContext(ToestContext);
export default ToestProvider;
