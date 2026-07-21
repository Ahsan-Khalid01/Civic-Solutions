import { useForm } from "react-hook-form";
import { useState } from "react";
import { viewDepartments, updateDepartment } from "../../serviceApi";

function Modify() {
  const [deptId, setDeptId] = useState("");
  const [found, setFound] = useState(false);
  const [serverMessage, setServerMessage] = useState("");
  const { register, handleSubmit, reset } = useForm();

  async function findDept() {
    const departments = await viewDepartments();
    const dept = departments.find((d) => String(d.id) === deptId);
    if (dept) {
      reset(dept);
      setFound(true);
    } else {
      setFound(false);
      setServerMessage(" Department not found.");
    }
  }

  async function submit(data) {
    const res = await updateDepartment({ ...data, id: deptId });
    setServerMessage(res.success ? " " + res.message : " " + res.message);
  }

  return (
    <div className="d-flex justify-content-center py-5 px-3">
      <div
        className="card border-0 shadow-sm p-4"
        style={{ maxWidth: "500px", width: "100%" }}
      >
        <h3 className="fw-bold mb-4">Modify Department</h3>

        <div className="mb-3">
          <label className="form-label">Department ID</label>
          <input
            className="form-control"
            value={deptId}
            onChange={(e) => setDeptId(e.target.value)}
            placeholder="Enter Department ID"
          />
          <button
            type="button"
            className="btn btn-secondary mt-2"
            onClick={findDept}
          >
            Find
          </button>
        </div>

        {found && (
          <form onSubmit={handleSubmit(submit)}>
            <div className="mb-3">
              <label className="form-label">Department Name</label>
              <input className="form-control" {...register("departmentName")} />
            </div>
            <div className="mb-3">
              <label className="form-label">City</label>
              <input className="form-control" {...register("city")} />
            </div>
            <div className="mb-3">
              <label className="form-label">Postal Code</label>
              <input className="form-control" {...register("postalCode")} />
            </div>
            <div className="mb-3">
              <label className="form-label">Category</label>
              <select className="form-select" {...register("category")}>
                <option value="">-- Select Category --</option>
                <option value="Water">Water</option>
                <option value="Electricity">Electricity</option>
                <option value="Gas">Gas</option>
                <option value="Sanitation">Sanitation</option>
                <option value="Roads">Roads</option>
                <option value="Education">Education</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Head Name</label>
              <input className="form-control" {...register("headName")} />
            </div>
            <div className="mb-3">
              <label className="form-label">Official Phone</label>
              <input className="form-control" {...register("officialPhone")} />
            </div>
            <button type="submit" className="btn btn-primary w-100 fw-bold">
              Update
            </button>
          </form>
        )}

        {serverMessage && (
          <p className="text-center text-muted small mt-3 mb-0">
            <strong>{serverMessage}</strong>
          </p>
        )}
      </div>
    </div>
  );
}

export default Modify;
