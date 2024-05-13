import React, { useState } from "react";

const AccordionItem = ({ number, title, isVisible, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (!isVisible) return null;

  return (
    <div className="w-full flex flex-col justify-start items-center text-lg my-1">
      <button
        className="w-11/12 bg-slate-200 rounded-md shadow-md border-2 border-slate-400 flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="m-4 text-md md:text-lg lg:text-xl">{title}</span>
        <span
          className={`text-slate-600 transform duration-300 mr-4 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          &#9660;
        </span>
      </button>
      {isOpen && (
        <div className="w-11/12 bg-slate-100 rounded-md shadow-md px-8 py-4">
          {children}
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
