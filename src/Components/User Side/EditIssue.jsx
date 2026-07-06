import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { viewIssues, updateIssue } from "../../serviceApi";

function EditIssue() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [serverMessage, setServerMessage] = useState("");
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    viewIssues().then((issues) => {
      const issue = issues.find((i) => String(i.id) === id);
      if (issue) reset(issue);
    });
  }, [id]);

  async function submit(data) {
    
    const res = await updateIssue({ ...data, id });
    if (res.success)
         {
      setServerMessage(" " + res.message);
      setTimeout(() => navigate("/mycomplaints"), 1500);
    } 
    else {
      setServerMessage(" " + res.message);
    }
  }

  return (
    <div className="container mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h2 className="fw-bold mb-1">Edit Issue</h2>
          <p className="text-muted mb-4">
            Update the details of your complaint.
          </p>

          <form onSubmit={handleSubmit(submit)}>
            <div className="mb-3">
              <label className="form-label">Issue Title</label>
              <input className="form-control" {...register("title")} />
            </div>

            <div className="mb-3">
              <label className="form-label">Category</label>
              <select className="form-select" {...register("category")}>
                <option value="Water">Water</option>
                <option value="Electricity">Electricity</option>
                <option value="Gas">Gas</option>
                <option value="Sanitation">Sanitation</option>
                <option value="Roads">Roads</option>
                <option value="Education">Education</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Location / Area</label>
              <input className="form-control" {...register("location")} />
            </div>

            <div className="mb-3">
              <label className="form-label">Priority</label>
              <select className="form-select" {...register("priority")}>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
                <option value="Critical">Critical</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea
                className="form-control"
                rows={4}
                {...register("description")}
              ></textarea>
            </div>

            <button type="submit" className="btn btn-warning fw-bold">
              Save Changes
            </button>
          </form>

          {serverMessage && (
            <p className="mt-3 text-center">
              <strong>{serverMessage}</strong>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default EditIssue;
