import { Link } from "react-router-dom";
// import logo from "../images/Landing Page/logo.png";

function Navigation() {
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/features", label: "Features" },
    { to: "/howitworks", label: "How It Works" },
    { to: "/Departments", label: "Departments" },
    { to: "/statistics", label: "Statistics" },
    { to: "/newssection", label: "News" },
  ];

  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="navbar-brand d-flex align-items-center gap-2 text-warning">
        <img
          src="/images/landing-page/logo.jpg"
          alt="logo"
          style={{ width: "35px", height: "35px", borderRadius: "50%" }}
        />
        <span className="fw-bold">Civic Issue Tracking</span>
      </div>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          {navLinks.map((link) => (
            <li key={link.label} className="nav-item">
              <Link className="nav-link text-white" to={link.to}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
          <Link className="btn btn-warning mx-2" to="/login">
            Login
          </Link>
          <Link className="btn btn-outline-light" to="/register">
            Register
          </Link>
        </form>
      </div>
    </nav>
  );
}

export default Navigation;
