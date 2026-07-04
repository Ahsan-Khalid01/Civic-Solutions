import { NavLink, Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./userContext";

function UserNavbar() {
  const { user, handleLogout } = useContext(UserContext);

  const navLinks = [
    { to: "/userdashboard", label: "Dashboard" },
    { to: "/reportissue", label: "Report Issue" },
    { to: "/mycomplaints", label: "My Complaints" },
    { to: "/trackissue", label: "Track Issue" },
  ];

  const displayName = user?.name || "Resident";
  const initial = displayName.trim().charAt(0).toUpperCase() || "R";

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm sticky-top py-2">
      <div className="container-fluid px-3 px-lg-5">
        <Link
          to="/userdashboard"
          className="navbar-brand d-flex align-items-center gap-2"
        >
          <img
            src="/images/landing-page/logo.jpg"
            alt="CivicTrack logo"
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
          <span className="fw-bold text-warning fs-5">
            Civic Issue Tracking
          </span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#userNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="userNavbar">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
            {navLinks.map((link) => (
              <li key={link.label} className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    "nav-link px-3 " +
                    (isActive ? "text-warning fw-semibold" : "text-white")
                  }
                  to={link.to}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="d-flex align-items-center gap-3 mt-3 mt-lg-0">
            <div className="d-flex align-items-center gap-2 bg-secondary bg-opacity-25 rounded-pill px-3 py-1">
              <span
                className="bg-warning text-dark fw-bold rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: "28px", height: "28px", fontSize: "0.8rem" }}
              >
                {initial}
              </span>
              <span className="text-white small fw-semibold">
                {displayName}
              </span>
            </div>
            <Link
              className="btn btn-warning btn-sm fw-semibold"
              to="/userlogin"
              onClick={handleLogout}
            >
              Logout
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default UserNavbar;
