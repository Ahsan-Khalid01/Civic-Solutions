import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./User Side/userContext";
import { userLogin } from "../serviceApi";
import UserLoginBg from "./images/User Side Images/UserLoginBg.jpg";

function UserLogin() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const { handleLogin } = useContext(UserContext);

  async function submit(data) {
    const res = await userLogin(data);
    if (res.success) {
      handleLogin(data.email);
      navigate("/userdashboard");
    }
  }

  return (
    <div className="d-flex min-vh-100">
      <div
        className="d-none d-lg-block col-lg-6"
        style={{
          backgroundImage: `url(${UserLoginBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="col-lg-6 col-12 d-flex align-items-center justify-content-center bg-light">
        <div className="card border-0 shadow-sm p-4" style={{ width: "380px" }}>
          <h2 className="fw-bold mb-1">User Login</h2>
          <p className="text-muted mb-4">
            Sign in to report and track your civic issues.
          </p>

          <form onSubmit={handleSubmit(submit)}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="Enter Your Email Address"
                {...register("email")}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="form-control"
                placeholder="Enter Your Password"
                {...register("password")}
              />
            </div>

            <button type="submit" className="btn btn-primary w-100 fw-bold">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserLogin;