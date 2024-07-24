import React, { useState } from "react";

const ScheduleImporter = ({
  isVisible,
  onClose,
  setNumberOfWeeks,
  setStartDate,
  setEndDate,
  setDays,
  setIsDaysArrayCreated,
  setIsScheduleVisible,
  setIsImported,
}) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setErrorMessage("");
  };

  const handleFileImport = () => {
    if (!selectedFile) {
      setErrorMessage("Please select a file to import.");
      console.error("No file selected.");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const scheduleData = JSON.parse(e.target.result);
        updateScheduleState(scheduleData);
      } catch (error) {
        console.error("Error parsing the file:", error);
        setErrorMessage(
          "Failed to parse the file. Please check the file format."
        );
      }
    };
    reader.readAsText(selectedFile);
  };

  function parseLocalDate(dateString) {
    const date = new Date(dateString);
    return date;
  }

  const updateScheduleState = (scheduleData) => {
    console.log("startDate from JSON: " + scheduleData.startDate);
    console.log("endDate from JSON: " + scheduleData.endDate);

    const startDate = parseLocalDate(scheduleData.startDate);
    const endDate = parseLocalDate(scheduleData.endDate);

    const updatedDays = scheduleData.days.map((day) => ({
      ...day,
      date: new Date(day.date),
      events: day.events.map((event) => ({
        ...event, // Include the id and other properties
      })),
    }));

    setNumberOfWeeks(scheduleData.numberOfWeeks);
    setStartDate(startDate);
    setEndDate(endDate);
    //setDays(scheduleData.days);
    setDays(updatedDays);
    setIsDaysArrayCreated(true);
    setIsImported(true);

    console.log("numberOfWeeks: " + scheduleData.numberOfWeeks);
    console.log("startDate: " + startDate);
    console.log("endDate: " + endDate);
    console.log("Days: ", scheduleData.days);
  };

  if (!isVisible) return null;

  return (
    <div className="mx-2">
      <form className="max-w-xlg h-96 mx-auto mt-2 mb-10 p-6 bg-white rounded-md shadow-md">
        <label className="block mb-2 text-sm md:text-base lg:text-lg font-medium text-gray-700">
          <p>Edit an existing planner.</p>
          <p>Upload your saved planner file (previously saved .json file)</p>
          <input
            type="file"
            className="border-solid border-black mt-1 p-2 block w-full shadow-sm"
            onChange={handleFileChange}
          />
        </label>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <button
          type="button"
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-700"
          onClick={() => {
            handleFileImport();
            setIsScheduleVisible(true);
            onClose();
          }}
        >
          Import Planner
        </button>
      </form>
    </div>
  );
};

export default ScheduleImporter;
