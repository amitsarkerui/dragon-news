import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContextProvider } from "../AuthContext/AuthContext";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContextProvider);
  console.log(user);
  const handleLogOut = () => {
    logOut();
  };
  return (
    <div className="container mx-auto my-4">
      <div className="navbar bg-base-100 flex justify-between">
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-xl">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Braking News</a>
            </li>
          </ul>
        </div>
        {user ? (
          <div>
            <p className="mr-3 text-lg text-gray-600">Hi! {user.displayName}</p>
            <Link
              onClick={handleLogOut}
              className="btn btn-outline btn-primary mr-3"
            >
              Logout
            </Link>
          </div>
        ) : (
          <div className="navbar-end">
            <Link to={"/login"} className="btn btn-outline btn-primary mr-3">
              Login
            </Link>
            <Link to={"/register"} className="btn btn-outline btn-secondary">
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
