import loginBg from "../assets/login-bg.jpg";
import { BiLockAlt, BiUser } from "react-icons/bi";
import InputFloating from "../component/InputFloating";

const Login = () => {
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
          <form className="mt-4">
            <InputFloating
              id="input-username"
              label="Username"
              type="text"
              placeholder="Username"
              icon={<BiUser size={24} className="text-light" />}
            />
            <InputFloating
              id="input-password"
              label="Password"
              type="password"
              placeholder="Password"
              icon={<BiLockAlt size={24} className="text-light" />}
            />

            <div className="input-group mb-4 mt-2">
              <button className="form-control fw-bold btn btn-outline-light btn-login  border border-secondary-subtle">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
