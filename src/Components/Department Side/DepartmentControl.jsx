import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { viewIssues } from "../../serviceApi";
import RoadFixing from "../images/Department Side Images/Road fixing.jpg";
import GasFixing from "../images/Department Side Images/Gas fixing.jpg";
import ElectricityFixing from "../images/Department Side Images/electricity fixing.jpg";
import WaterPipeFixing from "../images/Department Side Images/water pipe fixing.jpg";
import GarbageCollector from "../images/Department Side Images/garabage collector.jpg";
import SchoolRepair from "../images/Department Side Images/school building repair.jpg";

const categories = [
  { title: "Roads", image: RoadFixing },
  { title: "Gas", image: GasFixing },
  { title: "Electricity", image: ElectricityFixing },
  { title: "Water Supply", image: WaterPipeFixing },
  { title: "Sanitation", image: GarbageCollector },
  { title: "Education", image: SchoolRepair },
];

function statusBadge(status) {
  if (status === "Pending") return "badge bg-danger";
  if (status === "In Progress") return "badge bg-warning text-dark";
  if (status === "Resolved") return "badge bg-success";
  return "badge bg-secondary";
}

function DepartmentControl() {
  const [issues, setIssues] = useState([]);
  const [pendingCount, setPendingCount] = useState(0);
  const [progressCount, setProgressCount] = useState(0);
  const [resolvedCount, setResolvedCount] = useState(0);

  useEffect(() => {
    viewIssues().then(function (data) {
      setIssues(data);

      var pending = 0;
      var progress = 0;
      var resolved = 0;

      for (var i = 0; i < data.length; i++) {
        if (data[i].status === "Pending") {
          pending = pending + 1;
        }
        if (data[i].status === "In Progress") {
          progress = progress + 1;
        }
        if (data[i].status === "Resolved") {
          resolved = resolved + 1;
        }
      }

      setPendingCount(pending);
      setProgressCount(progress);
      setResolvedCount(resolved);
    });
  }, []);

  const stats = [
    {
      label: "Assigned to Us",
      value: issues.length,
      border: "border-secondary",
    },
    { label: "Pending", value: pendingCount, border: "border-danger" },
    { label: "In Progress", value: progressCount, border: "border-warning" },
    { label: "Resolved", value: resolvedCount, border: "border-success" },
  ];

  return (
    <div className="container py-5">
      <div className="row g-3 mb-5">
        {stats.map((s) => (
          <div className="col-6 col-lg-3" key={s.label}>
            <div
              className={`card h-100 shadow-sm border-0 border-start border-4 ${s.border}`}
            >
              <div className="card-body">
                <h3 className="fw-bold mb-0">{s.value}</h3>
                <p className="text-muted small mb-0">{s.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2 className="fw-bold mb-1">Quick Actions</h2>
      <p className="text-muted mb-4">
        Manage the issues assigned to your department.
      </p>
      <div className="row g-4 mb-5">
        <div className="col-sm-6 col-lg-4">
          <Link
            to="/viewassignedissues"
            className="btn btn-primary w-100 h-100 py-4 fw-semibold shadow-sm"
          >
            View Assigned Issues
          </Link>
        </div>
        <div className="col-sm-6 col-lg-4">
          <Link
            to="/updateissuestatus"
            className="btn btn-warning w-100 h-100 py-4 fw-semibold shadow-sm"
          >
            Update Issue Status
          </Link>
        </div>
        <div className="col-sm-6 col-lg-4">
          <Link
            to="/departmentprofile"
            className="btn btn-dark w-100 h-100 py-4 fw-semibold shadow-sm"
          >
            Department Profile
          </Link>
        </div>
      </div>

      <h2 className="fw-bold mb-1">Categories You Handle</h2>
      <p className="text-muted mb-4">Issue types routed to your department.</p>
      <div className="row g-4 mb-5">
        {categories.map((c) => (
          <div className="col-6 col-md-4 col-lg-2" key={c.title}>
            <div className="card border-0 shadow-sm h-100">
              <img
                src={c.image}
                alt={c.title}
                className="card-img-top"
                style={{ height: "110px", objectFit: "cover" }}
              />
              <div className="card-body p-2 text-center">
                <p className="mb-0 small fw-semibold text-dark">{c.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="d-flex justify-content-between align-items-center mb-3">
        <div>
          <h2 className="fw-bold mb-1">Recently Assigned</h2>
          <p className="text-muted mb-0">
            Issues routed to your department most recently.
          </p>
        </div>
        <Link to="/viewassignedissues" className="btn btn-outline-dark btn-sm">
          View All
        </Link>
      </div>
      <div className="table-responsive shadow-sm">
        <table className="table table-hover align-middle mb-0">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Location</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {issues.map((issue) => (
              <tr key={issue.id}>
                <td>
                  <span className="badge bg-secondary">{issue.id}</span>
                </td>
                <td>{issue.title}</td>
                <td>{issue.location}</td>
                <td>
                  <span className={statusBadge(issue.status)}>
                    {issue.status}
                  </span>
                </td>
                <td className="text-end">
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

export default DepartmentControl;
