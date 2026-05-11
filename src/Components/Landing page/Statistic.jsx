function StatsSection() {
  const stats = [
    {
      value: "5000+",
      label: "Issues Reported",
      borderClass: "border-primary",
      textClass: "text-primary",
    },
    {
      value: "4200+",
      label: "Issues Resolved",
      borderClass: "border-success",
      textClass: "text-success",
    },
    {
      value: "50+",
      label: "Departments",
      borderClass: "border-warning",
      textClass: "text-warning",
    },
    {
      value: "10K+",
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
