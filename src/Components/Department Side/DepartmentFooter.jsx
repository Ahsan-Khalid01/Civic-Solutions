import { Link } from "react-router-dom";

function DepartmentFooter() {
  return (
    <footer className="bg-dark text-white-50 pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-4">
            <h5 className="text-warning fw-bold mb-2">Civic Issue Tracking</h5>
            <p className="small mb-0">
              Department portal for reviewing assigned civic complaints and
              updating their status until residents see them resolved.
            </p>
          </div>

          <div className="col-6 col-md-2">
            <h6 className="text-white fw-semibold mb-3">Quick Links</h6>
            <ul className="list-unstyled small">
              <li className="mb-2">
                <Link
                  to="/departmentdashboard"
                  className="text-white-50 text-decoration-none"
                >
                  Dashboard
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/viewassignedissues"
                  className="text-white-50 text-decoration-none"
                >
                  Assigned Issues
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/updateissuestatus"
                  className="text-white-50 text-decoration-none"
                >
                  Update Status
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-2">
            <h6 className="text-white fw-semibold mb-3">Support</h6>
            <ul className="list-unstyled small">
              <li className="mb-2">
                <Link
                  to="/departmentprofile"
                  className="text-white-50 text-decoration-none"
                >
                  Profile
                </Link>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white-50 text-decoration-none">
                  Help Center
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white-50 text-decoration-none">
                  Contact Admin
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-4">
            <h6 className="text-white fw-semibold mb-3">Contact</h6>
            <ul className="list-unstyled small mb-0">
              <li className="mb-2">Municipal Office, City Hall</li>
              <li className="mb-2">departments@civictrack.gov</li>
              <li className="mb-2">+92 300 0000000</li>
            </ul>
          </div>
        </div>

        <hr className="border-secondary my-4" />

        <div className="d-flex flex-wrap justify-content-between small">
          <span>
            &copy; {new Date().getFullYear()} CivicTrack. All rights reserved.
          </span>
          <span>Department Portal</span>
        </div>
      </div>
    </footer>
  );
}

export default DepartmentFooter;
