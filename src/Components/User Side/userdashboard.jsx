import { createContext, useState } from "react";
import UserHero from "./UserHero";
import UserControl from "./UserControl";
import UserFooter from "./UserFooter";

export const UserDashContext = createContext();

function UserDashboard() {
  // UserNavbar is rendered once by UserLayout — do not add it here again.
  const [user, setUser] = useState({
    name: localStorage.getItem("userEmail") || "Resident",
  });

  return (
    <UserDashContext.Provider value={{ user, setUser }}>
      <UserHero />
      <UserControl />
      <UserFooter />
    </UserDashContext.Provider>
  );
}

export default UserDashboard;
