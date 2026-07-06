import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
// import { UserContext } from "../context/UserContext"; // Adjust path if needed
import { UserContext } from "./User Side/userContext";
import { userLogin } from "../serviceApi";

function UserLogin() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const { handleLogin } = useContext(UserContext);

  // function submit(data) {
  //   console.log(data);
  //   handleLogin(data.email); 
  //   navigate("/userdashboard");
  // }


  async function submit(data) {
  const res = await userLogin(data);
  if (res.success) { handleLogin(data.email); navigate("/userdashboard"); }
}

  return (
    <>
      <div className="position-absolute top-50 start-50 translate-middle">
        <form onSubmit={handleSubmit(submit)}>
          <div>
            <label>User Login</label>
          </div>
          <br />

          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter Your Email Address"
              {...register("email")}
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter Your Password"
              {...register("password")}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </>
  );
}

export default UserLogin;