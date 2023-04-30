import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../Firebase/Firebase";
const auth = getAuth(app);
export const AuthContextProvider = createContext(null);
const createAccount = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};
const verifyEmail = () => {
  return sendEmailVerification(auth.currentUser);
};
const logIn = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};
const forgetPassword = (email) => {
  return sendPasswordResetEmail(auth, email);
};
const logOut = () => {
  return signOut(auth);
};
const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [news, setData] = useState([]);
  console.log(news);
  useEffect(() => {
    fetch("news.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      return unsubscribe();
    };
  }, []);
  const authInfo = {
    user,
    news,
    createAccount,
    verifyEmail,
    logIn,
    forgetPassword,
    logOut,
  };
  return (
    <AuthContextProvider.Provider value={authInfo}>
      {children}
    </AuthContextProvider.Provider>
  );
};

export default AuthContext;
