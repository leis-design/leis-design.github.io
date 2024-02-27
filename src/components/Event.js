import React from "react";

function Event({ title, icon, category, onClick, eventId }) {
  const eventColour = {
    Lecture: "bg-lecture",
    Lab: "bg-lab",
    Tutorial: "bg-tutorial",
    Assessment: "bg-assessment",
    Other: "bg-other",
  };
  return (
    <div
      data-event-id={eventId}
      className={`event flex justify-start w-full h-8 lg:h-9 mb-1 lg:mb-2 rounded-md cursor-pointer ${eventColour[category]}`}
      onClick={onClick}
    >
      <div className="flex justify-center items-center w-8 h-8 ml-1 p-1">
        <img className="m-4 w-full h-full" src={icon} alt="icon for event" />
      </div>
      <div className="flex justify-start items-center rounded-md w-36 my-1 mr-1 px-1">
        <div className="event-title text-xs md:text-sm lg:text-base text-white !leading-4">
          {title}
        </div>
      </div>
    </div>
  );
}

export default Event;