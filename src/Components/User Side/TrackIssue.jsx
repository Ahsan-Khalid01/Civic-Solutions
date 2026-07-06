import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { viewIssues } from "../../serviceApi";

const schema = z.object({
  issueId: z.string().min(1, { message: "Please enter a valid Issue ID" }),
});

function TrackIssue() {
  const [result, setResult] = useState(null);
  const [notFound, setNotFound] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  async function submit(data) 
  {
    const issues = await viewIssues();
    const found = issues.find((i) => String(i.id) === data.issueId);

    if (found) 
      {
      setResult(found);
      setNotFound(false);
    } 
    else {
      setResult(null);
      setNotFound(true);
    }
  }

  return (
    <div className="container mt-5 mb-5">
      <h2 className="fw-bold mb-1">Track My Issue</h2>
      <p className="text-muted mb-4">
        Enter your Issue ID to see the current status.
      </p>

      <form onSubmit={handleSubmit(submit)} className="mb-4">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Issue ID"
            {...register("issueId")}
          />
          <button type="submit" className="btn btn-warning fw-bold">
            Track
          </button>
        </div>
        <p style={{ color: "Red" }}>{errors.issueId?.message}</p>
      </form>

      {notFound && (
        <div className="alert alert-danger">
          No issue found with that ID. Please check and try again.
        </div>
      )}

      {result && (
        <div className="card border-0 shadow-sm">
          <div className="card-body">
            <p><strong>ID:</strong> {result.id}</p>
            <p><strong>Title:</strong> {result.title}</p>
            <p><strong>Category:</strong> {result.category}</p>
            <p><strong>Location:</strong> {result.location}</p>
            <p><strong>Priority:</strong> {result.priority}</p>
            <p><strong>Date:</strong> {result.issueDate}</p>
            <p><strong>Status:</strong> {result.status}</p>
            <p><strong>Description:</strong> {result.description}</p>
            <p><strong>Assigned Department:</strong> {result.departmentId ?? "Unassigned"}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default TrackIssue;