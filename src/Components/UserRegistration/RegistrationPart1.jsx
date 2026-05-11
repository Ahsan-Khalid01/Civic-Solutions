import { useState } from "react";
import { Link } from "react-router-dom";

function RegistrationPart1() {

  const [data, setData] = useState(
    {fullName: "", cnic:"",dob: "",  gender: "",phone: "",email: "",image:""}
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
              <label>Resident Registration</label>
            </div>

            {/* Full Name */}
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your Full Name"
                name="fullName"
                value={data.fullName}
                onChange={handleChange}
              />
            </div>

            {/* CNIC */}
            <div className="mb-3">
              <label className="form-label">CNIC</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter CNIC Without Dashes"
                name="cnic"
                value={data.cnic}
                onChange={handleChange}
              />
            </div>

            {/* DOB */}
            <div className="mb-3">
              <label className="form-label">Date of Birth</label><br />
              <input
                type="date"
                name="dob"
                value={data.dob}
                onChange={handleChange}
              />
            </div>

            {/* Gender */}
            <div className="mb-3">
              <label className="form-label">Gender</label><br />

              <label>Male</label>
              <input
                type="radio"
                name="gender"
                value="male"
                onChange={handleChange}
              />

              <label>Female</label>
              <input
                type="radio"
                name="gender"
                value="female"
                onChange={handleChange}
              />
            </div>

            {/* Phone */}
            <div className="mb-3">
              <label className="form-label">Phone Number</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your Phone Number"
                name="phone"
                value={data.phone}
                onChange={handleChange}
              />
            </div>

            {/* Email */}
            <div className="mb-3">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter Your Email Address"
                name="email"
                value={data.email}
                onChange={handleChange}
              />
            </div>

            {/* Image */}
            <div className="mb-3">
              <label className="form-label">Upload Picture</label><br />
              <input type="file" name="image" onChange={handleChange} />
            </div>

            {/* Checkbox (optional - no state needed) */}
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" />
              <label className="form-check-label">Check me out</label>
            </div>

            <Link to="/register/step2" className="btn btn-primary">
  Next
</Link>

          </form>

        </div>

      </div>
    </>
  );
}

export default RegistrationPart1;