import { createContext, useState } from "react";
import UserNavbar from "./UserNavbar";
import UserHero from "./UserHero";
import UserControl from "./UserControl";
import UserFooter from "./UserFooter";

export const UserDashContext = createContext();

function UserDashboard() {
  const [user, setUser] = useState({
    name: localStorage.getItem("userEmail") || "Resident",
  });

  return (
    <UserDashContext.Provider value={{ user, setUser }}>
      <UserNavbar />
      <UserHero />
      <UserControl />
      <UserFooter />
    </UserDashContext.Provider>
  );
}

export default UserDashboard;
