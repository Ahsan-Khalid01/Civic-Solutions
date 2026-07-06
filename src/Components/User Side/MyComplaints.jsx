import { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "./userContext";
import { viewIssues, deleteIssue } from "../../serviceApi";

function MyComplaints() {
  const [complaints, setComplaints] = useState([]);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  function loadComplaints() {
    viewIssues().then((issues) => {
      setComplaints(issues.filter((i) => i.residentEmail === user));
    });
  }

  useEffect(() => {
    loadComplaints();
  }, [user]);

  function getStatusBadge(status) {
    if (status === "Pending") return "badge bg-danger";
    if (status === "In Progress") return "badge bg-warning text-dark";
    if (status === "Resolved") return "badge bg-success";
    return "badge bg-secondary";
  }

  async function handleDelete(id) {
    const confirmed = window.confirm("Delete this complaint?");
    if (!confirmed) return;
    const res = await deleteIssue({ id });
    if (res.success) loadComplaints();
  }

  return (
    <div className="container mt-5 mb-5">
      <h2 className="fw-bold mb-1">My Complaints</h2>
      <p className="text-muted mb-4">
        All civic issues you have submitted are listed below.
      </p>

      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Category</th>
              <th>Date</th>
              <th>Department</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {complaints.map((c) => (
              <tr key={c.id}>
                <td>
                  <span className="badge bg-secondary">{c.id}</span>
                </td>
                <td>{c.title}</td>
                <td>{c.category}</td>
                <td>{c.issueDate}</td>
                <td>{c.departmentId ?? "Unassigned"}</td>
                <td>
                  <span className={getStatusBadge(c.status)}>{c.status}</span>
                </td>
                <td className="d-flex gap-1">
                  <Link
                    to="/trackissue"
                    className="btn btn-sm btn-outline-primary"
                  >
                    Track
                  </Link>
                  <button
                    className="btn btn-sm btn-outline-warning"
                    onClick={() => navigate(`/editissue/${c.id}`)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => handleDelete(c.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MyComplaints;
