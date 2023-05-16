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
        <div className="w-full flex gap-3 flex-col">
          <NavItem gotoPage="navigation-cart">Notification Cart</NavItem>
          <NavItem gotoPage="profile-card">Profile Card</NavItem>
        </div>
      </nav>
    </>
  );
};

export default AppNav;
