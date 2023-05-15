import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({ children }) => {
  return (
    <NavLink
      className="p-3 text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 w-full text-center border border-black font-semibold shadow-md rounded-sm hover:bg-purple-400 hover:shadow-lg active:bg-purple-500 "
      to="/navigation-cart"
    >
      {children}
    </NavLink>
  );
};

export default NavItem;
