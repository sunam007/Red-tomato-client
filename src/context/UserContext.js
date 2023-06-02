import React, { createContext, useState } from "react";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

export const UserContext = createContext();

function UserProvider({ children }) {
  const [loggedInUser, setLoggedInUser] = useState({});
  const GoogleProvider = new GoogleAuthProvider(); // instance of google provider

  //sign in

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, GoogleProvider);
      const user = result.user; // The signed-in user info.
      setLoggedInUser(user);
    } catch (error) {
      console.log(error);
    }
  };

  // sign out

  const handleGoogleSignOut = async () => {
    try {
      await signOut(auth);
      console.log("user successfully Signed out");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <UserContext.Provider
      value={{ handleGoogleSignIn, handleGoogleSignOut, loggedInUser }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
