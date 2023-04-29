import React, { createContext } from "react";
import { getAuth } from "firebase/auth";
import app from "../Firebase/Firebase";

const auth = getAuth(app);
const AuthContextProvider = createContext(null);
const AuthContext = ({ children }) => {
  const user = { displayName: "Amit" };
  return (
    <AuthContextProvider.Provider value={user}>
      {children}
    </AuthContextProvider.Provider>
  );
};

export default AuthContext;
