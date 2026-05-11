import { useState } from "react";

function Modify() {

  const [data, setData] = useState({
    departmentName: "",city:"",postalCode:"",category: "",headName:"",contact: "",status: ""
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
            <label>Modify Department</label>
          </div>
          <br />

          <div className="mb-3">
            <label>Department Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Department Name"
              name="departmentName"
              value={data.departmentName}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label>Department ID</label>
            <input
              type="text"
              className="form-control"
              placeholder="Cant Modify"
              disabled
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
              placeholder="Enter City Postal Code"
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
              placeholder="Select Category"
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
            <label>Contact</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Contact"
              name="contact"
              value={data.contact}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label>Status</label><br />

            <label>Inactive</label>
            <input
              type="radio"
              name="status"
              value="inactive"
              onChange={handleChange}
            />

            <label>Active</label>
            <input
              type="radio"
              name="status"
              value="active"
              onChange={handleChange}
            />

            <label>Suspend</label>
            <input
              type="radio"
              name="status"
              value="suspend"
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Update
          </button>

        </form>

      </div>
    </>
  );
}

export default Modify;