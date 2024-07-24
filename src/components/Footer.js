import React from "react";
import lassondeLogoSvg from "../images/Lassonde_Full_Logo_RGB.svg";

function Footer() {
  return (
    <div className="flex justify-center items-center bg-grey-50 w-full h-12 md:h-14 lg:h-16 border-t-4  border-grey-100">
      <div className="">
        <img
          src={lassondeLogoSvg}
          alt="lassonde logo"
          className="h-auto w-80 lg:w-96"
        ></img>
      </div>
      <div className="mx-4">
        <div className="text-sm md:text-base lg:text-lg font-medium text-black ">
          Got Feedback?
        </div>
        <div className="text-sm md:text-base lg:text-lg font-medium text-black">
          We'd love to hear from you.{" "}
          <a
            className="text-blue-600"
            href="mailto:leis@lassonde.yorku.ca?subject=Feedback%20Visual%20Calendar%20Builder%20App"
          >
            Share your feedback here.
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
