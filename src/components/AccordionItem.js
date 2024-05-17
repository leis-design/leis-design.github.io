import React, { useState } from "react";

const AccordionItem = ({ title, isVisible, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (!isVisible) return null;

  return (
    <div className="my-1 text-lg">
      <button
        className="w-full bg-slate-200 rounded-md shadow-md border-2 border-slate-400 flex justify-between items-center p-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-sm sm:text-md md:text-lg lg:text-xl">
          {title}
        </span>
        <span
          className={`transform duration-300 mr-4 text-slate-600 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          &#9660; {/* Downward arrow indicating collapsible action */}
        </span>
      </button>
      {isOpen && (
        <div className="w-full bg-slate-100 rounded-md shadow-md px-8 py-4">
          {children}
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
