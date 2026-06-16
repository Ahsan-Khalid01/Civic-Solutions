import { createContext, useState } from "react";

export const RegContext = createContext();

function RegistrationContext({ children }) {
  const [regData, setRegData] = useState({});

  function handleSaveStep(data) {
    setRegData((prev) => ({ ...prev, ...data }));
  }

  return (
    <RegContext.Provider value={{ regData, handleSaveStep }}>
      {children}
    </RegContext.Provider>
  );
}

export default RegistrationContext;