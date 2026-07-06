import { Outlet } from "react-router-dom";
import UserNavbar from "./UserNavbar";


function UserLayout() {
  return (
    <>
      <UserNavbar />
      <div className="user-content">
        <Outlet />
      </div>
    </>
  );
}

export default UserLayout;
