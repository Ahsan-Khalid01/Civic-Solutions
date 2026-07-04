import { Link } from "react-router-dom";

function UserControl() {
  return (
    <div className="container mt-5 text-center">
      <h1 className="fw-bold">Resident Control Panel</h1>
      <p className="text-muted">
        Manage your civic complaints and track their resolution from here.
      </p>

      <div className="mt-4 d-flex flex-wrap justify-content-center gap-3">
        <Link to="/reportissue" className="btn btn-warning btn-lg">
          Report New Issue
        </Link>

        <Link to="/mycomplaints" className="btn btn-primary btn-lg">
          My Complaints
        </Link>

        <Link to="/trackissue" className="btn btn-info btn-lg">
          Track My Issue
        </Link>

        <Link to="/myreviews" className="btn btn-success btn-lg">
          My Reviews
        </Link>

        <Link to="/myprofile" className="btn btn-dark btn-lg">
          My Profile
        </Link>
      </div>
    </div>
  );
}

export default UserControl;
