import { NavLink, Outlet } from "react-router-dom";
import SearchIcon from "./SearchIcon";
import { useState } from "react";

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className=" ">
      <nav className="absolute flex justify-between items-center w-full p-3 text-white">
        <div className="flex space-x-4">
          <div>LOGO</div>
          <div>
            <button className="md:hidden" onClick={toggleMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <ul className="flex space-x-2 max-md:hidden">
            <li className="hover:text-gray-800">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="hover:text-gray-800">
              <NavLink to="/about">About</NavLink>
            </li>
            <li className="hover:text-gray-800">
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Search ..."
            className="rounded-sm text-black p-1"
          />
          <div className="absolute top-0 right-0">
            <SearchIcon />
          </div>
        </div>
        <div className="flex space-x-3 max-md:hidden">
          <button className="hover:text-gray-800">Log In</button>
          <button className="text-black bg-white p-1 rounded-sm hover:text-gray-800">
            Sign Up
          </button>
        </div>
      </nav>

      {/* Placeholder for child routes */}
      {isMenuOpen && (
        <ul className="absolute left-20 top-8 z-10 rounded-md bg-slate-200 opacity-80 flex flex-col gap-2">
          <li className="hover:text-blue-500 px-10 py-2">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="hover:text-blue-500 px-10  py-2">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="hover:text-blue-500 px-10  py-2">
            <NavLink to="/contact">Contact</NavLink>
          </li>

          <li className="hover:text-blue-500 px-10  py-2">
            <NavLink to="">Log In</NavLink>
          </li>
          <li className="hover:text-blue-500 px-10 py-2">
            <NavLink to="">Sign Up</NavLink>
          </li>
        </ul>
      )}
      <Outlet />
    </div>
  );
};

export default Layout;
