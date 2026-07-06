import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { viewIssues } from "../../serviceApi";

function statusBadge(status) {
  if (status === "Pending") return "badge bg-danger";
  if (status === "In Progress") return "badge bg-warning text-dark";
  if (status === "Resolved") return "badge bg-success";
  return "badge bg-secondary";
}

function priorityBadge(priority) {
  if (priority === "Critical") return "badge bg-dark";
  if (priority === "High") return "badge bg-danger";
  if (priority === "Medium") return "badge bg-warning text-dark";
  return "badge bg-secondary";
}

function ViewAssignedIssues() {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    viewIssues().then(setIssues);
  }, []);

  return (
    <div className="container mt-5 mb-5">
      <h2 className="fw-bold mb-1">Assigned Issues</h2>
      <p className="text-muted mb-4">
        Civic complaints that have been routed to your department.
      </p>

      <div className="table-responsive">
        <table className="table table-bordered table-hover align-middle">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Category</th>
              <th>Location</th>
              <th>Priority</th>
              <th>Date</th>
              <th>Resident</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {issues.map((issue) => (
              <tr key={issue.id}>
                <td>
                  <span className="badge bg-secondary">{issue.id}</span>
                </td>
                <td>{issue.title}</td>
                <td>{issue.category}</td>
                <td>{issue.location}</td>
                <td>
                  <span className={priorityBadge(issue.priority)}>
                    {issue.priority}
                  </span>
                </td>
                <td>{issue.issueDate}</td>
                <td>{issue.residentEmail}</td>
                <td>
                  <span className={statusBadge(issue.status)}>
                    {issue.status}
                  </span>
                </td>
                <td>
                  <Link
                    to="/updateissuestatus"
                    className="btn btn-sm btn-outline-primary"
                  >
                    Update
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ViewAssignedIssues;
