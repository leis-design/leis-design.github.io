import React from "react";

function Event({
  title,
  icon,
  category,
  onClick,
  eventId,
  description,
  color,
}) {
  const eventColour = {
    Lecture: "bg-lecture",
    Lab: "bg-lab",
    Tutorial: "bg-tutorial",
    Assessment: "bg-assessment",
    Other: "bg-other",
  };

  const backgroundColor = color || eventColour[category];

  return (
    <div
      data-event-id={eventId}
      className={`event flex justify-start items-center w-full h-8 lg:h-9 mb-1 lg:mb-2 rounded-md cursor-pointer ${backgroundColor}`}
      onClick={onClick}
    >
      <div className="flex flex-shrink-0 justify-center items-center w-6 h-6 ml-1">
        <img className="w-full h-full" src={icon} alt="icon for event" />
      </div>
      <div className="flex-grow flex justify-start items-center rounded-md my-1 mr-1 px-1">
        <div className="event-title break-words text-xs md:text-sm lg:text-base text-white !leading-4">
          {title}
        </div>
      </div>
      {description && (
        <i className="fa fa-info-circle text-white ml-1 mr-2"></i>
      )}
    </div>
  );
}

export default Event;
