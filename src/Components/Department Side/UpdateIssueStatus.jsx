import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { viewIssues, updateIssueStatus } from "../../serviceApi";

const schema = z.object({
  issueId: z.string().min(1, { message: "Please enter a valid Issue ID" }),
  status: z.string().min(1, { message: "Please select a status" }),
  remarks: z.string().optional(),
});

function UpdateIssueStatus() {
  const [found, setFound] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const [serverMessage, setServerMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  async function submit(data) {
    const issues = await viewIssues();
    const issue = issues.find((i) => String(i.id) === data.issueId);

    if (!issue) {
      setFound(null);
      setNotFound(true);
      setServerMessage("");
      return;
    }

    const res = await updateIssueStatus({ id: issue.id, status: data.status });

    if (res.success) 
      {
      setFound(issue);
      setNotFound(false);
      setServerMessage(` Issue ${data.issueId} marked as "${data.status}"`);
    } 
    else {
      setServerMessage(" " + res.message);
    }
  }

  return (
    <div className="container mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-md-7">
          <h2 className="fw-bold mb-1">Update Issue Status</h2>
          <p className="text-muted mb-4">
            Look up an assigned issue and update its current status.
          </p>

          <form onSubmit={handleSubmit(submit)}>
            <div className="mb-3">
              <label htmlFor="issueId" className="form-label">
                Issue ID
              </label>
              <input
                type="text"
                id="issueId"
                className="form-control"
                placeholder="Enter Issue ID"
                {...register("issueId")}
              />
              <p className="text-danger small mb-0">
                {errors.issueId?.message}
              </p>
            </div>

            <div className="mb-3">
              <label htmlFor="status" className="form-label">
                New Status
              </label>
              <select
                id="status"
                className="form-select"
                {...register("status")}
              >
                <option value="">Select status</option>
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Resolved">Resolved</option>
              </select>
              <p className="text-danger small mb-0">{errors.status?.message}</p>
            </div>

            <div className="mb-3">
              <label htmlFor="remarks" className="form-label">
                Remarks (optional)
              </label>
              <textarea
                id="remarks"
                className="form-control"
                rows="3"
                placeholder="Add a short note about the work done"
                {...register("remarks")}
              ></textarea>
            </div>

            <button type="submit" className="btn btn-warning w-100 fw-bold">
              Update Status
            </button>
          </form>

          {notFound && (
            <div className="alert alert-danger mt-3">
              No assigned issue found with that ID. Please check and try again.
            </div>
          )}

          {found && (
            <div className="card border-0 shadow-sm mt-4">
              <div className="card-header bg-dark text-white">
                <span className="badge bg-secondary me-2">{found.id}</span>
                <strong>{found.title}</strong>
              </div>
              <div className="card-body">
                <p className="mb-1">
                  <small className="text-muted">Location:</small>{" "}
                  {found.location}
                </p>
                <p className="mb-0">
                  <small className="text-muted">Reported by:</small>{" "}
                  {found.residentEmail}
                </p>
              </div>
            </div>
          )}

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

export default UpdateIssueStatus;