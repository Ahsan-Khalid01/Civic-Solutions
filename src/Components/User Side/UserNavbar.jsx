import { Link } from "react-router-dom";
import { useContext } from "react";
// FIXED: Notice the exact lowercase "u" on "./userContext" to match the filename
import { UserContext } from "./userContext"; 

function UserNavbar() {
  const { user, handleLogout } = useContext(UserContext);

  const navLinks = [
    { to: "/userdashboard", label: "Dashboard" },
    { to: "/reportissue", label: "Report Issue" },
    { to: "/mycomplaints", label: "My Complaints" },
    { to: "/trackissue", label: "Track Issue" },
  ];

  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container-fluid">
        <div className="navbar-brand d-flex align-items-center gap-2 text-warning">
          <span className="fw-bold">Civic Issue Tracking</span>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#userNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="userNavbar">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {navLinks.map((link) => (
              <li key={link.label} className="nav-item">
                <Link className="nav-link text-white" to={link.to}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="d-flex align-items-center gap-3">
            {user && (
              <span className="text-warning fw-bold">Welcome, {user.name}</span>
            )}
            <Link
              className="btn btn-warning"
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