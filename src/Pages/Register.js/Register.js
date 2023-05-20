import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { UserContext } from "../../context/UserContext";

const Register = ({ type = "REGISTER" }) => {
  const { handleGoogleSignIn } = useContext(UserContext);
  return (
    <div>
      <>
        <div className="my-4">
          <div className="w-80 h-128 mx-auto bg-white rounded">
            <div className="bg-black ">
              <h1 className="text-2xl  text-white text-center py-4">{type}</h1>
            </div>
            <form className="w-64 space-y-4 mx-auto">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                className="input input-bordered w-full bg-white rounded-none p-1 my-2"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="input input-bordered w-full bg-white rounded-none p-1 my-2"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                className="input input-bordered w-full bg-white rounded-none p-1 my-2"
              />
              <p>
                Already Registered ? Please {""}
                <Link
                  to="/login"
                  className="font-semibold text-gray-500 underline "
                >
                  Login
                </Link>
              </p>
              <button
                type="submit"
                className="input rounded-none w-full font-medium bg-yellow-100 hover:bg-emerald-600  text-gray-700 hover:text-white p-1 my-2"
              >
                {type}
              </button>
            </form>
            <div className="divider">OR</div>
            <div className="w-64 mx-auto">
              <button
                onClick={handleGoogleSignIn}
                className="btn btn-wide btn-outline btn-accent justify-around"
              >
                <i className="text-sm fa-brands fa-google"></i> Login with
                Google
              </button>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Register;
