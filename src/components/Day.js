import React from "react";

function Day({ dayIndex, date, onClick, children }) {
  // Initialize dayNumber as an empty string.
  let dayNumber = "";

  // Check if date is an instance of Date and call getDate() only if it's true.
  if (date instanceof Date) {
    dayNumber = date.getDate();
  } else {
    console.error(`Invalid date object: ${date}`, date);
  }

  return (
    <div
      key={dayIndex}
      className="day flex flex-col items-start justify-start px-2 pb-4 pt-1 bg-neutral-300 w-40 md:w-44 lg:w-48 h-40 md:h-44 lg:h-48 rounded-md hover:shadow-md transition-shadow duration-200 ease-in-out"
      onClick={onClick}
    >
      <div className="date-label w-full flex justify-end">{dayNumber}</div>
      {children}
    </div>
  );
}

export default Day;
