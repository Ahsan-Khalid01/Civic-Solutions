import { Link } from "react-router-dom";

function AdminControl() {
  return (
    <div className="container mt-5 text-center">

      <h1 className="fw-bold">Admin Control Panel</h1>
      <p className="text-muted">
        Manage departments and civic issues from here.
      </p>

      <div className="mt-4 d-flex flex-wrap justify-content-center gap-3">

        <Link to="/viewissues" className="btn btn-primary btn-lg">
          View Issues
        </Link>

        <Link to="/viewdepartments" className="btn btn-success btn-lg">
          View Departments
        </Link>

        <Link to="/adddepartment" className="btn btn-warning btn-lg">
          Add Department
        </Link>

        <Link to="/modifydepartment" className="btn btn-info btn-lg">
          Modify Department
        </Link>

        <Link to="/deletedepartment" className="btn btn-danger btn-lg">
          Delete Department
        </Link>

        <Link to="/viewresidents" className="btn btn-dark btn-lg">
          View Residents
        </Link>

      </div>

    </div>
  );
}

export default AdminControl;