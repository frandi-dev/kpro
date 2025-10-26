import { useEffect } from "react";
import loginBg from "../assets/login-bg.jpg";
import { useNavigate } from "react-router-dom";

const Spash = () => {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  useEffect(() => {
    if (token) {
      if (user.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/staff");
      }
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <div
      className="login-container"
      style={{
        backgroundImage: `url(${loginBg})`,
      }}
    >
      <div
        className="text-light"
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className="d-flex mb-2 justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>

        <span style={{ marginLeft: "18px" }}>Loading...</span>
      </div>
    </div>
  );
};

export default Spash;
