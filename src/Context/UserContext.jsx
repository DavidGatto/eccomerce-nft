import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserContextComponent = ({ children }) => {
  const [userEmail, setUserEmail] = useState(null);

  return (
    <UserContext.Provider value={{ userEmail, setUserEmail }}>
      {children}
    </UserContext.Provider>
  );
};
