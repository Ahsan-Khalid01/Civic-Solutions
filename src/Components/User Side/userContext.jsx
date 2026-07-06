import { createContext, useState } from "react";

export const UserContext = createContext();

function UserContextProvider({ children }) {
  const [user, setUser] = useState(localStorage.getItem("userEmail") || null);

  function handleLogin(email) {
    localStorage.setItem("userEmail", email);
    setUser(email);
  }

  function handleLogout() {
    localStorage.removeItem("userEmail");
    setUser(null);
  }

  return (
    <UserContext.Provider value={{ user, handleLogin, handleLogout }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
