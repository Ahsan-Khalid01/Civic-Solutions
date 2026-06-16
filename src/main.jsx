import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router.jsx";
import AdminContextProvider from "./Components/Admin Side/AdminContext.jsx";
import RegistrationContextProvider from "./Components/UserRegistration/RegistrationContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AdminContextProvider>
      <RegistrationContextProvider>
        <RouterProvider router={router} />
      </RegistrationContextProvider>
    </AdminContextProvider>
  </StrictMode>
);