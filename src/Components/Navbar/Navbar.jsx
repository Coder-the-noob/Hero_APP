import React from "react";
import { Link, NavLink } from "react-router";
import logo from "../../assets/logo.png";
import git_logo from "../../assets/github_logo.png";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm p-4">
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
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-purple-600 font-semibold"
                    : "hover:text-purple-600"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/allapps"
                className={({ isActive }) =>
                  isActive
                    ? "text-purple-600 font-semibold"
                    : "hover:text-purple-600"
                }
              >
                Apps
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/installation"
                className={({ isActive }) =>
                  isActive
                    ? "text-purple-600 font-semibold"
                    : "hover:text-purple-600"
                }
              >
                Installation
              </NavLink>
            </li>
          </ul>
        </div>

        <NavLink to="/" className="flex items-center gap-2 ml-4">
          <img src={logo} alt="Logo" className="w-10 h-10" />
          <span className="text-xl font-extrabold bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] bg-clip-text text-transparent">
            HERO.IO
          </span>
        </NavLink>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 items-center gap-6">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-purple-600 font-semibold border-b-2 border-purple-600"
                  : "hover:text-purple-600"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/allapps"
              className={({ isActive }) =>
                isActive
                  ? "text-purple-600 font-semibold border-b-2 border-purple-600"
                  : "hover:text-purple-600"
              }
            >
              Apps
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/installation"
              className={({ isActive }) =>
                isActive
                  ? "text-purple-600 font-semibold border-b-2 border-purple-600"
                  : "hover:text-purple-600"
              }
            >
              Installation
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        <a
          href="https://github.com/Coder-the-noob"
          target="_blank"
          rel="noopener noreferrer"
          className="btn flex items-center gap-2 text-white bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] hover:opacity-90 border-radius-4 px-4 py-2 mr-4"
        >
          <img
            src={git_logo}
            alt="GitHub Logo"
            className="w-7 h-7 rounded-full"
          />
          <span className="text-lg font-semibold">Contribute</span>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
