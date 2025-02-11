/* eslint-disable react/prop-types */
import { useContext } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { AuthContext } from "../Context/Context";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo-vso.svg";

const Nav = ({ isDarkMode, toggleDarkMode }) => {
  const { user, logout } = useContext(AuthContext);
  return (
    <div className="sticky top-0 z-50 w-full backdrop-blur-md">
      <div className="w-11/12 mx-auto">
        <div className="navbar">
          {/* Navbar Start */}
          <div className="navbar-start">
            <div className="dropdown">
              <label
                tabIndex={0}
                className="btn btn-ghost lg:hidden"
                aria-label="Menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
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
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/allpost">All Volunteer Need Posts</Link>
                </li>
                <li>
                  <Link to="/request">My Application</Link>
                </li>
              </ul>
            </div>
            <a href="/">
              <img className="lg:w-24 w-16" src={logo} alt="Logo" />
            </a>
          </div>

          {/* Navbar Center */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/allpost">All Volunteer Need Posts</Link>
              </li>
              <li>
                <Link to="/request">My Application</Link>
              </li>
            </ul>
          </div>

          {/* Navbar End */}
          <div className="navbar-end flex items-center">
            <DarkModeSwitch
              className="mr-3"
              checked={isDarkMode}
              onChange={toggleDarkMode}
              size={30}
            />
            <div className="dropdown dropdown-end">
              {user ? (
                <div className="flex items-center space-x-4">
                  {/* Logout Button */}
                  <button onClick={logout} className="btn btn-outline md:block">
                    Log Out
                  </button>

                  {/* Avatar Dropdown */}
                  <div className="dropdown dropdown-end">
                    <div
                      tabIndex={0}
                      className="btn btn-ghost btn-circle avatar"
                      role="button"
                    >
                      <div className="w-10 h-10 rounded-full">
                        <img
                          src={user?.photoURL}
                          alt="User"
                          className="rounded-full object-cover"
                        />
                      </div>
                    </div>
                    <ul
                      tabIndex={0}
                      className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                    >
                      <li>
                        <Link to="/addpost">Add Volunteer Need Post</Link>
                      </li>
                      <li>
                        <Link to="/mypost">Manage My Posts</Link>
                      </li>
                      <li className="block md:hidden">
                        <button
                          onClick={logout}
                          className="btn btn-outline w-full"
                        >
                          Log Out
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              ) : (
                <NavLink className="btn btn-primary" to="/login">
                  Login
                </NavLink>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
