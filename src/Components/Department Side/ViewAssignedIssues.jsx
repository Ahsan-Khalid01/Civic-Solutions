import { useState, useEffect } from "react";
// import { viewIssues } from "../../../serviceApi";
import { viewIssues } from "../../serviceApi";

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

function ViewIssues() {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    viewIssues().then(setIssues);
  }, []);

  return (
    <div className="container py-5">
      <h2 className="fw-bold mb-1">All Issues</h2>
      <p className="text-muted mb-4">Complete list of civic issues reported by residents.</p>

      <div className="card border-0 shadow-sm">
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-hover align-middle mb-0">
              <thead>
                <tr>
                  <th>ID</th><th>Title</th><th>Category</th><th>Location</th>
                  <th>Status</th><th>Priority</th><th>Date</th><th>Resident</th>
                  <th>Phone</th><th>Description</th><th>Department</th>
                </tr>
              </thead>
              <tbody>
                {issues.map((issue) => (
                  <tr key={issue.id}>
                    <td>{issue.id}</td>
                    <td>{issue.title}</td>
                    <td>{issue.category}</td>
                    <td>{issue.location}</td>
                    <td>
                      <span className={`badge rounded-pill ${statusBadgeClass(issue.status)}`}>
                        {issue.status}
                      </span>
                    </td>
                    <td>
                      <span className={`badge rounded-pill ${priorityBadgeClass(issue.priority)}`}>
                        {issue.priority}
                      </span>
                    </td>
                    <td>{issue.issueDate}</td>
                    <td>{issue.residentEmail}</td>
                    <td>{issue.phone}</td>
                    <td>{issue.description}</td>
                    <td>{issue.departmentId ?? "Unassigned"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {issues.length === 0 && (
            <p className="text-center text-muted py-4 mb-0">No issues found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ViewIssues;