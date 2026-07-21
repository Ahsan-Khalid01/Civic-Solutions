import { useState, useEffect } from "react";
import { viewResidents, viewDepartments, viewIssues } from "../../serviceApi";

function StatsSection() {
  const [counts, setCounts] = useState({
    issuesReported: 0,
    issuesResolved: 0,
    departments: 0,
    residents: 0,
  });

  useEffect(() => {
    async function loadStats() {
      try {
        const [residents, departments, issues] = await Promise.all([
          viewResidents(),
          viewDepartments(),
          viewIssues(),
        ]);

        const resolvedCount = issues.filter(
          (issue) => issue.status === "Resolved",
        ).length;

        setCounts({
          issuesReported: issues.length,
          issuesResolved: resolvedCount,
          departments: departments.length,
          residents: residents.length,
        });
      } catch (error) {
        console.error("Failed to load stats:", error);
      }
    }

    loadStats();
  }, []);

  const stats = [
    {
      value: counts.issuesReported,
      label: "Issues Reported",
      borderClass: "border-primary",
      textClass: "text-primary",
    },
    {
      value: counts.issuesResolved,
      label: "Issues Resolved",
      borderClass: "border-success",
      textClass: "text-success",
    },
    {
      value: counts.departments,
      label: "Departments",
      borderClass: "border-warning",
      textClass: "text-warning",
    },
    {
      value: counts.residents,
      label: "Registered Users",
      borderClass: "border-danger",
      textClass: "text-danger",
    },
  ];

  return (
    <div className="container py-5" id="statistics">
      <h2 className="text-center fw-bold mb-5">Our Impact in Numbers</h2>

      <div className="row text-center g-4">
        {stats.map((stat) => (
          <div key={stat.label} className="col-md-3 col-6">
            <div className={`card ${stat.borderClass} shadow-sm rounded-4`}>
              <div className="card-body">
                <h2 className={`fw-bold ${stat.textClass}`}>{stat.value}</h2>
                <p className="text-muted mb-0">{stat.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StatsSection;
