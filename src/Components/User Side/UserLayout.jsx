import { Outlet } from "react-router-dom";
import UserNavbar from "./UserNavbar";
import UserContextProvider from "./userContext";

function UserLayout() {
  return (
    <UserContextProvider>
      <UserNavbar />
      <div className="user-content">
        {/* Outlet renders whichever dashboard page is active */}
        <Outlet />
      </div>
    </UserContextProvider>
  );
}

export default UserLayout;