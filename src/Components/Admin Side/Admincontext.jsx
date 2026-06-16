import { createContext, useState } from "react";

export const AdminContext = createContext();

function AdminContextProvider({ children }) {
  const [user, setUser] = useState(null);

  function handleLogin(email) {
    setUser({ name: email });
  }

  function handleLogout() {
    setUser(null);
  }

  return (
    <AdminContext.Provider value={{ user, handleLogin, handleLogout }}>
      {children}
    </AdminContext.Provider>
  );
}

export default AdminContextProvider;