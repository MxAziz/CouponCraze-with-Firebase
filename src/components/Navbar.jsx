import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink className="" to={"/"}>
          <img
            className=" size-6"
            src="https://img.icons8.com/?size=100&id=83326&format=png&color=000000"
          />
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="" to={"/brands"}>
          <img
            className=" size-6"
            src="https://img.icons8.com/?size=100&id=qpWehCpFyOyb&format=png&color=000000"
          />
          Brands
        </NavLink>
      </li>
      <li>
        <NavLink className="" to={"/profile"}>
          <img
            className=" size-6"
            src="https://img.icons8.com/?size=100&id=11740&format=png"
          />
          My Profile
        </NavLink>
      </li>
      <li>
        <NavLink className="" to={"/about"}>
          <img
            className=" size-6"
            src="https://img.icons8.com/?size=100&id=14313&format=png&color=000000"
          />
          About Dev
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-[#542547] text-white fixed z-50 w-full top-0">
      <div className="navbar  md:w-11/12 mx-auto">
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
              className="menu menu-sm dropdown-content bg-[#542547] text-white rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost md:text-2xl font-bold">
            <img className="size-10 rounded-full" src="/img/logos.jpg" />
            <span className="hidden md:block">CouponCraze</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end gap-4">
          <NavLink to={"/login"}>Login</NavLink>
          <NavLink className="px-4 py-2 bg-white text-[#542547] font-bold rounded-xl" to={"/signup"}>
            Sign Up
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
