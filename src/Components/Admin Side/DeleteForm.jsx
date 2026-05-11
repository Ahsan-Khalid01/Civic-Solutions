import { useState } from "react";

function DeleteForm() {

  const [data, setData] = useState({
    departmentName:"",departmentId:"",city:"",postalCode:"",category: "",headName: "",reason: ""
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
            <label>Delete Department</label>
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
              placeholder="Enter Department ID"
              name="departmentId"
              value={data.departmentId}
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
              placeholder="Enter Your Postal Code"
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
            <label>Reason</label>
            <input
              type="text"
              className="form-control"
              placeholder="Why we delete this department?"
              name="reason"
              value={data.reason}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Delete
          </button>

        </form>

      </div>

    </>
  );
}

export default DeleteForm;