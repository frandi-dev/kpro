import { createContext, useContext, useEffect, useState } from "react";
import Alert from "../component/Alert";

const AlertContext = createContext();

const AlertProvider = ({ children }) => {
  const [show, setShow] = useState(false);
  const [type, setType] = useState("Success");
  const [message, setMessage] = useState();
  useEffect(() => {
    if (message !== undefined) {
      setShow(true);
    }
  }, [message, setMessage]);

  const hanldeClose = () => {
    setShow(false);
    setMessage(undefined);
  };

  return (
    <AlertContext.Provider
      value={[
        show,
        {
          error: (msg = "") => {
            setType("Error");
            setMessage(msg);
            return show;
          },
          success: (msg = "") => {
            setType("Success");
            setMessage(msg);
            return show;
          },
          info: (msg = "") => {
            setType("Info");
            setMessage(msg);
            return show;
          },
        },
      ]}
    >
      {show && <Alert message={message} type={type} close={hanldeClose} />}

      {children}
    </AlertContext.Provider>
  );
};

export const useAlert = () => useContext(AlertContext);
export default AlertProvider;
