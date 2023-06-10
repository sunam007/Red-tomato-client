import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

import { UserContext } from "../context/UserContext";
import { auth } from "../firebase/firebase.config";

function PrivateRoute({ children }) {
  const { loggedInUser } = useContext(UserContext);

  const [user] = useAuthState(auth);

  console.log(user);

  console.log("logged in user", loggedInUser);

  const location = useLocation();

  console.log("location is:", location);

  if (!user) return <Navigate to="/login" state={{ from: location }} replace />;

  return children;
}

export default PrivateRoute;
