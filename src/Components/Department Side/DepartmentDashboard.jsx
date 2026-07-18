import { createContext, useState } from "react";
import DepartmentHero from "./DepartmentHero";
import DepartmentControl from "./DepartmentControl";

export const DepartmentDashContext = createContext();

function DepartmentDashboard() {
  // DepartmentNavbar and DepartmentFooter are rendered once by DepartmentLayout.
  const [department, setDepartment] = useState({
    name: localStorage.getItem("departmentId") || "Department",
  });

  return (
    <DepartmentDashContext.Provider value={{ department, setDepartment }}>
      <DepartmentHero />
      <DepartmentControl />
    </DepartmentDashContext.Provider>
  );
}

export default DepartmentDashboard;
