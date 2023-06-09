import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";

import HeaderAvator from "../../components/HeaderAvator";
import HeaderCartIndicator from "../../components/HeaderCartIndicator";
import FoodContext from "../../context/FoodContext";
import { UserContext } from "../../context/UserContext";

const Header = () => {
  const { itemsInTheCart } = useContext(FoodContext);
  // const { user } = useContext(UserContext);

  return (
    <div className="navbar bg-gray-950">
      <div className="navbar-start ">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {/* Mobile Navigation */}
            <li>
              <NavLink to="/">Home</NavLink>
            </li>

            <li>
              <NavLink to="/menu">Menu</NavLink>
            </li>
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost normal-case text-xl ml-4 md:ml-8 text-red-500"
        >
          Red Tomato
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {/* Desktop Navigation */}
          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          <li>
            <NavLink to="/menu">Menu</NavLink>
          </li>
          <li>
            <NavLink to="/cart">Cart</NavLink>
          </li>
          <li>
            <NavLink to="/checkout">Checkout</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end mr-4 md:mr-8">
        <div className="flex">
          <HeaderCartIndicator itemCount={itemsInTheCart.length} />
          <HeaderAvator image="https://i.ibb.co/S6KKK9D/Avatar.jpg" />
        </div>
      </div>
    </div>
  );
};

export default Header;
