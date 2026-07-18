import { Outlet } from "react-router-dom";
import DepartmentNavbar from "./DepartmentNavbar";
import DepartmentFooter from "./DepartmentFooter";

function DepartmentLayout() {
  return (
    <div className="page-flex">
      <DepartmentNavbar />
      <div className="department-content">
        <Outlet />
      </div>
      <DepartmentFooter />
    </div>
  );
}

export default DepartmentLayout;
