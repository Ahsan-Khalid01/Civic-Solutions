import { createBrowserRouter } from "react-router-dom";

import LandingPage from "./Components/Landing page/LandingPage";
import Feature from "./Components/Landing page/Feature";
import Statistic from "./Components/Landing page/Statistic";
import HowItWorks from "./Components/Landing page/HowItWorks";
import DepartmentsSection from "./Components/Landing page/DepartmentsSection";
import NewsSection from "./Components/Landing page/NewsSection";
import Navigation from "./Components/Landing page/Navigation";
import Footer from "./Components/Landing page/Footer";

import UserLogin from "./Components/UserLogin";
import AdminLogin from "./Components/Admin Side/AdminLogin";
import DepartmentLogin from "./Components/Department Side/DepartmentLogin";
import LoginCards from "./Components/Landing page/LoginCards";

import AdminDashboard from "./Components/Admin Side/AdminDashboard";
import AddDepartment from "./Components/Admin Side/AddDepartment";
import DeleteForm from "./Components/Admin Side/DeleteForm";
import Modify from "./Components/Admin Side/Modify";
import ViewIssues from "./Components/Admin Side/View/ViewIssues";
import ViewDepartments from "./Components/Admin Side/View/ViewDepartments";
import DepartmentDetail from "./Components/Admin Side/View/DepartmentDetail";
import ViewResidents from "./Components/Admin Side/View/ViewResidents";
import AdminNavbar from "./Components/Admin Side/AdminNavbar";
import AdminFooter from "./Components/Admin Side/AdminFooter";

import RegistrationPart1 from "./Components/UserRegistration/RegistrationPart1";
import RegistrationPart2 from "./Components/UserRegistration/RegistrationPart2";
import RegistrationPart3 from "./Components/UserRegistration/RegistrationPart3";

// User Imports
import UserLayout from "./Components/User Side/UserLayout";
import UserDashboard from "./Components/User Side/UserDashboard";
import ReportIssue from "./Components/User Side/ReportIssue";
import MyComplaints from "./Components/User Side/MyComplaints";
import TrackIssue from "./Components/User Side/TrackIssue";
import MyProfile from "./Components/User Side/MyProfile";

import EditIssue from "./Components/User Side/EditIssue";

// Department Imports
import DepartmentLayout from "./Components/Department Side/DepartmentLayout";
import DepartmentDashboard from "./Components/Department Side/DepartmentDashboard";
import ViewAssignedIssues from "./Components/Department Side/ViewAssignedIssues";
import UpdateIssueStatus from "./Components/Department Side/UpdateIssueStatus";
import DepartmentProfile from "./Components/Department Side/DepartmentProfile";

const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },

  {
    path: "/features",
    element: (
      <div className="page-flex">
        <Navigation />
        <div className="page-content">
          <Feature />
        </div>
        <Footer />
      </div>
    ),
  },
  {
    path: "/statistics",
    element: (
      <div className="page-flex">
        <Navigation />
        <div className="page-content">
          <Statistic />
        </div>
        <Footer />
      </div>
    ),
  },
  {
    path: "/howitworks",
    element: (
      <div className="page-flex">
        <Navigation />
        <div className="page-content">
          <HowItWorks />
        </div>
        <Footer />
      </div>
    ),
  },
  {
    path: "/departments",
    element: (
      <div className="page-flex">
        <Navigation />
        <div className="page-content">
          <DepartmentsSection />
        </div>
        <Footer />
      </div>
    ),
  },
  {
    path: "/newssection",
    element: (
      <div className="page-flex">
        <Navigation />
        <div className="page-content">
          <NewsSection />
        </div>
        <Footer />
      </div>
    ),
  },

  {
    path: "/login",
    element: (
      <div className="page-flex">
        <Navigation />
        <div className="page-content">
          <LoginCards />
        </div>
        <Footer />
      </div>
    ),
  },
  {
    path: "/userlogin",
    element: (
      <div className="page-flex">
        <Navigation />
        <div className="page-content">
          <UserLogin />
        </div>
        <Footer />
      </div>
    ),
  },
  {
    path: "/adminlogin",
    element: (
      <div className="page-flex">
        <Navigation />
        <div className="page-content">
          <AdminLogin />
        </div>
        <Footer />
      </div>
    ),
  },
  {
    path: "/departmentlogin",
    element: (
      <div className="page-flex">
        <Navigation />
        <div className="page-content">
          <DepartmentLogin />
        </div>
        <Footer />
      </div>
    ),
  },

  {
    path: "/register",
    element: (
      <div className="page-flex">
        <Navigation />
        <div className="page-content">
          <RegistrationPart1 />
        </div>
        <Footer />
      </div>
    ),
  },
  {
    path: "/register/step2",
    element: (
      <div className="page-flex">
        <Navigation />
        <div className="page-content">
          <RegistrationPart2 />
        </div>
        <Footer />
      </div>
    ),
  },
  {
    path: "/register/step3",
    element: (
      <div className="page-flex">
        <Navigation />
        <div className="page-content">
          <RegistrationPart3 />
        </div>
        <Footer />
      </div>
    ),
  },

  { path: "/admindashboard", element: <AdminDashboard /> },
  {
    path: "/viewissues",
    element: (
      <div className="page-flex">
        <AdminNavbar />
        <div className="page-content">
          <ViewIssues />
        </div>
        <AdminFooter />
      </div>
    ),
  },
  {
    path: "/viewdepartments",
    element: (
      <div className="page-flex">
        <AdminNavbar />
        <div className="page-content">
          <ViewDepartments />
        </div>
        <AdminFooter />
      </div>
    ),
  },
  {
    path: "/departmentdetail/:id",
    element: (
      <div className="page-flex">
        <AdminNavbar />
        <div className="page-content">
          <DepartmentDetail />
        </div>
        <AdminFooter />
      </div>
    ),
  },

  {
    path: "/adddepartment",
    element: (
      <div className="page-flex">
        <AdminNavbar />
        <div className="page-content">
          <AddDepartment />
        </div>
        <AdminFooter />
      </div>
    ),
  },
  {
    path: "/modifydepartment",
    element: (
      <div className="page-flex">
        <AdminNavbar />
        <div className="page-content">
          <Modify />
        </div>
        <AdminFooter />
      </div>
    ),
  },
  {
    path: "/deletedepartment",
    element: (
      <div className="page-flex">
        <AdminNavbar />
        <div className="page-content">
          <DeleteForm />
        </div>
        <AdminFooter />
      </div>
    ),
  },
  {
    path: "/viewresidents",
    element: (
      <div className="page-flex">
        <AdminNavbar />
        <div className="page-content">
          <ViewResidents />
        </div>
        <AdminFooter />
      </div>
    ),
  },

  {
    element: <UserLayout />,
    children: [
      { path: "/userdashboard", element: <UserDashboard /> },
      { path: "/reportissue", element: <ReportIssue /> },
      { path: "/mycomplaints", element: <MyComplaints /> },
      { path: "/trackissue", element: <TrackIssue /> },
      { path: "/myprofile", element: <MyProfile /> },
      { path: "/editissue/:id", element: <EditIssue /> },
    ],
  },

  {
    element: <DepartmentLayout />,
    children: [
      { path: "/departmentdashboard", element: <DepartmentDashboard /> },
      { path: "/viewassignedissues", element: <ViewAssignedIssues /> },
      { path: "/updateissuestatus", element: <UpdateIssueStatus /> },
      { path: "/departmentprofile", element: <DepartmentProfile /> },
    ],
  },
]);

export default router;
