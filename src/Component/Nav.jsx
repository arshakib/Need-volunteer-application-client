/* eslint-disable react/prop-types */
import { useContext } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { AuthContext } from "../Context/Context";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo-vso.svg";

const Nav = ({ isDarkMode, toggleDarkMode }) => {
  const { user, logout } = useContext(AuthContext);
  return (
    <div className="sticky top-0 z-50 w-10/12 mx-auto backdrop-blur-md">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/allpost">All volunteer Need posts</Link>
              </li>
              <li>
                <Link to="/request">My Application</Link>
              </li>
            </ul>
          </div>
          <img className="lg:w-24 w-16" src={logo} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/allpost">All volunteer Need posts</Link>
            </li>
            <li>
              <Link to="/request">My Application</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <DarkModeSwitch
            className="mr-3"
            checked={isDarkMode}
            onChange={toggleDarkMode}
            size={30} // size of the toggle button
          />

          <div className="dropdown dropdown-end">
            {user ? (
              <>
                <button onClick={logout} className="btn mr-4">
                  LogOut
                </button>

                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div>
                      <img
                        src={user?.photoURL}
                        alt="User Photo"
                        className="lg:w-24 w-14 h-24 rounded-full object-cover tooltip"
                      />
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <NavLink className="btn mr-4" to="/login">
                Login
              </NavLink>
            )}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/addpost">Add Volunteer need Post</Link>
              </li>
              <li>
                <Link to="/mypost">Manage My Posts</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
