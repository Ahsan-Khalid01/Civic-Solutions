import { useState } from "react";

function AddDepartment() {

  const [data, setData] = useState(
    {departmentName:"",city:"",postalCode:"",category:"",headName:"",officialPhone:"",emergencyPhone:"",loginId:"",password: ""}
);

  function handleChange(e) {
    const { name, value } = e.target;

    setData((prev) => (
      { ...prev, [name]: value }
  ));
  }

  return (
    <>

      <div className="position-absolute top-50 start-50 translate-middle">

        <form>

          <div>
            <label>Add New Department</label>
          </div>
          <br />

          <div className="mb-3">
            <label>Department Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Department Name"
              name="departmentName"
              value={data.departmentName}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label>City</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter City Name"
              name="city"
              value={data.city}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label>Postal Code</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Postal Code"
              name="postalCode"
              value={data.postalCode}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label>Category</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Category"
              name="category"
              value={data.category}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label>Department Head Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Department Head Name"
              name="headName"
              value={data.headName}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label>Official Phone Number</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Official Contact Number"
              name="officialPhone"
              value={data.officialPhone}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label>Emergency Phone Number</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Emergency Contact Number"
              name="emergencyPhone"
              value={data.emergencyPhone}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label>Login ID</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Login ID"
              name="loginId"
              value={data.loginId}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label>Temporary Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={data.password}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Add Department
          </button>

        </form>

      </div>

    </>
  );
}

export default AddDepartment;