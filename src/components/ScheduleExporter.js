import React from "react";

function ScheduleExporter({ isOpen, numberOfWeeks, days, startDate, endDate }) {
  const exportSchedule = () => {
    const scheduleData = {
      numberOfWeeks: numberOfWeeks,
      startDate: startDate,
      endDate: endDate,
      days: days.map((day) => ({
        date: day.date,
        events: day.events
          ? day.events.map((event) => ({
              id: event.id,
              title: event.title,
              description: event.description,
              icon: event.icon,
              category: event.category,
              color: event.color,
              repeatId: event.repeatId,
            }))
          : [],
      })),
    };

    const dataStr = JSON.stringify(scheduleData, null, 4);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "schedule_backup.json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  if (!isOpen) return null;

  return (
    <div className="flex justify-center w-full mb-8">
      <button
        className="bg-gray-500 hover:bg-gray-700 text-white font-bold w-72 py-2 px-4 rounded mx-4 md:mx-8 lg:mx-12 mt-4"
        onClick={exportSchedule}
      >
        Save File
      </button>
      <div className="flex flex-col items-center"></div>
    </div>
  );
}

export default ScheduleExporter;
