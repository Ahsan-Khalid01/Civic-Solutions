import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { DepartmentContext } from "./DepartmentContext";
import { departmentLogin } from "../../serviceApi";
import DepartmentLoginBg from "../images/Department Side Images/DepartmentLogin.jpg";

const schema = z.object({
  departmentId: z.string().min(3, { message: "Department ID is required" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});

function DepartmentLogin() {
  const [serverMessage, setServerMessage] = useState("");
  const navigate = useNavigate();
  const { handleLogin } = useContext(DepartmentContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  async function submit(data) {
    setServerMessage("Logging in...");

    const res = await departmentLogin({
      loginId: data.departmentId,
      password: data.password,
    });

    if (res.success) {
      localStorage.setItem("departmentId", data.departmentId);
      handleLogin(data.departmentId);
      navigate("/departmentdashboard");
    } else {
      setServerMessage(res.message);
    }
  }

  return (
    <div className="d-flex min-vh-100">
      <div
        className="d-none d-lg-block col-lg-6"
        style={{
          backgroundImage: `url(${DepartmentLoginBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="col-lg-6 col-12 d-flex align-items-center justify-content-center bg-light">
        <div className="card border-0 shadow-sm p-4" style={{ width: "380px" }}>
          <h2 className="fw-bold mb-1">Department Login</h2>
          <p className="text-muted mb-4">
            Sign in to manage issues assigned to your department.
          </p>

          <form onSubmit={handleSubmit(submit)}>
            <div className="mb-3">
              <label htmlFor="departmentId" className="form-label">
                Department ID
              </label>
              <input
                type="text"
                id="departmentId"
                className="form-control"
                placeholder="e.g. ROADS-01"
                {...register("departmentId")}
              />
              <p className="text-danger small mb-0">
                {errors.departmentId?.message}
              </p>
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="form-control"
                placeholder="Enter your password"
                {...register("password")}
              />
              <p className="text-danger small mb-0">
                {errors.password?.message}
              </p>
            </div>

            <button type="submit" className="btn btn-warning w-100 fw-bold">
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

export default DepartmentLogin;