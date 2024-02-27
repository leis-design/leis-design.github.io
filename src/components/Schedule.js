import React from "react";
import Event from "./Event";
import Day from "./Day";
import PaddingDay from "./PaddingDay";

function Schedule({
  days,
  startDate,
  setSelectedDay,
  setSelectedEvent,
  setIsCreateEventModalOpen,
  setIsEditEventModalOpen,
  isOpen,
}) {
  const daysOfTheWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const startDay = startDate ? startDate.getDay() : 0;
  const paddingDaysCount = startDate ? (startDay + 6) % 7 : 0;

  const rearrangeDays = (daysArray, startDate) => {
    return [...daysArray.slice(startDay), ...daysArray.slice(0, startDay)];
  };

  let rearrangedDays = daysOfTheWeek;

  if (startDate) {
    rearrangedDays = rearrangeDays(daysOfTheWeek, startDate);
  }

  const createDayLabels = (startDate) => {
    const startDay = startDate.getDay();
    return [
      ...daysOfTheWeek.slice(startDay),
      ...daysOfTheWeek.slice(0, startDay),
    ];
  };

  // Function to get formatted week label dates
  const getWeekLabelDates = (index, startDate, paddingDaysCount) => {
    const start = new Date(startDate);
    // Adjust the date for the beginning of the week row considering the padding days
    start.setDate(start.getDate() + index * 7 - paddingDaysCount);
    const end = new Date(start);
    end.setDate(end.getDate() + 6); // Set to the end of the week row
    return { start, end };
  };

  // Generate the week labels
  const weekLabels = days
    .filter((_, index) => index % 7 === 0)
    .map((_, index) => {
      const { start, end } = getWeekLabelDates(
        index,
        startDate,
        paddingDaysCount
      );
      const formattedWeekStartDate = start.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      });
      const formattedWeekEndDate = end.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      });
      return (
        <div
          key={index}
          className="week-label flex flex-col items-center justify-center mb-2 px-2 py-4 bg-neutral-800 w-6 md:w-8 lg:w-10 h-40 md:h-44 lg:h-48 rounded-md text-white"
        >
          <div className="-rotate-90 whitespace-nowrap text-xs md:text-sm lg:text-base xl:text-lg">
            {formattedWeekStartDate} - {formattedWeekEndDate}
          </div>
        </div>
      );
    });

  const dayLabels = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const scheduleColoumns = days.filter((_, index) => index % 7 === 0);

  const numberOfRows = Math.ceil(days.length / 7);

  if (numberOfRows <= 0 || !Number.isFinite(numberOfRows)) {
    console.error("Invalid number of rows:", numberOfRows);
  }

  if (!isOpen) return null;

  return (
    <div
      id="schedule-container"
      className="w-fit min-w-fit mx-auto my-8 px-4 grid grid-rows-[auto,1fr] grid-cols-1 overflow-x-auto"
    >
      <div className="flex h-fit col-span-2 min-w-max max-w-3xl overflow-x-auto">
        <div className="padding-label mb-2 px-2 py-4 w-6 md:w-8 lg:w-10 h-6 md:h-8 lg:h-10 rounded-md"></div>
        {dayLabels.map((dayLabel, index) => (
          <div
            key={index}
            className="day-label flex items-center justify-center ml-2 mb-2 px-2 py-4 bg-neutral-800 w-40 md:w-44 lg:w-48 h-6 md:h-8 lg:h-10 rounded-md text-white"
          >
            <div className="text-xs md:text-sm lg:text-base xl:text-lg">
              {dayLabel}
            </div>
          </div>
        ))}
      </div>
      <div className="flex min-w-max max-w-3xl overflow-x-auto">
        <div className="flex flex-col mr-2">{weekLabels}</div>

        <div
          id="schedule"
          className="grid grid-cols-7 gap-2 min-w-max max-w-3xl"
        >
          {Array.from({ length: paddingDaysCount }, (_, index) => (
            <PaddingDay key={`padding-${index}`} />
          ))}

          {days.map((day, dayIndex) => {
            return (
              <Day
                key={dayIndex}
                date={day.date}
                className="day flex flex-col items-start justify-start px-2 py-4 bg-neutral-300 w-40 md:w-44 lg:w-48 h-40 md:h-44 lg:h-48 rounded-md"
                setSelectedEvent={setSelectedEvent}
                onClick={() => {
                  setSelectedDay(dayIndex);
                  setIsCreateEventModalOpen(true);
                }}
              >
                {day.events.map((event, eventIndex) => (
                  <Event
                    key={eventIndex}
                    eventId={event.id}
                    title={event.title}
                    icon={event.icon}
                    category={event.category}
                    onClick={(e) => {
                      setSelectedDay(dayIndex);
                      setSelectedEvent(eventIndex);
                      e.stopPropagation();
                      setIsEditEventModalOpen(true);
                    }}
                  />
                ))}
              </Day>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Schedule;
