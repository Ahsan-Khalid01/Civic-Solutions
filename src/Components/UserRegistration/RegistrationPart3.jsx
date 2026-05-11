import { useState } from "react";
import { Link } from "react-router-dom";

function RegistrationPart3() {

  const [data, setData] = useState(
    {password: "",confirmPassword: ""}
);

  function handleChange(e) {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev, [name]: value
    }));
  }

  return (
    <>
      <div className="position-relative" style={{ height: "700px" }}>

        <div className="position-absolute top-50 start-50 translate-middle">

          <form>

            <div>
              <label>Registration</label>
            </div>
            <br />

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

            <div className="mb-3">
              <label>Confirmed Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Re Enter Your Password"
                name="confirmPassword"
                value={data.confirmPassword}
                onChange={handleChange}
              />
            </div>

              <div className="d-flex gap-2">

                 <Link to="/register/step2" className="btn btn-success">Back</Link>

                 <Link to="/login" className="btn btn-success">Submit</Link>
                 </div>

                 
                 <div/>

          </form>

        </div>

      </div>
    </>
  );
}

export default RegistrationPart3;