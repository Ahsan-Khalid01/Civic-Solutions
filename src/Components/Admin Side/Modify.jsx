import { useForm } from "react-hook-form";
import { useState } from "react";
import { viewDepartments, updateDepartment } from "../../serviceApi";

function Modify() {
  const [deptId, setDeptId] = useState("");
  const [found, setFound] = useState(false);
  const [serverMessage, setServerMessage] = useState("");
  const { register, handleSubmit, reset } = useForm();

  async function findDept()
   {
    const departments = await viewDepartments();
    const dept = departments.find((d) => String(d.id) === deptId);
    if (dept)
       {
      reset(dept);
      setFound(true);
    }
     else {
      setFound(false);
      setServerMessage(" Department not found.");
    }
  }

  async function submit(data)
   {
    const res = await updateDepartment({ ...data, id: deptId });
    setServerMessage(res.success ? " " + res.message : " " + res.message);
  }

  return (
    <div className="position-absolute top-50 start-50 translate-middle">
      <label>Modify Department</label>
      <br />
      <br />

      <div className="mb-3">
        <label>Department ID</label>
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
            <label>Department Name</label>
            <input className="form-control" {...register("departmentName")} />
          </div>
          <div className="mb-3">
            <label>City</label>
            <input className="form-control" {...register("city")} />
          </div>
          <div className="mb-3">
            <label>Postal Code</label>
            <input className="form-control" {...register("postalCode")} />
          </div>
          <div className="mb-3">
            <label>Category</label>
            <input className="form-control" {...register("category")} />
          </div>
          <div className="mb-3">
            <label>Head Name</label>
            <input className="form-control" {...register("headName")} />
          </div>
          <div className="mb-3">
            <label>Official Phone</label>
            <input className="form-control" {...register("officialPhone")} />
          </div>
          <button type="submit" className="btn btn-primary">
            Update
          </button>
        </form>
      )}
      {serverMessage && (
        <p>
          <strong>{serverMessage}</strong>
        </p>
      )}
    </div>
  );
}

export default Modify;
