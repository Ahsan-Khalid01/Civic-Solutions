
import AdminHero from "./AdminHero";
import AdminFooter from "./AdminFooter";
import AdminControl from "./AdminControl";
import AdminNavbar from "./AdminNavbar";

function AdminDashboard() {
  return (
    <>
      <AdminNavbar />
      <AdminHero />
      <AdminControl/>
      <AdminFooter />
      
    </>
  );
}

export default AdminDashboard;