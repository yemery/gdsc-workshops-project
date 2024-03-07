import React from "react";
import { Link, NavLink } from "react-router-dom";
import NavbarLinks from "./NavbarLinks";
import { FiShoppingCart,FiMenu } from "react-icons/fi";
import useToggleMenu from "../../hooks/useToggleMenu";
function Navbar() {
  const {isMenuOpen, toggleMenu} = useToggleMenu(false)
  return (
    <div className="z-10 w-full fixed top-0 right-0 bg-white px-4">
      <nav className="flex justify-between items-center max-container h-16">
            <div>
              <Link to="/">
                <h1 className="text-3xl font-bold">E-Commerce</h1>
              </Link>
            </div>
            
            <div className="hidden md:block">
              <ul className="flex flex-row items-center gap-4">
              <NavbarLinks />
              </ul>
            </div>

            <div className="flex items-center justify-center gap-x-1"> 
           <div className="flex gap-x-1 items-center justify-center">
           <FiShoppingCart />
            <i className="text-xs">0</i>
           </div>
            <div className="block md:hidden  ">
               <button onClick={toggleMenu}>
            <FiMenu size={20} /></button>
            </div>
            </div>
           
       
      </nav>
   {
      isMenuOpen && (
        <div className="block md:hidden w-full">
        <ul className="flex flex-col justify-center items-center w-full gap-4 py-3">
        <NavbarLinks />
        </ul>
      </div>
      )
   }
       
   
    </div>
  );
}

export default Navbar;
