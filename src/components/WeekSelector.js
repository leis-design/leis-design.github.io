import React, { useState } from "react";

function WeekSelector({
  isVisible,
  onClose,
  setStartDate,
  setEndDate,
  setIsScheduleVisible,
  setIsImported,
}) {
  const [startDateInput, setStartDateInput] = useState("");
  const [endDateInput, setEndDateInput] = useState("");
  const [inputValid, setInputValid] = useState(true);

  if (!isVisible) return null;

  function parseLocalDate(dateString) {
    const [year, month, day] = dateString.split("-").map(Number);
    // Create a date object for noon to avoid any issues with daylight saving time changes
    const date = new Date(year, month - 1, day, 12, 0, 0);
    // Correct the date by subtracting the time zone offset
    date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
    return date;
  }

  const handleCreateSchedule = () => {
    // Use parseLocalDate to convert input values to Date objects
    const startDate = parseLocalDate(startDateInput);
    const endDate = parseLocalDate(endDateInput);

    if (startDate > endDate || !startDateInput || !endDateInput) {
      setInputValid(false);
      return;
    }

    setInputValid(true);
    setStartDate(startDate);
    setEndDate(endDate);
    setIsScheduleVisible(true);
    setIsImported(false);
    onClose();
  };

  return (
    <div className="mx-2">
      <form className="max-w-xlg h-96 mx-auto mt-2 mb-10 p-6 bg-white rounded-md shadow-md">
        <div className="mb-4">
          <p className="block mb-2 text-sm md:text-base lg:text-lg font-medium text-gray-700">
            Please enter the start and end date of your course below:
          </p>
          <label className="block mb-2 text-sm md:text-base lg:text-lg font-medium text-gray-700">
            Start Date
            <input
              type="date"
              className={`border-solid mt-1 p-2 block w-full shadow-sm ${
                !inputValid && "border-2 border-red-500"
              }`}
              onChange={(e) => setStartDateInput(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm md:text-base lg:text-lg font-medium text-gray-700">
            End Date
            <input
              type="date"
              className={`border-solid mt-1 p-2 block w-full shadow-sm ${
                !inputValid && "border-2 border-red-500"
              }`}
              onChange={(e) => setEndDateInput(e.target.value)}
              required
            />
          </label>
        </div>
        {!inputValid && (
          <div className="text-red-500">
            Please enter valid start and end dates
          </div>
        )}
        <button
          type="button"
          className="mt-8 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-700"
          onClick={handleCreateSchedule}
        >
          Create Planner
        </button>
      </form>
    </div>
  );
}

export default WeekSelector;
