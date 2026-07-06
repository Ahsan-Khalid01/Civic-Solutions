import { createContext, useState } from "react";

export const DepartmentContext = createContext();

function DepartmentContextProvider({ children }) {
  const [department, setDepartment] = useState(null);

  function handleLogin(departmentId) {
    setDepartment({ id: departmentId, name: departmentId });
  }

  function handleLogout() {
    setDepartment(null);
  }

  return (
    <DepartmentContext.Provider
      value={{ department, handleLogin, handleLogout }}
    >
      {children}
    </DepartmentContext.Provider>
  );
}

export default DepartmentContextProvider;
