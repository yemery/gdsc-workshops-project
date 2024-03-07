import React from "react";
import { NavLink } from "react-router-dom";
import { navbarLinks } from "../../assets/siteData";
const NavbarLinks = () => {
  return (
    <>
   
      {navbarLinks.map((link, index) => (
        <li key={index}>
          <NavLink
            to={link.link}
            className={({ isActive }) => {
              return isActive && "font-semibold underline bg-transparent";
            }}
          >
            {link.label}
          </NavLink>
        </li>
      ))}
    </>
  );
};

export default NavbarLinks;
