import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { viewDepartments } from "../../../serviceApi";

// Each category gets its own identity color and initial — like an
// official seal on a municipal record, not a repeated bootstrap icon.
const CATEGORY_STYLES = {
  water: { hue: "#0B6E99", initial: "W", label: "Water" },
  electricity: { hue: "#B7791F", initial: "E", label: "Electricity" },
  roads: { hue: "#4A5568", initial: "R", label: "Roads" },
  sanitation: { hue: "#2F7D5A", initial: "S", label: "Sanitation" },
  gas: { hue: "#C0392B", initial: "G", label: "Gas" },
  education: { hue: "#6B46C1", initial: "Ed", label: "Education" },
  utilities: { hue: "#0F766E", initial: "U", label: "Utilities" },
};

function getCategoryStyle(category) {
  const c = (category || "").toLowerCase();
  const key = Object.keys(CATEGORY_STYLES).find((k) => c.includes(k));
  return (
    CATEGORY_STYLES[key] || {
      hue: "#374151",
      initial: (category || "?").charAt(0).toUpperCase(),
      label: category || "General",
    }
  );
}

function ViewDepartments() {
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    viewDepartments()
      .then(setDepartments)
      .finally(() => setLoading(false));
  }, []);

  const filtered = departments.filter((dept) => {
    const query = search.toLowerCase();
    return (
      dept.departmentName?.toLowerCase().includes(query) ||
      dept.city?.toLowerCase().includes(query) ||
      dept.category?.toLowerCase().includes(query)
    );
  });

  const cityCount = new Set(departments.map((d) => d.city)).size;
  const categoryCount = new Set(departments.map((d) => d.category)).size;

  return (
    <div className="container py-5">
      <div className="registry-header mb-5">
        <span className="registry-eyebrow">Official Directory</span>
        <div className="d-flex flex-wrap justify-content-between align-items-end gap-3">
          <div>
            <h2 className="registry-title mb-1">Department Registry</h2>
            <p className="text-muted mb-0">
              {departments.length} department
              {departments.length !== 1 ? "s" : ""} across {cityCount} cit
              {cityCount !== 1 ? "ies" : "y"} and {categoryCount} categor
              {categoryCount !== 1 ? "ies" : "y"}
            </p>
          </div>
          <input
            type="text"
            className="form-control"
            style={{ maxWidth: "280px" }}
            placeholder="Search the registry..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {loading && <p className="text-muted">Loading registry...</p>}
      {!loading && filtered.length === 0 && (
        <p className="text-muted">No matching departments found.</p>
      )}

      <div className="registry-list">
        {filtered.map((dept, index) => {
          const style = getCategoryStyle(dept.category);
          return (
            <Link
              to={`/departmentdetail/${dept.id}`}
              className="registry-entry"
              key={dept.id}
              style={{ "--entry-hue": style.hue }}
            >
              <div className="registry-index">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="registry-seal">{style.initial}</div>

              <div className="registry-main">
                <div className="d-flex align-items-baseline gap-2 flex-wrap">
                  <h5 className="registry-name mb-0">{dept.departmentName}</h5>
                  <span className="registry-category">{style.label}</span>
                </div>
                <div className="registry-meta">
                  <span>
                    <i className="bi bi-geo-alt"></i> {dept.city},{" "}
                    {dept.postalCode}
                  </span>
                  <span>
                    <i className="bi bi-person-badge"></i> {dept.headName}
                  </span>
                </div>
              </div>

              <div className="registry-contact">
                <span>
                  <i className="bi bi-telephone me-1"></i> {dept.officialPhone}
                </span>
                <span className="text-danger">
                  <i className="bi bi-exclamation-triangle me-1"></i>{" "}
                  {dept.emergencyPhone}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default ViewDepartments;
