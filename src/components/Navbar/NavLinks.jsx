import React from "react";
import { navbarLinks } from "../../assets/siteData";


function NavLinks(props) {
  return (
    <ul
      tabIndex={0}
      className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
    >
      {navbarLinks.map((e, index) => {
        return <li>{e.label}</li>
      })}
      <li>
        <a>{}</a>
      </li>
      <li>
        <a>Parent</a>
        <ul className="p-2">
          <li>
            <a>Submenu 1</a>
          </li>
          <li>
            <a>Submenu 2</a>
          </li>
        </ul>
      </li>
      <li>
        <a>Item 3</a>
      </li>
    </ul>
  );
}

export default NavLinks;
