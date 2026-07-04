import UserLoginBg from "../images/User Side Images/UserLoginBg.jpg";

function UserHero() {
  return (
    <>
      <div
        id="userCarousel"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >
        {/* Heading overlay */}
        <div
          className="position-absolute text-white"
          style={{ zIndex: "10", top: "30px", left: "20px" }}
        >
          <h1
            className="fw-bold"
            style={{
              fontSize: "55px",
              fontFamily: "Georgia",
              textShadow: "3px 3px 10px black",
              maxWidth: "700px",
              lineHeight: "1.2",
            }}
          >
            Welcome To <br /> Resident Portal
          </h1>
          <p className="text-white">
            Report civic issues and track their resolution from one place.
          </p>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={UserLoginBg}
              className="d-block w-100"
              style={{ height: "100vh", objectFit: "cover" }}
              alt="User Dashboard"
            />
            <div className="carousel-caption">
              <h3>RESIDENT PORTAL</h3>
            </div>
          </div>
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
    </>
  );
}

export default UserHero;
