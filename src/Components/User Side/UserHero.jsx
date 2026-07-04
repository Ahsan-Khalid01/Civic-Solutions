import { useContext } from "react";
import { UserContext } from "./userContext";
import RoadIssue from "../images/User Side Images/Road issue.jpg";
import GarbageIssue from "../images/User Side Images/Garbage Issue.jpg";
import SewerageIssue from "../images/User Side Images/Sewerage issue.jpg";

function UserHero() {
  const { user } = useContext(UserContext);
  const displayName = user?.name || "Resident";
  const firstName = displayName.split("@")[0];

  const slides = [
    {
      image: RoadIssue,
      alt: "Damaged road reported by a resident",
      caption: "Report road damage in your neighborhood",
    },
    {
      image: GarbageIssue,
      alt: "Uncollected garbage reported by a resident",
      caption: "Flag sanitation and garbage collection issues",
    },
    {
      image: SewerageIssue,
      alt: "Sewerage issue reported by a resident",
      caption: "Track sewerage and water complaints end to end",
    },
  ];

  return (
    <section>
      <div
        id="userCarousel"
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
            Resident Portal
          </p>
          <h1
            className="fw-bold"
            style={{
              fontSize: "48px",
              fontFamily: "Georgia",
              textShadow: "2px 2px 8px black",
            }}
          >
            Welcome back, {firstName}
          </h1>
          <p className="fs-5" style={{ textShadow: "1px 1px 4px black" }}>
            Report civic issues and track their resolution, all from one place.
          </p>
        </div>

        <div className="carousel-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#userCarousel"
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
          data-bs-target="#userCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#userCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </section>
  );
}

export default UserHero;
