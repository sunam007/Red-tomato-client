import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const HeaderAvator = ({ image = "https://picsum.photos/200" }) => {
  const { handleGoogleSignOut, loggedInUser } = useContext(UserContext);

  console.log(loggedInUser);

  const { displayName, email, photoURL, uid } = loggedInUser;

  const loginVisibilityClassName = email && uid ? "hidden" : "";
  const signOutVisibilityClassName = email && uid ? " " : "hidden";

  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-8 rounded-full">
          <img src={photoURL} alt="" />
        </div>
      </label>
      <ul
        tabIndex={2}
        className="w-48 menu menu-compact rounded dropdown-content shadow bg-base-100 space-y-2 mt-3 p-2   "
      >
        <li>
          <button
            onClick={handleGoogleSignOut}
            className={`bg-yellow-100 hover:bg-yellow-300 text-gray-700 font-medium 
            ${signOutVisibilityClassName}
            `}
          >
            Sign out
          </button>
        </li>
        <li>
          <Link
            to="/login"
            className={`bg-emerald-300 hover:bg-emerald-400 text-gray-700 font-medium 
            ${loginVisibilityClassName}
            `}
          >
            Login
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default HeaderAvator;
