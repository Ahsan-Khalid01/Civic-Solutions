import { createContext, useState } from "react";
import AdminHero from "./AdminHero";
import AdminFooter from "./AdminFooter";
import AdminControl from "./AdminControl";
import AdminNavbar from "./AdminNavbar";

export const AdminContext = createContext();

function AdminDashboard() {
  const [user, setUser] = useState({
    name: localStorage.getItem("adminUser"), 
  });

  return (
    <AdminContext.Provider value={{ user, setUser }}>
      <AdminNavbar />
      <AdminHero />
      <AdminControl />
      <AdminFooter />
    </AdminContext.Provider>
  );
}

export default AdminDashboard;
