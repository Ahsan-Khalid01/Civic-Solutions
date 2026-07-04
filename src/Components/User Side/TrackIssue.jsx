import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  issueId: z
    .string()
    .min(3, { message: "Please enter a valid Issue ID e.g. CIV-001" }),
});

const dummyIssue = {
  id: "CIV-001",
  title: "Water Pipe Burst on Main Road",
  location: "Gulberg III, Lahore",
  date: "2025-04-20",
  status: "Pending",
  dept: "Unassigned",
  description:
    "A large water pipe has burst near the main intersection causing major flooding.",
};

const timeline = [
  { step: "Issue Submitted", done: true, date: "2025-04-20" },
  { step: "Reviewed by Admin", done: true, date: "2025-04-21" },
  { step: "Assigned to Department", done: false, date: "—" },
  { step: "Work In Progress", done: false, date: "—" },
  { step: "Issue Resolved", done: false, date: "—" },
];

function TrackIssue() {
  const [result, setResult] = useState(null);
  const [notFound, setNotFound] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  function submit(data) {
    if (data.issueId.toUpperCase() === "CIV-001") {
      setResult(dummyIssue);
      setNotFound(false);
    } else {
      setResult(null);
      setNotFound(true);
    }
  }

  return (
    <>
      <div className="container mt-5 mb-5">
        <h2 className="fw-bold mb-1">Track My Issue</h2>
        <p className="text-muted mb-4">
          Enter your Issue ID to see the current status and timeline.
        </p>

        {/* Search */}
        <form onSubmit={handleSubmit(submit)} className="mb-4">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Issue ID e.g. CIV-001"
              {...register("issueId")}
            />
            <button type="submit" className="btn btn-warning fw-bold">
              Track
            </button>
          </div>
          <p style={{ color: "Red" }}>{errors.issueId?.message}</p>
        </form>

        {/* Not Found */}
        {notFound && (
          <div className="alert alert-danger">
            No issue found with that ID. Please check and try again.
          </div>
        )}

        {/* Result */}
        {result && (
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-dark text-white d-flex justify-content-between align-items-center">
              <div>
                <span className="badge bg-secondary me-2">{result.id}</span>
                <strong>{result.title}</strong>
              </div>
              <span className="badge bg-danger">{result.status}</span>
            </div>
            <div className="card-body">
              {/* Info Row */}
              <div className="row g-3 mb-4">
                <div className="col-md-4">
                  <small className="text-muted d-block">Location</small>
                  <strong>{result.location}</strong>
                </div>
                <div className="col-md-4">
                  <small className="text-muted d-block">Date Reported</small>
                  <strong>{result.date}</strong>
                </div>
                <div className="col-md-4">
                  <small className="text-muted d-block">Assigned To</small>
                  <strong>{result.dept}</strong>
                </div>
              </div>

              <hr />

              {/* Timeline */}
              <h6 className="fw-bold mb-3">Issue Timeline</h6>
              <ul className="list-group list-group-flush">
                {timeline.map((t, i) => (
                  <li
                    key={i}
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >
                    <div className="d-flex align-items-center gap-2">
                      {t.done ? (
                        <i className="bi bi-check-circle-fill text-success fs-5"></i>
                      ) : (
                        <i className="bi bi-circle text-secondary fs-5"></i>
                      )}
                      <span className={t.done ? "fw-bold" : "text-muted"}>
                        {t.step}
                      </span>
                    </div>
                    <small className="text-muted">{t.date}</small>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default TrackIssue;
