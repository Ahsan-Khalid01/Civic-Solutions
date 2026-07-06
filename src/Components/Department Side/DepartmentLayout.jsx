import { Outlet } from "react-router-dom";
import DepartmentNavbar from "./DepartmentNavbar";

// NOTE: DepartmentContextProvider is applied once at the app level in
// main.jsx, so it is intentionally not repeated here.
function DepartmentLayout() {
  return (
    <>
      <DepartmentNavbar />
      <div className="department-content">
        <Outlet />
      </div>
    </>
  );
}

export default DepartmentLayout;
