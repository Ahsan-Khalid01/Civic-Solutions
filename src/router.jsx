import { createBrowserRouter } from "react-router-dom";

import LandingPage from "./Components/Landing page/LandingPage";
import Feature from "./Components/Landing page/Feature";
import Statistic from "./Components/Landing page/Statistic";
import HowItWorks from "./Components/Landing page/HowItWorks";
import DepartmentsSection from "./Components/Landing page/DepartmentsSection";
import NewsSection from "./Components/Landing page/NewsSection";

import UserLogin from "./Components/UserLogin";
// import RegistrationPart1 from "./Components/UserRegistration/RegistrationPart1";
import AdminLogin from "./Components/Admin Side/AdminLogin";
import DepartmentLogin from "./Components/Department Side/DepartmentLogin";
import LoginCards from "./Components/Landing page/LoginCards";

import AdminDashboard from "./Components/Admin Side/AdminDashboard";
import AddDepartment from "./Components/Admin Side/AddDepartment";
import DeleteForm from "./Components/Admin Side/DeleteForm";
import Modify from "./Components/Admin Side/Modify";
import ViewIssues from "./Components/Admin Side/View/ViewIssues";
import ViewDepartments from "./Components/Admin Side/View/ViewDepartments";
import ViewResidents from "./Components/Admin Side/View/ViewResidents";

import RegistrationPart1 from "./Components/UserRegistration/RegistrationPart1";
import RegistrationPart2 from "./Components/UserRegistration/RegistrationPart2";
import RegistrationPart3 from "./Components/UserRegistration/RegistrationPart3";

const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },

  { path: "/features", element: <Feature /> },
  { path: "/statistics", element: <Statistic /> },
  { path: "/howitworks", element: <HowItWorks /> },

  { path: "/departments", element: <DepartmentsSection /> },
    { path: "/newssection", element: <NewsSection /> },

  { path: "/login", element: <LoginCards /> },

  { path: "/userlogin", element: <UserLogin /> },
  { path: "/register", element: <RegistrationPart1 /> },

  { path: "/adminlogin", element: <AdminLogin /> },
  { path: "/departmentlogin", element: <DepartmentLogin /> },

  { path: "/admindashboard", element: <AdminDashboard /> },

  { path: "/viewissues", element: <ViewIssues /> },
  { path: "/viewdepartments", element: <ViewDepartments /> },
  { path: "/adddepartment", element: <AddDepartment /> },
  { path: "/modifydepartment", element: <Modify /> },
  { path: "/deletedepartment", element: <DeleteForm /> },
  { path: "/viewresidents", element: <ViewResidents /> },

// { path: "/register", element: <RegistrationPart1 /> },
{ path: "/register/step2", element: <RegistrationPart2 /> },
{ path: "/register/step3", element: <RegistrationPart3 /> },
]);

export default router;