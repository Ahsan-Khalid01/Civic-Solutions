import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { useState } from "react"; 
import { adminLogin } from "../../serviceApi";



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
  
  // const onSubmit = async (data) => {
  //   try {
  //     setServerMessage(" Logging in...");
      
  //     
  //     navigate(DASHBOARD_ROUTE); 
  //   } catch (error) {
  //     console.error("Login Submission Error:", error);
  //     setServerMessage("An unexpected error occurred.");
  //   }
  // };

   const onSubmit = async (data) => {
    try {
      setServerMessage("Logging in...");
      
      
      navigate(DASHBOARD_ROUTE);

    } 
    catch (error)
     {
      console.error("Login Submission Error:", error);
      setServerMessage("An unexpected error occurred.");
    }
  };

  return (
    <>
      <div className="position-absolute top-50 start-50 translate-middle">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="fw-bold fs-4">Admin Login</label>
          </div>
          <br />

          {/* Email Field */}
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
            <p style={{ color: "Red" }}>{errors.email?.message}</p>
          </div>

          {/* Password Field */}
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
            <p style={{ color: "Red" }}>{errors.password?.message}</p>
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>

        {/* Message Output Container */}
        {serverMessage && (
          <p className="mt-3 text-center">
            <strong>{serverMessage}</strong>
          </p>
        )}
      </div>
    </>
  );
}

export default AdminLogin;