function HowItWorks() {
  const steps = [
    {
      number: 1,
      colorClass: "text-primary",
      title: "Report Issue",
      description:
        "Citizens report civic issues like road damage, water problems, or electricity faults.",
    },
    {
      number: 2,
      colorClass: "text-success",
      title: "Assign Department",
      description: "The system automatically assigns the issue to the relevant department.",
    },
    {
      number: 3,
      colorClass: "text-warning",
      title: "Resolve & Update",
      description: "Authorities resolve the issue and update status for transparency.",
    },
  ];

  return (
    <div className="container py-5" id="howitworks">
      <h2 className="text-center fw-bold mb-5">How It Works</h2>

      <div className="row text-center g-4">
        {steps.map((step) => (
          <div key={step.number} className="col-md-4">
            <div className="card shadow-sm border-0 rounded-4 p-3">
              <h1 className={`${step.colorClass} fw-bold`}>{step.number}</h1>
              <h5 className="fw-bold">{step.title}</h5>
              <p className="text-muted">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HowItWorks;
