import { useState } from "react";
import { viewDepartments, deleteDepartment } from "../../serviceApi";

function DeleteForm() {
  const [deptId, setDeptId] = useState("");
  const [found, setFound] = useState(null);
  const [serverMessage, setServerMessage] = useState("");

  async function findDept() {

    const departments = await viewDepartments();
    const dept = departments.find((d) => String(d.id) === deptId);
    if (dept) {
      setFound(dept);
      setServerMessage("");
    } else {
      setFound(null);
      setServerMessage(" Department not found.");
    }
  }

  async function confirmDelete() {
    const res = await deleteDepartment({ id: deptId });
    if (res.success) {
      setServerMessage(" " + res.message);
      setFound(null);
      setDeptId("");
    } 
    else
       {
      setServerMessage(" " + res.message);
    }
  }

  return (
    <div className="position-absolute top-50 start-50 translate-middle">
      <label>Delete Department</label>
      <br /><br />

      <div className="mb-3">
        <label className="form-label">Department ID</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Department ID"
          value={deptId}
          onChange={(e) => setDeptId(e.target.value)}
        />
        <button type="button" className="btn btn-secondary mt-2" onClick={findDept}>
          Find
        </button>
      </div>

      {found && (
        <div className="card border-0 shadow-sm mb-3">
          <div className="card-body">
            <p className="mb-1"><strong>Name:</strong> {found.departmentName}</p>
            <p className="mb-1"><strong>City:</strong> {found.city}</p>
            <p className="mb-1"><strong>Category:</strong> {found.category}</p>
            <p className="mb-0"><strong>Head:</strong> {found.headName}</p>
          </div>
          <div className="card-footer">
            <button type="button" className="btn btn-danger" onClick={confirmDelete}>
              Confirm Delete
            </button>
          </div>
        </div>
      )}

      {serverMessage && <p><strong>{serverMessage}</strong></p>}
    </div>
  );
}

export default DeleteForm;