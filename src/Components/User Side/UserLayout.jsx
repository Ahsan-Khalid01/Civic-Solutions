import { Outlet } from "react-router-dom";
import UserNavbar from "./UserNavbar";

// NOTE: UserContextProvider is NOT applied here on purpose — the whole app
// is already wrapped in a single UserContextProvider in main.jsx. Wrapping
// it again here created a second, separate context instance that shadowed
// the logged-in user's state.
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
