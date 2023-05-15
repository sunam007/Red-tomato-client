import React, { createContext } from "react";

export const UserContext = createContext();

function UserProvider({ children }) {
  return (
    <UserContext.Provider value={{ user: "Akash" }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
