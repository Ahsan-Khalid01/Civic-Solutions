import { useContext } from "react";
import { DepartmentContext } from "./DepartmentContext";
import RoadFixing from "../images/Department Side Images/Road fixing.jpg";
import ElectricityFixing from "../images/Department Side Images/electricity fixing.jpg";
import WaterPipeFixing from "../images/Department Side Images/water pipe fixing.jpg";

function DepartmentHero() {
  const { department } = useContext(DepartmentContext);
  const displayName = department?.name || "Department";

  const slides = [
    {
      image: RoadFixing,
      alt: "Department crew repairing a damaged road",
      caption: "Repair crews resolving road complaints",
    },
    {
      image: ElectricityFixing,
      alt: "Department crew fixing an electricity fault",
      caption: "Restoring power faults reported by residents",
    },
    {
      image: WaterPipeFixing,
      alt: "Department crew fixing a water pipe",
      caption: "Fixing water supply issues on the ground",
    },
  ];

  return (
    <section>
      <div
        id="departmentCarousel"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        data-bs-interval="3500"
      >
        <div
          className="position-absolute text-white"
          style={{ zIndex: 10, top: "40px", left: "30px", maxWidth: "600px" }}
        >
          <p
            className="text-warning fw-bold text-uppercase small mb-2"
            style={{ letterSpacing: "1px" }}
          >
            Department Portal
          </p>
          <h1
            className="fw-bold"
            style={{
              fontSize: "48px",
              fontFamily: "Georgia",
              textShadow: "2px 2px 8px black",
            }}
          >
            Welcome, {displayName}
          </h1>
          <p className="fs-5" style={{ textShadow: "1px 1px 4px black" }}>
            View the issues assigned to your department and update their status
            through to resolution.
          </p>
        </div>

        <div className="carousel-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#departmentCarousel"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
            />
          ))}
        </div>

        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <img
                src={slide.image}
                className="d-block w-100"
                style={{
                  height: "70vh",
                  objectFit: "cover",
                  filter: "brightness(55%)",
                }}
                alt={slide.alt}
              />
              <div className="carousel-caption d-none d-md-block">
                <p className="fw-semibold mb-0">{slide.caption}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#departmentCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#departmentCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </section>
  );
}

export default DepartmentHero;
