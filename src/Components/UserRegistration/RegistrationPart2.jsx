import { useState } from "react";
import { Link } from "react-router-dom";

function RegistrationPart2() {

  const [data, setData] = useState(
    {city:"",area:"",address:"",postalCode: ""}
);

  function handleChange(e) {
    const { name, value } = e.target;

    setData((prev) => (
      {...prev,[name]: value}
    ));
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
              <label>City</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your City Name"
                name="city"
                value={data.city}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label>Area/Locality</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Area"
                name="area"
                value={data.area}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label>Street Address</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your Street No"
                name="address"
                value={data.address}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label>Postal Code</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your City Postal code"
                name="postalCode"
                value={data.postalCode}
                onChange={handleChange}
              />
            </div>

            <div className="d-flex gap-2">

            <Link to="/register" className="btn btn-success">Back</Link>

            <Link to="/register/step3" className="btn btn-primary">Next</Link></div>

          </form>

        </div>

      </div>
    </>
  );
}

export default RegistrationPart2;