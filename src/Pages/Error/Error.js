import React from "react";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <h1>404 || Page Not Found</h1>
      <NavLink to="/">Go Back to Homepage</NavLink>
    </div>
  );
};

export default Error;
