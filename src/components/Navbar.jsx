import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { IoMdHome } from "react-icons/io";
import { TbBrandShopee } from "react-icons/tb";
import { MdEventNote } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { toast } from "react-toastify";

const Navbar = () => {

  const { user, signOutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  console.log(user);


  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log('sign out successful');
        toast.info('Sign out successful');
        navigate('/')
      })
      .catch(error => {
        console.log('ERROR:', error);

      })
  }

  const links = (
    <>
      <li>
        <NavLink className="" to={"/"}>
          <IoMdHome />
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="" to={"/brands"}>
          <TbBrandShopee></TbBrandShopee>
          Brands
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink className="" to={"/profile"}>
            <ImProfile></ImProfile>
            My Profile
          </NavLink>
        </li>
      )}
      <li>
        <NavLink className="" to={"/about"}>
          <MdEventNote></MdEventNote>
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
          {user ? (
            <>
              <div className="flex flex-col justify-center items-center">
                <div className="dropdown dropdown-hover">
                  <div tabIndex={0} role="button" className=" m-1">
                    <img className="size-10 rounded-full" src={user.photoURL} />
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 text-black shadow"
                  >
                    <li>
                      <p className="text-xl font-bold">{user.displayName}</p>
                    </li>
                    <li>
                      <p className=" font-semibold">{user.email}</p>
                    </li>
                    <Link
                      className="btn bg-[#542547] hover:bg-[#7b3166] text-white"
                      to={"/updateUser"}
                    >
                      Update Profile
                    </Link>
                  </ul>
                </div>
              </div>
              <a onClick={handleSignOut} className="btn">
                SignOut
              </a>
            </>
          ) : (
            <>
              <NavLink to={"/login"}>Login</NavLink>
              <NavLink
                className="px-4 py-2 bg-white text-[#542547] font-bold rounded-xl"
                to={"/signup"}
              >
                Sign Up
              </NavLink>
            </>
          )}
        </div>
      </div>
      {user && (
        <>
          <div className=" text-white text-center pb-3 font-bold text-xl">
            Welcome {user.displayName}
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
