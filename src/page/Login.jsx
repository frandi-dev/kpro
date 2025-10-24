import loginBg from "../assets/login-bg.jpg";
import { BiLockAlt, BiUser } from "react-icons/bi";
import InputFloating from "../component/InputFloating";
import { useEffect, useState } from "react";
import useConfig from "../lib/config";
import api from "../lib/api";
import Spiner from "../component/Spiner";
import { useAlert } from "../context/AlertContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [close, message] = useAlert();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { api_url } = useConfig();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await api.post(`${api_url}/users/login`, {
      username: username,
      password: password,
    });

    const result = await res.json();

    // hanlde error
    if (res.status === 200) {
      setLoading(false);
      message.success(result.message);
      navigate("/admin");
    } else {
      message.error(result.message);
      setLoading(false);
    }
  };

  return (
    <div
      className="login-container"
      style={{
        backgroundImage: `url(${loginBg})`,
      }}
    >
      <div className="card card-login shadow text-light">
        <div className="background-blur"></div>
        <div className="card-body">
          <div className="login-title">
            <h3 className="card-title">Welcome!</h3>
          </div>
          <form className="mt-4" onSubmit={handleSubmit}>
            <InputFloating
              id="input-username"
              label="Username"
              name="username"
              type="text"
              placeholder="Username"
              icon={<BiUser size={24} className="text-light" />}
              value={username}
              onChange={setUsername}
              required
            />
            <InputFloating
              id="input-password"
              label="Password"
              name="password"
              type="password"
              placeholder="Password"
              icon={<BiLockAlt size={24} className="text-light" />}
              value={password}
              onChange={setPassword}
              required
            />

            <div className="input-group mb-4 mt-2">
              <button
                type="submit"
                className="form-control fw-bold btn btn-outline-light btn-login  border border-secondary-subtle"
              >
                {loading ? (
                  <>
                    <Spiner /> Loading...
                  </>
                ) : (
                  "Login"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
