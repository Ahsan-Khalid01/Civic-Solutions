import { useState } from "react";

function DepartmentLogin() {

  const [data, setData] = useState(
    {
    departmentId: "", password: ""
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setData((prev) => ({
      ...prev, [name]: value
    }));
  }

  return (
    <>
      <div className="position-absolute top-50 start-50 translate-middle">

        <form>

          <div>
            <label>Department Login</label>
          </div>
          <br />

          <div className="mb-3">
            <label>Department ID</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Department ID"
              name="departmentId"
              value={data.departmentId}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter Password"
              name="password"
              value={data.password}
              onChange={handleChange}
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

export default DepartmentLogin;