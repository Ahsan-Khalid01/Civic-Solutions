import { createContext, useState } from "react";
import UserHero from "./UserHero";
import UserControl from "./UserControl";

export const UserDashContext = createContext();

function UserDashboard() {
  // UserNavbar and UserFooter are rendered once by UserLayout — do not add them here again.
  const [user, setUser] = useState({
    name: localStorage.getItem("userEmail") || "Resident",
  });

  return (
    <UserDashContext.Provider value={{ user, setUser }}>
      <UserHero />
      <UserControl />
    </UserDashContext.Provider>
  );
}

export default UserDashboard;
