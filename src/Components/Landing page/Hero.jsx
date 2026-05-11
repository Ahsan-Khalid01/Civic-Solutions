import picture1 from "../images/Landing PageImages/picture1.jpg";
import picture2 from "../images/Landing PageImages/picture2.jpg";
import picture3 from "../images/Landing PageImages/picture3.jpg";

function Hero() {
  const slides = [
    {
      image: picture3,
      title: "Safe City, Safe Life",
      description: "Report problems and make your city better.",
      alt: "City view with safe infrastructure",
      btnLabel: "Learn More",
    },
    {
      image: picture2,
      title: "Your Voice Matters",
      description: "Raise issues and get quick solutions.",
      alt: "Citizen reporting issue",
      btnLabel: "Start Now",
    },
    {
      image: picture1,
      title: "Better City Together",
      description: "Work with authorities for improvement.",
      alt: "City teamwork and progress",
      btnLabel: "Join Us",
    },
  ];

  return (
    <section id="home" style={{ marginTop: 0 }}>
      <div
        id="carouselExampleCaptions"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >
        <div
          className="position-absolute text-white"
          style={{ zIndex: 10, top: 30, left: 20 }}
        >
          <h1
            className="fw-bold"
            style={{
              fontSize: "55px",
              fontFamily: "Georgia",
              textShadow: "3px 3px 10px black",
              maxWidth: "700px",
              lineHeight: 1.2,
            }}
          >
            Civic Issue Tracking
            <br />& Resolution System
          </h1>
        </div>

        <div className="carousel-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : undefined}
              aria-label={`Slide ${index + 1}`}
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
                style={{ height: "100vh", objectFit: "cover" }}
                alt={slide.alt}
              />
              <div className="carousel-caption">
                <h3>{slide.title}</h3>
                <p>{slide.description}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}

export default Hero;
