import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage } from "../utils/localstorage";

export const AuthContext = createContext({
  employees: [],
  admin: [],
});

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    employees: [],
    admin: [],
  });

  useEffect(() => {
    const { employees = [], admin = [] } = getLocalStorage() || {};
    setUserData({ employees, admin });
  }, []);

  return (
    <AuthContext.Provider value={userData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
