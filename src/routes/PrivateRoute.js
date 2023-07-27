import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

import { auth } from "../firebase/firebase.config";
import Spinner from "../components/Spinner";

function PrivateRoute({ children }) {
  const [user, loading] = useAuthState(auth);

  const location = useLocation();
  console.log(location);

  if (loading)
    return (
      <>
        <div className="w-screen h-screen flex justify-center items-center bg-white">
          <Spinner />
        </div>
      </>
    );

  if (user) return children;

  return <Navigate to="/login" state={{ from: location }} replace />;
}

export default PrivateRoute;
