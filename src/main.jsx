import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router.jsx";
import AdminContextProvider from "./Components/Admin Side/AdminContext.jsx";
import RegistrationContextProvider from "./Components/UserRegistration/RegistrationContext.jsx";

// 1. IMPORT YOUR USER CONTEXT HERE
import UserContextProvider from "./Components/User Side/userContext.jsx";
import DepartmentContextProvider from "./Components/Department Side/DepartmentContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AdminContextProvider>
      <RegistrationContextProvider>
        {/* 2. WRAP YOUR APP IN THE USER CONTEXT PROVIDER */}
        <UserContextProvider>
          <DepartmentContextProvider>
            <RouterProvider router={router} />
          </DepartmentContextProvider>
        </UserContextProvider>
      </RegistrationContextProvider>
    </AdminContextProvider>
  </StrictMode>
);