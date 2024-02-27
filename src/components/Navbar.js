import React from "react";

import backgroundSvg from "../images/navbar_background.svg";
import lassondeLogoSvg from "../images/lassonde-YorkU-Logo-White.svg";
import { Link } from "react-router-dom";

function Navbar() {
  const navbarStyle = {
    backgroundImage: `url(${backgroundSvg})`,
    backgroundSize: "cover", // Cover the entire navbar area
    backgroundRepeat: "no-repeat",
  };

  return (
    <nav
      style={navbarStyle}
      className="bg-slate-600 shadow-lg z-50 w-full sticky top-0 left-0"
    >
      <div className="flex justify-between items-center py-4 mx-8">
        <div className="flex-shrink-0">
          <Link
            to="/"
            className="flex items-center text-lg font-semibold text-white hover:text-gray-300"
          >
            <span>
              <img
                src={lassondeLogoSvg}
                alt="lassonde logo"
                className="w-12 h-auto max-w-full md:w-16 lg:w-20"
              ></img>
            </span>
            <span className="mx-4">
              <p className="text-lg md:text-xl lg:text-2xl">
                Visual Planner Builder
              </p>
            </span>
          </Link>
        </div>
        <div className="flex items-center space-x-4"></div>
      </div>
    </nav>
  );
}

export default Navbar;
