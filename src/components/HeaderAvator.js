import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const HeaderAvator = ({ image = "https://picsum.photos/200" }) => {
  const { handleGoogleSignOut, user } = useContext(UserContext);

  const { displayName = "", email = "", photoURL = "", uid = "" } = user || {};

  const loginVisibilityClassName = user ? "hidden" : "";

  const signOutVisibilityClassName = user ? "" : "hidden";

  // const avatarToggle = email $$ uid ?{ <img src={photoURL} alt="" /> }
  // const displayNameVisibilityClassName

  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-8 rounded-full">
          {user ? (
            <img src={photoURL} alt="" />
          ) : (
            <i className="fa-solid fa-user text-xl"></i>
          )}
        </div>
      </label>
      <ul
        tabIndex={0}
        className="w-48 menu menu-compact rounded dropdown-content shadow bg-base-100 space-y-2 mt-3 p-2   "
      >
        {displayName && (
          <li>
            <p className="text-gray-100">{`${displayName}`}</p>
          </li>
        )}
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
