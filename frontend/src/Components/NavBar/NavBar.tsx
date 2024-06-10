import React from "react";
import { Link } from "react-router-dom";
import TradeTracker from "./stonksdark.png";
import { useAuth } from "../../Context/useAuth";
import  "./NavBar.css"
import { TERipple } from "tw-elements-react";
import { FaRegMoon, FaRegSun } from "react-icons/fa";
import DarkMode from "../DarkMode/DarkMode"


interface Props {}

const Navbar = (props: Props) => {
  const { isLoggedIn, user, logout } = useAuth();
  
  return (
    <nav className="relative container p-6 mx-auto dark:bg-slate-900 shadow-[0_0_15px_purple]">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-20">
          <Link to="/">
            <img className="photob bg-grey-900" src={TradeTracker} alt="Trade Tracker" />
          </Link>
          <div className="hidden font-bold lg:flex">
            <Link to="/search" className="text-black hover:text-darkBlue dark:text-slate-200">
              Search
            </Link>
          </div>
        </div>
        {isLoggedIn() ? (
          <div className="hidden lg:flex items-center space-x-6 text-back">
            <div className="hover:text-darkBlue dark:text-sky-400">Welcome, {user?.userName}</div>
            <TERipple className="dark:shadow-[0_0_15px_purple]">
              <button
              type="button" onClick={logout}
              className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50  disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 dark:bg-lightGreen text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"> 
              LOGOUT
              </button>
              </TERipple>
              <DarkMode />
          </div>
        ) : (
          <div className="hidden lg:flex items-center space-x-6 text-back">
            <Link to="/login" >
              <TERipple className="dark:shadow-[0_0_15px_purple]">
              <button
              type="button"
              className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50  disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 dark:bg-sky-400 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"> 
              Login
              </button>
              </TERipple>
            </Link>
            <Link to="/register">
              <TERipple className="dark:shadow-[0_0_15px_purple]">
              <button
              type="button"
              className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50  disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 dark:bg-lightGreen text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"> 
              SIGN UP
              </button>
              </TERipple>
            </Link>
            <Link
              to="/test"
              className="px-8 py-3 font-bold rounded text-white bg-lightGreen hover:opacity-70"
            >
              TEST
            </Link>
            <DarkMode />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;