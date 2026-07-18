import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { adminLogin } from "../../serviceApi";
import AdminLoginBg from "../images/Admin Side Images/AdminLogin.jpg";

const DASHBOARD_ROUTE = "/admindashboard";

const schema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
});

function AdminLogin() {
  const [serverMessage, setServerMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      setServerMessage("Logging in...");

      navigate(DASHBOARD_ROUTE);
    } catch (error) {
      console.error("Login Submission Error:", error);
      setServerMessage("An unexpected error occurred.");
    }
  };

  return (
    <div className="d-flex min-vh-100">
      <div
        className="d-none d-lg-block col-lg-6"
        style={{
          backgroundImage: `url(${AdminLoginBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="col-lg-6 col-12 d-flex align-items-center justify-content-center bg-light">
        <div className="card border-0 shadow-sm p-4" style={{ width: "380px" }}>
          <h2 className="fw-bold mb-1">Admin Login</h2>
          <p className="text-muted mb-4">
            Sign in to manage the civic issue system.
          </p>

          <form onSubmit={handleSubmit(onSubmit)}>
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
              <p className="text-danger small mb-0">{errors.email?.message}</p>
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
              <p className="text-danger small mb-0">{errors.password?.message}</p>
            </div>

            <button type="submit" className="btn btn-primary w-100 fw-bold">
              Login
            </button>
          </form>

          {serverMessage && (
            <p className="text-center text-muted small mt-3 mb-0">
              {serverMessage}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;