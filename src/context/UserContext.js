import React, { createContext, useState } from "react";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { useAuthState } from "react-firebase-hooks/auth";

export const UserContext = createContext();

function UserProvider({ children }) {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [loading, setLoading] = useState(true);

  const GoogleProvider = new GoogleAuthProvider();

  const [user] = useAuthState(auth);

  // Google sign in
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, GoogleProvider);

      const user = result.user; // The signed-in user info.

      console.log("logged in user is: ", result.user);

      setLoggedInUser(user);
    } catch (error) {
      console.log(error);
    }
  };

  // sign out from Google
  const handleGoogleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <UserContext.Provider
      value={{
        handleGoogleSignIn,
        handleGoogleSignOut,
        loggedInUser,
        user,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
