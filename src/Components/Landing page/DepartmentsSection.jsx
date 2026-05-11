function DepartmentsSection() {
  const departments = [
    {
      title: "City Services",
      image: "/images/landing-page/city.jpg",
      alt: "City",
      description: "Overall civic management and smart city operations.",
    },
    {
      title: "Education",
      image: "/images/landing-page/school.jpg",
      alt: "School",
      description: "Handles school infrastructure and education issues.",
    },
    {
      title: "Electricity",
      image: "/images/landing-page/electricity.jpg",
      alt: "Electricity",
      description: "Manages power supply and street lights.",
    },
    {
      title: "Roads",
      image: "/images/landing-page/road.jpg",
      alt: "Road",
      description: "Fixes road damage and traffic issues.",
    },
    {
      title: "Sanitation",
      image: "/images/landing-page/sanitation.jpg",
      alt: "Sanitation",
      description: "Keeps city clean and manages waste.",
    },
    {
      title: "Sui Gas",
      image: "/images/landing-page/gas.jpg",
      alt: "Gas",
      description: "Handles gas supply and leakage issues.",
    },
  ];

  return (
    <div className="container mt-5" id="departments">
      <div className="text-center mb-5">
        <h1 className="fw-bold">Departments We Work With</h1>
        <p className="text-muted">
          Different government departments handling civic issues efficiently.
        </p>
      </div>

      <div className="row g-4">
        {departments.map((department) => (
          <div key={department.title} className="col-lg-4 col-md-6">
            <div className="card shadow border-0 rounded-4 h-100">
              <img
                src={department.image}
                className="card-img-top"
                alt={department.alt}
                style={{ height: "230px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h4 className="fw-bold">{department.title}</h4>
                <p className="text-muted">{department.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DepartmentsSection;
