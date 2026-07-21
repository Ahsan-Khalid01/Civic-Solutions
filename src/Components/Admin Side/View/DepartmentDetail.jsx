import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  viewDepartments,
  viewIssues,
  updateIssueStatus,
} from "../../../serviceApi";

import WaterImg from "../../images/Department Side Images/water pipe fixing.jpg";
import ElectricityImg from "../../images/Department Side Images/electricity fixing.jpg";
import RoadImg from "../../images/Department Side Images/Road fixing.jpg";
import SanitationImg from "../../images/Department Side Images/garabage collector.jpg";
import GasImg from "../../images/Department Side Images/Gas fixing.jpg";
import EducationImg from "../../images/Department Side Images/school building repair.jpg";

const CATEGORY_STYLES = {
  water: { hue: "#0B6E99", label: "Water", image: WaterImg },
  electricity: { hue: "#B7791F", label: "Electricity", image: ElectricityImg },
  roads: { hue: "#4A5568", label: "Roads", image: RoadImg },
  sanitation: { hue: "#2F7D5A", label: "Sanitation", image: SanitationImg },
  gas: { hue: "#C0392B", label: "Gas", image: GasImg },
  education: { hue: "#6B46C1", label: "Education", image: EducationImg },
  utilities: { hue: "#0F766E", label: "Utilities", image: WaterImg },
};

function getCategoryStyle(category) {
  const c = (category || "").toLowerCase();
  const key = Object.keys(CATEGORY_STYLES).find((k) => c.includes(k));
  return (
    CATEGORY_STYLES[key] || {
      hue: "#374151",
      label: category || "General",
      image: RoadImg,
    }
  );
}

function statusBadgeClass(status) {
  if (status === "Resolved") return "bg-success";
  if (status === "In Progress") return "bg-primary";
  if (status === "Pending") return "bg-warning text-dark";
  return "bg-secondary";
}

function DepartmentDetail() {
  const { id } = useParams();
  const [department, setDepartment] = useState(null);
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState(null);

  async function loadData() {
    setLoading(true);
    const [departments, allIssues] = await Promise.all([
      viewDepartments(),
      viewIssues(),
    ]);
    const dept = departments.find((d) => String(d.id) === id);
    setDepartment(dept);

    if (dept) {
      const related = allIssues.filter(
        (issue) =>
          issue.category?.toLowerCase() === dept.category?.toLowerCase(),
      );
      setIssues(related);
    }
    setLoading(false);
  }

  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  async function markResolved(issueId) {
    setUpdatingId(issueId);
    await updateIssueStatus({ id: issueId, status: "Resolved" });
    await loadData();
    setUpdatingId(null);
  }

  if (loading) {
    return <p className="text-center text-muted py-5">Loading department...</p>;
  }

  if (!department) {
    return (
      <div className="container py-5 text-center">
        <p className="text-muted mb-3">Department not found.</p>
        <Link to="/viewdepartments" className="btn btn-outline-dark">
          Back to Registry
        </Link>
      </div>
    );
  }

  const style = getCategoryStyle(department.category);
  const pendingCount = issues.filter((i) => i.status === "Pending").length;
  const resolvedCount = issues.filter((i) => i.status === "Resolved").length;

  return (
    <div>
      <div
        className="detail-banner"
        style={{ backgroundImage: `url(${style.image})` }}
      >
        <div className="detail-banner-overlay">
          <div className="container">
            <Link to="/viewdepartments" className="detail-back-link">
              <i className="bi bi-arrow-left"></i> Back to Registry
            </Link>
            <span
              className="registry-category d-inline-block mb-2"
              style={{
                "--entry-hue": style.hue,
                backgroundColor: "rgba(255,255,255,0.9)",
              }}
            >
              {style.label}
            </span>
            <h1 className="detail-title">{department.departmentName}</h1>
            <p className="detail-subtitle">
              <i className="bi bi-geo-alt"></i> {department.city},{" "}
              {department.postalCode}
            </p>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row g-3 mb-5">
          <div className="col-6 col-md-3">
            <div className="card h-100 shadow-sm border-0 border-start border-4 border-secondary">
              <div className="card-body">
                <h3 className="fw-bold mb-0">{issues.length}</h3>
                <p className="text-muted small mb-0">Total Issues</p>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="card h-100 shadow-sm border-0 border-start border-4 border-danger">
              <div className="card-body">
                <h3 className="fw-bold mb-0">{pendingCount}</h3>
                <p className="text-muted small mb-0">Pending</p>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="card h-100 shadow-sm border-0 border-start border-4 border-success">
              <div className="card-body">
                <h3 className="fw-bold mb-0">{resolvedCount}</h3>
                <p className="text-muted small mb-0">Resolved</p>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="card h-100 shadow-sm border-0 border-start border-4 border-primary">
              <div className="card-body">
                <h3 className="fw-bold mb-0">{department.headName}</h3>
                <p className="text-muted small mb-0">Department Head</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row g-4 mb-5">
          <div className="col-md-6">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body">
                <h6 className="fw-bold mb-3">Contact Information</h6>
                <p className="mb-2">
                  <i className="bi bi-telephone me-2"></i>
                  {department.officialPhone}
                  <span className="text-muted ms-1">(official)</span>
                </p>
                <p className="mb-0 text-danger">
                  <i className="bi bi-exclamation-triangle me-2"></i>
                  {department.emergencyPhone}
                  <span className="text-muted ms-1">(emergency)</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body">
                <h6 className="fw-bold mb-3">Login Credentials</h6>
                <p className="mb-0">
                  <i className="bi bi-person-badge me-2"></i>
                  Login ID: {department.loginId}
                </p>
              </div>
            </div>
          </div>
        </div>

        <h5 className="fw-bold mb-3">Issues in {style.label}</h5>

        {issues.length === 0 ? (
          <p className="text-muted">
            No issues currently reported under this department's category.
          </p>
        ) : (
          <div className="table-responsive shadow-sm">
            <table className="table table-hover align-middle mb-0">
              <thead className="table-dark">
                <tr>
                  <th>Title</th>
                  <th>Location</th>
                  <th>Priority</th>
                  <th>Status</th>
                  <th>Reported By</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {issues.map((issue) => (
                  <tr key={issue.id}>
                    <td className="fw-semibold">{issue.title}</td>
                    <td>{issue.location}</td>
                    <td>{issue.priority}</td>
                    <td>
                      <span
                        className={`badge rounded-pill ${statusBadgeClass(issue.status)}`}
                      >
                        {issue.status}
                      </span>
                    </td>
                    <td>{issue.residentEmail}</td>
                    <td className="text-end">
                      {issue.status !== "Resolved" && (
                        <button
                          className="btn btn-sm btn-outline-success"
                          disabled={updatingId === issue.id}
                          onClick={() => markResolved(issue.id)}
                        >
                          {updatingId === issue.id
                            ? "Updating..."
                            : "Mark Resolved"}
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default DepartmentDetail;
