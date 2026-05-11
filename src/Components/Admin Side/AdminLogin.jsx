import { useState } from "react";
import { Link } from "react-router-dom";

function AdminLogin() {

  const [data, setData] = useState({
    email: "",password: ""
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setData((prev) => ({
      ...prev,[name]: value
    }));
  }

  return (
    <>

      <div className="position-absolute top-50 start-50 translate-middle">

        <form>

          <div>
            <label>Admin Login</label>
          </div>
          <br />

          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter Your Email Address"
              name="email"
              value={data.email}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter Your Password"
              name="password"
              value={data.password}
              onChange={handleChange}
            />
          </div>

         <Link to="/admindashboard" className="btn btn-primary">
  Login
</Link>

        </form>

      </div>

    </>
  );
}

export default AdminLogin;