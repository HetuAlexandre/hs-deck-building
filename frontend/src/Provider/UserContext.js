import React, { createContext, useState } from "react";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [status, setStatus] = useState("idle");
  const [user, setUser] = useState();
  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        status,
        setStatus,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
