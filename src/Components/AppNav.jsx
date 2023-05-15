import React from "react";
import NavItem from "./NavItem";

const AppNav = () => {
  return (
    <>
      <nav className="w-full md:w-1/2 h-full p-3 bg-purple-200 flex items-center flex-col">
        <div>
          <p className="font-bold text-lg mb-3 text-purple-900">
            Mini Features Projects
          </p>
        </div>
        <div className="w-full">
          <NavItem>Notification Cart</NavItem>
        </div>
      </nav>
    </>
  );
};

export default AppNav;
