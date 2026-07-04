import { Link } from "react-router-dom";

function UserFooter() {
  return (
    <footer className="bg-dark text-white-50 pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-4">
            <h5 className="text-warning fw-bold mb-2">Civic Issue Tracking</h5>
            <p className="small mb-0">
              A single place for residents to report civic issues and follow
              them through to resolution, together with local departments.
            </p>
          </div>
          <div className="col-6 col-md-2">
            <h6 className="text-white fw-semibold mb-3">Quick Links</h6>
            <ul className="list-unstyled small">
              <li className="mb-2">
                <Link
                  to="/userdashboard"
                  className="text-white-50 text-decoration-none"
                >
                  Dashboard
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/reportissue"
                  className="text-white-50 text-decoration-none"
                >
                  Report Issue
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/mycomplaints"
                  className="text-white-50 text-decoration-none"
                >
                  My Complaints
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/trackissue"
                  className="text-white-50 text-decoration-none"
                >
                  Track Issue
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md-2">
            <h6 className="text-white fw-semibold mb-3">Support</h6>
            <ul className="list-unstyled small">
              <li className="mb-2">
                <Link
                  to="/myprofile"
                  className="text-white-50 text-decoration-none"
                >
                  My Profile
                </Link>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white-50 text-decoration-none">
                  Help Center
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white-50 text-decoration-none">
                  Contact Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white-50 text-decoration-none">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h6 className="text-white fw-semibold mb-3">Contact</h6>
            <ul className="list-unstyled small mb-0">
              <li className="mb-2">Municipal Office, City Hall</li>
              <li className="mb-2">support@civictrack.gov</li>
              <li className="mb-2">+92 300 0000000</li>
            </ul>
          </div>
        </div>
        <hr className="border-secondary my-4" />
        <div className="d-flex flex-wrap justify-content-between small">
          <span>
            &copy; {new Date().getFullYear()} CivicTrack. All rights reserved.
          </span>
          <span>Resident Portal</span>
        </div>
      </div>
    </footer>
  );
}

export default UserFooter;
