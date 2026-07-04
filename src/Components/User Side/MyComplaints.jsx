import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const dummyComplaints = [
  {
    id: "CIV-001",
    title: "Water Pipe Burst",
    category: "Water",
    date: "2025-04-20",
    status: "Pending",
    dept: "Unassigned",
  },
  {
    id: "CIV-003",
    title: "Garbage Not Collected",
    category: "Sanitation",
    date: "2025-04-18",
    status: "In Progress",
    dept: "Sanitation Dept",
  },
  {
    id: "CIV-005",
    title: "Road Potholes",
    category: "Roads",
    date: "2025-04-14",
    status: "Resolved",
    dept: "Roads Dept",
  },
];

function MyComplaints() {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    setComplaints(dummyComplaints);
  }, []);

  function getStatusBadge(status) {
    if (status === "Pending") return "badge bg-danger";
    if (status === "In Progress") return "badge bg-warning text-dark";
    if (status === "Resolved") return "badge bg-success";
    return "badge bg-secondary";
  }

  return (
    <>
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
                  <td>{c.date}</td>
                  <td>{c.dept}</td>
                  <td>
                    <span className={getStatusBadge(c.status)}>{c.status}</span>
                  </td>
                  <td>
                    <Link
                      to="/trackissue"
                      className="btn btn-sm btn-outline-primary"
                    >
                      Track
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default MyComplaints;
