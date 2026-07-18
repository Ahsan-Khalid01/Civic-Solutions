import { Outlet } from "react-router-dom";
import UserNavbar from "./UserNavbar";
import UserFooter from "./UserFooter";

function UserLayout() {
  return (
    <div className="page-flex">
      <UserNavbar />
      <div className="user-content">
        <Outlet />
      </div>
      <UserFooter />
    </div>
  );
}

export default UserLayout;
