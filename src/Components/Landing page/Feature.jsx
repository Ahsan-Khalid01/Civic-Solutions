import card1 from "../images/Landing PageImages/FeatureCards/card1 (2).jpg";
import card2 from "../images/Landing PageImages/FeatureCards/card2 (2).jpg";
import card3 from "../images/Landing PageImages/FeatureCards/card3 (2).jpg";
import card4 from "../images/Landing PageImages/FeatureCards/card4.jpg";
import card5 from "../images/Landing PageImages/FeatureCards/card5 (2).jpg";
import card6 from "../images/Landing PageImages/FeatureCards/card6 (2).jpg";

function Feature() {
  const features = [
    {
      image: card1,
      alt: "Issue Reporting",
      title: "Easy Issue Reporting",
      description:
        "Citizens can quickly report road, water, electricity, and garbage problems.",
    },
    {
      image: card2,
      alt: "Tracking",
      title: "Live Complaint Tracking",
      description:
        "Track complaint progress and get updates in real time from departments.",
    },
    {
      image: card3,
      alt: "Resolution",
      title: "Fast Issue Resolution",
      description:
        "Government departments resolve issues efficiently for safer smart cities.",
    },
    {
      image: card5,
      alt: "Departments",
      title: "Department Management",
      description:
        "Departments can manage and organize public complaints efficiently.",
    },
    {
      image: card4,
      alt: "Smart Monitoring",
      title: "Smart Monitoring",
      description:
        "Monitor city problems and maintain transparency in public services.",
    },
    {
      image: card6,
      alt: "Secure System",
      title: "Secure Digital Platform",
      description:
        "A secure and reliable system for citizens and government communication.",
    },
  ];

  return (
    <div className="container mt-5" id="features">
      <div className="text-center mb-5">
        <h1 className="fw-bold">Our Features</h1>
        <p className="text-muted">
          Smart solutions for better city management and public safety.
        </p>
      </div>

      <div className="row g-4">
        {features.map((feature) => (
          <div key={feature.title} className="col-lg-4 col-md-6">
            <div className="card shadow border-0 rounded-4 h-100">
              <img
                src={feature.image}
                className="card-img-top"
                alt={feature.alt}
                style={{ height: "230px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h4 className="card-title fw-bold">{feature.title}</h4>
                <p className="card-text text-muted">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Feature;
