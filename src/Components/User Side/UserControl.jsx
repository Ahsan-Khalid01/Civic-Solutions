import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./userContext";
import { viewIssues } from "../../serviceApi";
import RoadIssue from "../images/User Side Images/Road issue.jpg";
import GarbageIssue from "../images/User Side Images/Garbage Issue.jpg";
import ElectricityIssue from "../images/User Side Images/Electricity issue.jpg";
import WaterIssue from "../images/User Side Images/Watter Issue.jpg";
import SewerageIssue from "../images/User Side Images/Sewerage issue.jpg";
import SchoolIssue from "../images/User Side Images/broken school wall.jpg";

const categories = [
  { title: "Roads", image: RoadIssue },
  { title: "Garbage", image: GarbageIssue },
  { title: "Electricity", image: ElectricityIssue },
  { title: "Water Supply", image: WaterIssue },
  { title: "Sewerage", image: SewerageIssue },
  { title: "School Infrastructure", image: SchoolIssue },
];

function statusBadge(status) {
  if (status === "Pending") return "badge bg-danger";
  if (status === "In Progress") return "badge bg-warning text-dark";
  if (status === "Resolved") return "badge bg-success";
  return "badge bg-secondary";
}

function UserControl() {
  const { user } = useContext(UserContext);
  const [myIssues, setMyIssues] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMyIssues() {
      try {
        const allIssues = await viewIssues();
        const mine = allIssues.filter((issue) => issue.residentEmail === user);
        setMyIssues(mine);
      } catch (error) {
        console.error("Failed to load complaints:", error);
      } finally {
        setLoading(false);
      }
    }

    if (user) loadMyIssues();
  }, [user]);

  const stats = [
    {
      label: "Total Complaints",
      value: myIssues.length,
      border: "border-secondary",
    },
    {
      label: "Pending",
      value: myIssues.filter((i) => i.status === "Pending").length,
      border: "border-danger",
    },
    {
      label: "In Progress",
      value: myIssues.filter((i) => i.status === "In Progress").length,
      border: "border-warning",
    },
    {
      label: "Resolved",
      value: myIssues.filter((i) => i.status === "Resolved").length,
      border: "border-success",
    },
  ];

  const recentComplaints = [...myIssues]
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
    .slice(0, 5);

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
        Everything you need to manage your civic complaints.
      </p>
      <div className="row g-4 mb-5">
        <div className="col-sm-6 col-lg-3">
          <Link
            to="/reportissue"
            className="btn btn-warning w-100 h-100 py-4 fw-semibold shadow-sm"
          >
            Report New Issue
          </Link>
        </div>
        <div className="col-sm-6 col-lg-3">
          <Link
            to="/mycomplaints"
            className="btn btn-primary w-100 h-100 py-4 fw-semibold shadow-sm"
          >
            My Complaints
          </Link>
        </div>
        <div className="col-sm-6 col-lg-3">
          <Link
            to="/trackissue"
            className="btn btn-info text-dark w-100 h-100 py-4 fw-semibold shadow-sm"
          >
            Track My Issue
          </Link>
        </div>
        <div className="col-sm-6 col-lg-3">
          <Link
            to="/myprofile"
            className="btn btn-dark w-100 h-100 py-4 fw-semibold shadow-sm"
          >
            My Profile
          </Link>
        </div>
      </div>

      <h2 className="fw-bold mb-1">Report by Category</h2>
      <p className="text-muted mb-4">
        Pick a category to jump straight into the report form.
      </p>
      <div className="row g-4 mb-5">
        {categories.map((c) => (
          <div className="col-6 col-md-4 col-lg-2" key={c.title}>
            <Link
              to="/reportissue"
              className="card border-0 shadow-sm text-decoration-none h-100"
            >
              <img
                src={c.image}
                alt={c.title}
                className="card-img-top"
                style={{ height: "110px", objectFit: "cover" }}
              />
              <div className="card-body p-2 text-center">
                <p className="mb-0 small fw-semibold text-dark">{c.title}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="d-flex justify-content-between align-items-center mb-3">
        <div>
          <h2 className="fw-bold mb-1">Recent Activity</h2>
          <p className="text-muted mb-0">Your latest submitted complaints.</p>
        </div>
        <Link to="/mycomplaints" className="btn btn-outline-dark btn-sm">
          View All
        </Link>
      </div>
      <div className="table-responsive shadow-sm">
        <table className="table table-hover align-middle mb-0">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Date</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {loading && (
              <tr>
                <td colSpan="5" className="text-center text-muted py-4">
                  Loading your complaints...
                </td>
              </tr>
            )}
            {!loading && recentComplaints.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center text-muted py-4">
                  You haven't reported any issues yet.
                </td>
              </tr>
            )}
            {!loading &&
              recentComplaints.map((c) => (
                <tr key={c.id}>
                  <td>
                    <span className="badge bg-secondary">{c.id}</span>
                  </td>
                  <td>{c.title}</td>
                  <td>{c.issueDate}</td>
                  <td>
                    <span className={statusBadge(c.status)}>{c.status}</span>
                  </td>
                  <td className="text-end">
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
  );
}

export default UserControl;
