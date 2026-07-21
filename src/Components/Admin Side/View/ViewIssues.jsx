import { useState, useEffect } from "react";
import { viewIssues, viewDepartments } from "../../../serviceApi";

function priorityBadgeClass(priority) {
  if (priority === "High") return "bg-danger";
  if (priority === "Medium") return "bg-warning text-dark";
  if (priority === "Low") return "bg-secondary";
  return "bg-secondary";
}

function categoryIcon(category) {
  const c = (category || "").toLowerCase();
  if (c.includes("water")) return "bi-droplet-fill";
  if (c.includes("sanitation") || c.includes("garbage")) return "bi-trash-fill";
  if (c.includes("electric")) return "bi-lightning-charge-fill";
  if (c.includes("road")) return "bi-cone-striped";
  if (c.includes("gas")) return "bi-fire";
  if (c.includes("school") || c.includes("education"))
    return "bi-mortarboard-fill";
  if (c.includes("sewer")) return "bi-water";
  return "bi-exclamation-circle-fill";
}

const STEPS = ["Pending", "In Progress", "Resolved"];

function ProgressTracker({ status }) {
  const currentIndex = STEPS.indexOf(status);

  return (
    <div className="progress-tracker">
      {STEPS.map((step, index) => (
        <div className="progress-step" key={step}>
          <div
            className={`progress-dot ${
              index <= currentIndex ? "progress-dot-active" : ""
            } ${index === currentIndex ? "progress-dot-current" : ""}`}
          ></div>
          <span
            className={`progress-label ${
              index <= currentIndex ? "progress-label-active" : ""
            }`}
          >
            {step}
          </span>
          {index < STEPS.length - 1 && (
            <div
              className={`progress-line ${
                index < currentIndex ? "progress-line-active" : ""
              }`}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
}

function ViewIssues() {
  const [issues, setIssues] = useState([]);
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    viewIssues().then(setIssues);
    viewDepartments().then(setDepartments);
  }, []);

  function assignedDepartment(issue) {
    const match = departments.find(
      (dept) => dept.category?.toLowerCase() === issue.category?.toLowerCase(),
    );
    return match ? match.departmentName : "Unassigned";
  }

  const grouped = issues.reduce((acc, issue) => {
    const cat = issue.category || "Uncategorized";
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(issue);
    return acc;
  }, {});

  const categories = Object.keys(grouped);

  return (
    <div className="container py-5">
      <h2 className="fw-bold mb-1">All Issues</h2>
      <p className="text-muted mb-4">
        Monitor how each department is progressing on reported issues.
      </p>

      {categories.length === 0 && (
        <p className="text-muted">No issues found.</p>
      )}

      {categories.map((cat) => (
        <div className="card border-0 shadow-sm mb-4" key={cat}>
          <div className="card-header bg-white d-flex align-items-center gap-2 py-3">
            <div
              className="d-flex align-items-center justify-content-center rounded-circle bg-primary bg-opacity-10"
              style={{ width: "40px", height: "40px", flexShrink: 0 }}
            >
              <i className={`bi ${categoryIcon(cat)} text-primary`}></i>
            </div>
            <h5 className="fw-bold mb-0">{cat}</h5>
            <span className="badge bg-secondary ms-auto">
              {grouped[cat].length} issue{grouped[cat].length !== 1 ? "s" : ""}
            </span>
          </div>

          <div className="list-group list-group-flush">
            {grouped[cat].map((issue) => (
              <div className="list-group-item p-3" key={issue.id}>
                <div className="d-flex justify-content-between align-items-start flex-wrap gap-3">
                  <div>
                    <h6 className="fw-bold mb-1">{issue.title}</h6>
                    <p className="text-muted small mb-1">
                      <i className="bi bi-geo-alt me-1"></i>
                      {issue.location}
                    </p>
                    <p className="text-muted small mb-1">{issue.description}</p>
                    <p className="text-muted small mb-0">
                      <i className="bi bi-person me-1"></i>
                      {issue.residentEmail}
                      {issue.phone && (
                        <>
                          {" "}
                          &nbsp;|&nbsp; <i className="bi bi-telephone me-1"></i>
                          {issue.phone}
                        </>
                      )}
                    </p>
                  </div>
                  <div className="text-end" style={{ minWidth: "240px" }}>
                    <span
                      className={`badge rounded-pill ${priorityBadgeClass(issue.priority)} mb-2`}
                    >
                      {issue.priority} Priority
                    </span>
                    <p className="text-muted small mb-1">
                      <i className="bi bi-calendar3 me-1"></i>
                      {issue.issueDate}
                    </p>
                    <p className="text-muted small mb-2">
                      Responsible: <strong>{assignedDepartment(issue)}</strong>
                    </p>
                    <ProgressTracker status={issue.status} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ViewIssues;
