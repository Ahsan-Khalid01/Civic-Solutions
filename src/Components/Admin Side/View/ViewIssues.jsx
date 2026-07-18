import { useState, useEffect } from "react";
import { viewIssues } from "../../../serviceApi";

function statusBadgeClass(status) {
  if (status === "Resolved") return "bg-success";
  if (status === "In Progress") return "bg-primary";
  if (status === "Pending") return "bg-warning text-dark";
  return "bg-secondary";
}

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
  if (c.includes("school") || c.includes("education")) return "bi-mortarboard-fill";
  if (c.includes("sewer")) return "bi-water";
  return "bi-exclamation-circle-fill";
}

function ViewIssues() {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    viewIssues().then(setIssues);
  }, []);

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
      <p className="text-muted mb-4">Civic issues grouped by category.</p>

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
                      <i className="bi bi-geo-alt me-1"></i>{issue.location}
                    </p>
                    <p className="text-muted small mb-1">{issue.description}</p>
                    <p className="text-muted small mb-0">
                      <i className="bi bi-person me-1"></i>{issue.residentEmail}
                      {issue.phone && (
                        <> &nbsp;|&nbsp; <i className="bi bi-telephone me-1"></i>{issue.phone}</>
                      )}
                    </p>
                  </div>
                  <div className="text-end">
                    <div className="mb-2">
                      <span className={`badge rounded-pill ${statusBadgeClass(issue.status)} me-1`}>
                        {issue.status}
                      </span>
                      <span className={`badge rounded-pill ${priorityBadgeClass(issue.priority)}`}>
                        {issue.priority}
                      </span>
                    </div>
                    <p className="text-muted small mb-1">
                      <i className="bi bi-calendar3 me-1"></i>{issue.issueDate}
                    </p>
                    <p className="text-muted small mb-0">
                      Dept: {issue.departmentId ?? "Unassigned"}
                    </p>
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