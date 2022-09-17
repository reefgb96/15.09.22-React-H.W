import React from "react";
import DisplayNavBarLinks from "./NavBarLinks";
import DisplayNavBarLogo from "./NavBarLogo";
import NavBarSearch from "./NavBarSearch";

const InitNavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top bg-light">
      <div className="container-fluid">
        <DisplayNavBarLogo />
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <DisplayNavBarLinks />
          <NavBarSearch />
        </div>
      </div>
    </nav>
  );
};

export default InitNavBar;
