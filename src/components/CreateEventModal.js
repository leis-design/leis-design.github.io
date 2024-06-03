import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { importAll } from "../utilities/importAll";
import IconSelectionModal from "./IconSelectionModal";

const dependentOptions = {
  Lecture: [
    "Active learning",
    "Aysynchronous videos",
    "Field work",
    "Gamified experiences",
    "Guest speaker",
    "Independent study",
    "Industry visit",
    "Large group experiments",
    "Lecture",
    "Panel",
    "Peer teaching and learning",
    "Other",
  ],
  Lab: [
    "Case studies",
    "Discussions and debates",
    "Field work",
    "Gamified experiences",
    "Guest speakers",
    "Hackathons",
    "Hands on experiments",
    "Independent exploration",
    "Lab",
    "Peer teaching and learning",
    "Project-based learning",
    "Simulations",
    "Small group experiments",
    "Tutorials sessions",
    "Other",
  ],
  Tutorial: [
    "Active learning",
    "Discussions and debates",
    "Gamified experiences",
    "Peer teaching and learning",
    "Tutorial",
    "Other",
  ],
  Assessment: [
    "Assignment",
    "Case study analysis",
    "Exam",
    "Group Project",
    "Lab experiment",
    "Midterm",
    "Peer Review",
    "Portfolio",
    "Presentation",
    "Project",
    "Quiz",
    "Reflection",
    "Other",
  ],
  Other: ["Other"],
};

const eventColors = {
  Lecture: { hexValue: "#1b3663", NameOfClass: "bg-lecture" },
  Lab: { hexValue: "#9c3464", NameOfClass: "bg-lab" },
  Tutorial: { hexValue: "#00757e", NameOfClass: "bg-tutorial" },
  Assessment: { hexValue: "#cc3333", NameOfClass: "bg-assessment" },
  Other: { hexValue: "#4e4c4c", NameOfClass: "bg-other" },
};

const assessmentTypes = [
  "Diagnostic assessment",
  "Formative assessment",
  "Summative assessment",
];

const iconsForWebsite = importAll(
  require.context("../images/icons_v3", false, /\.(png|jpe?g|svg)$/)
);

const iconForEClass = [
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/0_01_main_icon.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/0_02_main_icon.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/0_03_main_icon.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/0_04_main_icon.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/0_05_main_icon.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/0_06_main_icon.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/0_07_main_icon.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/0_08_main_icon.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/0_09_main_icon.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/0_10_main_icon.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/0_11_main_icon.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/0_12_main_icon.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/0_13_main_icon.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/0_14_main_icon.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/0_15_main_icon.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/0_16_main_icon.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/1_10_presenter_icon.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/1_11_presenter_icon.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/1_12_presenter_icon.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/1_13_presenter_icon.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/1_14_presenter_icon.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/1_15_presenter_icon.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/1_1_presenter_icon.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/1_2_presenter_icon.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/1_3_presenter_icon.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/1_4_presenter_icon.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/1_5_presenter_icon.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/1_6_presenter_icon.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/1_7_presenter_icon.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/1_8_presenter_icon.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/1_9_presenter_icon.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/2_10_people_icon.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/2_11_people_icon.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/2_12_people_icon.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/2_13_people_icon.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/2_14_people_icon.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/2_15_people_icon.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/2_16_people_icon.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/2_17_people_icon.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/2_18_people_icon.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/2_19_people_icon.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/2_1_people_icon.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/2_20_people_icon.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/2_21_people_icon.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/2_22_people_icon.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/2_23_people_icon.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/2_24_people_icon.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/2_25_people_icon.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/2_2_people_icon.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/2_3_people_icon.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/2_4_people_icon.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/2_5_people_icon.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/2_6_people_icon.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/2_7_people_icon.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/2_8_people_icon.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/2_9_people_icon.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/3_1_book_icon.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/3_2_book_icon.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/3_3_book_icon.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/3_4_book_icon.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/3_5_book_icon.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/3_6_book_icon.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/3_7_book_icon.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/3_8_book_icon.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/3_9_book_icon.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/4_10_paper_icon.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/4_11_paper_icon.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/4_12_paper_icon.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/4_13_paper_icon.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/4_14_paper_icon.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/4_1_paper_icon.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/4_2_paper_icon.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/4_3_paper_icon.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/4_4_paper_icon.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/4_5_paper_icon.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/4_6_paper_icon.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/4_7_paper_icon.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/4_8_paper_icon.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/4_9_paper_icon.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/5_1_chart_icon.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/5_2_chart_icon.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/5_3_chart_icon.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/6_1_video_icon.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/6_2_video_icon.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/6_3_video_icon.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/7_1_briefcase_icon.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/7_2_briefcase_icon.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/7_3_briefcase_icon.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/7_4_briefcase_icon.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/7_5_briefcase_icon.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/8_1_calendar_icon.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/8_2_calendar_icon.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/8_3_calendar_icon.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/91_1_gear_icon.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/91_2_gear_icon.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/92_1_badge_icon.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/93_1_award_icon.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/93_2_award_icon.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/93_3_award_icon.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/94_1_controller_icon.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/94_2_controller_icon.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/95_1_puzzle_icon.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/95_2_puzzle_icon.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/95_3_puzzle_icon.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/95_4_puzzle_icon.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/95_5_puzzle_icon.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/9_1_lamp_icon.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/9_2_lamp_icon.png",
];

const dayIndexMapping = {
  Mon: 0,
  Tue: 1,
  Wed: 2,
  Thu: 3,
  Fri: 4,
  Sat: 5,
  Sun: 6,
};

const categoryRankings = {
  Lecture: 1,
  Lab: 2,
  Tutorial: 3,
  Assessment: 4,
  Other: 5,
};

const initialSelectedDaysState = {
  Mon: false,
  Tue: false,
  Wed: false,
  Thu: false,
  Fri: false,
  Sat: false,
  Sun: false,
};

function CreateEventModal({ isOpen, onClose, days, setDays, selectedDay }) {
  const [selectedDays, setSelectedDays] = useState(initialSelectedDaysState);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedEvent, setSelectedEvent] = useState("");
  const [customEventName, setCustomEventName] = useState("");

  const [selectedAssessmentType, setSelectedAssessmentType] = useState("");
  const [eventColor, setEventColor] = useState("");

  const [selectedIconIndex, setSelectedIconIndex] = useState(0);

  const [isRepeatWeekly, setIsRepeatWeekly] = useState(false);

  const [eventDescription, setEventDescription] = useState("");

  const [submitAttempted, setSubmitAttempted] = useState(false);

  const generateUniqueID = () => uuidv4();

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setSelectedEvent("");
    setSelectedAssessmentType("");
    setCustomEventName("");
  };

  const handleCustomEventNameChange = (e) => {
    setCustomEventName(e.target.value);
  };

  const handleEventChange = (e) => {
    setSelectedEvent(e.target.value);
  };

  const handleAssessmentTypeChange = (e) => {
    setSelectedAssessmentType(e.target.value);
  };

  useEffect(() => {
    // Automatically update description when assessment type changes
    if (selectedCategory === "Assessment" && selectedAssessmentType) {
      setEventDescription(selectedAssessmentType);
    }
  }, [selectedAssessmentType, selectedCategory]);

  const handleColorChange = (e) => {
    setEventColor(e.target.value);
  };

  const handleDayCheckboxChange = (day) => {
    setSelectedDays((prev) => ({ ...prev, [day]: !prev[day] }));
  };

  const nextIcon = () => {
    setSelectedIconIndex(
      (prevIndex) => (prevIndex + 1) % iconsForWebsite.length
    );
  };

  const prevIcon = () => {
    setSelectedIconIndex(
      (prevIndex) =>
        (prevIndex - 1 + iconsForWebsite.length) % iconsForWebsite.length
    );
  };

  const [isIconModalOpen, setIsIconModalOpen] = useState(false);

  const openIconModal = (event) => {
    event.preventDefault(); // Prevent default action
    setIsIconModalOpen(true);
  };
  const closeIconModal = () => setIsIconModalOpen(false);
  const handleIconSelect = (index) => {
    setSelectedIconIndex(index);
    closeIconModal();
  };

  const handleDescriptionChange = (e) => {
    setEventDescription(e.target.value);
  };

  // Function to prevent event propagation when modal content is clicked
  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  const sortEventsByCategory = (events) => {
    return events.sort((a, b) => {
      let rankA = categoryRankings[a.category] || Number.MAX_VALUE;
      let rankB = categoryRankings[b.category] || Number.MAX_VALUE;
      return rankA - rankB;
    });
  };

  const createEvent = () => {
    setSubmitAttempted(true);

    if (!selectedCategory || selectedCategory === "default" || !selectedEvent) {
      setSubmitAttempted(true);
      return;
    }

    console.log("Selected day index:", selectedDay);
    console.log("Days array:", days);

    if (selectedDay < 0 || selectedDay >= days.length) {
      console.error("Selected day index is out of bounds:", selectedDay);
      return;
    }

    const newEvent = {
      id: uuidv4(),
      title: selectedEvent === "Other" ? customEventName : selectedEvent,
      icon: iconForEClass[selectedIconIndex],
      category: selectedCategory,
      description: eventDescription,
      color: selectedCategory === "Other" ? eventColor : undefined,
      repeatId: uuidv4(), // Unique identifier for repeated events
    };

    let newDays = [...days];
    const isAnyDaySelected = Object.values(selectedDays).some(
      (isSelected) => isSelected
    );

    console.log(
      `Day object at selectedDay (${selectedDay}):`,
      newDays[selectedDay]
    );

    if (isAnyDaySelected) {
      console.log("isAnyDaySelected: ", isAnyDaySelected);

      // Find the date of the day div that was clicked
      const startDate = newDays[selectedDay].date;

      console.log("Assigned startDate:", startDate);
      console.log(
        `Day object at selectedDay (${selectedDay}):`,
        newDays[selectedDay]
      );

      newDays.forEach((day, index) => {
        // Only add repeated events starting from the clicked day
        if (day.date >= startDate) {
          console.log(
            `Checking day at index ${index}:`,
            day.date,
            "against startDate:",
            startDate
          );

          const dayOfWeek = day.date.getDay();
          const weekdayAbbr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][
            dayOfWeek
          ];

          if (selectedDays[weekdayAbbr]) {
            // Clone the event to adjust the id for uniqueness
            const repeatedEvent = { ...newEvent, id: uuidv4() };
            newDays[index].events.push(repeatedEvent);
          }
        }
      });
    } else {
      newDays[selectedDay].events.push(newEvent);
    }

    // Sort the events for each day after adding the new event
    newDays = newDays.map((day) => ({
      ...day,
      events: sortEventsByCategory([...day.events]),
    }));

    setDays(newDays);
    onClose();
  };

  // Reset the state when the modal is opened
  useEffect(() => {
    if (isOpen) {
      setSelectedDays(initialSelectedDaysState);
      setSubmitAttempted(false);
      setSelectedCategory("");
      setSelectedEvent("");
      setSelectedIconIndex(0);
      setEventDescription("");
      setEventColor("");
      // Add any other state resets here if necessary
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="bg-gray-600 rounded-lg p-8 w-4/12 h-full overflow-y-auto"
        onClick={stopPropagation}
      >
        <h1 className="text-2xl mb-4 text-white">Create Event</h1>
        <div className="flex flex-col items-center justify-center p-5">
          <form className="w-full max-w-lg">
            <div className="flex flex-col -mx-3 mb-6">
              <div className="w-full px-3 mb-6 ">
                <label
                  className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                  htmlFor="category-selector"
                >
                  Category
                </label>
                <div className="relative">
                  <select
                    id="category-selector"
                    className="block w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                  >
                    <option key="default" value="default">
                      Select a category...
                    </option>
                    {Object.keys(dependentOptions).map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="w-full px-3 mb-5">
                <label
                  className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                  htmlFor="event-selector"
                >
                  Event
                </label>
                <div className="relative">
                  {selectedCategory === "Other" ? (
                    <input
                      className="block w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                      type="text"
                      value={selectedEvent}
                      onChange={handleEventChange}
                      maxLength={24}
                    />
                  ) : (
                    <select
                      id="event-selector"
                      className="block w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                      value={selectedEvent}
                      onChange={handleEventChange}
                      disabled={!selectedCategory}
                    >
                      <option value="">Select an event...</option>
                      {dependentOptions[selectedCategory]?.map((event) => (
                        <option key={event} value={event}>
                          {event}
                        </option>
                      ))}
                    </select>
                  )}
                </div>
              </div>
              {selectedEvent === "Other" && (
                <div className="w-full px-3 mb-5">
                  <label
                    className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                    htmlFor="custom-event-name"
                  >
                    Custom Event Name
                  </label>
                  <input
                    id="custom-event-name"
                    className="block w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    value={customEventName}
                    onChange={handleCustomEventNameChange}
                    maxLength={24}
                    placeholder="Enter custom event name"
                  />
                </div>
              )}
              {selectedCategory === "Assessment" && (
                <div className="w-full px-3 mb-5">
                  <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2">
                    Assessment Type
                  </label>
                  {assessmentTypes.map((type) => (
                    <div key={type} className="flex items-center mb-2">
                      <input
                        type="radio"
                        id={type}
                        name="assessmentType"
                        value={type}
                        checked={selectedAssessmentType === type}
                        onChange={handleAssessmentTypeChange}
                        className="form-radio h-4 w-4 text-blue-600"
                      />
                      <label htmlFor={type} className="ml-2 text-white">
                        {type}
                      </label>
                    </div>
                  ))}
                </div>
              )}

              {selectedCategory === "Other" && (
                <div className="w-full px-3 mb-5">
                  <label
                    className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                    htmlFor="color-selector"
                  >
                    Event Color
                  </label>
                  <select
                    id="color-selector"
                    className="block w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                    value={eventColor}
                    onChange={handleColorChange}
                  >
                    <option value="">Select a color for the event...</option>
                    {Object.entries(eventColors).map(([name, color]) => (
                      <option
                        key={name}
                        value={color.NameOfClass}
                        style={{
                          backgroundColor: color.hexValue,
                          color: "#fff",
                        }}
                      >
                        {name}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <div className="day-selection w-full  px-3 flex flex-col justify-center mb-4">
                <div className="block uppercase tracking-wide text-white text-xs font-bold mb-5">
                  Repeat weekly ?
                </div>
                <div className="flex justify-center">
                  {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
                    (day) => (
                      <div
                        key={day}
                        className="flex flex-col items-center mx-3"
                      >
                        <input
                          type="checkbox"
                          id={day}
                          className="form-checkbox h-5 w-5 text-blue-600"
                          checked={selectedDays[day]}
                          onChange={() => handleDayCheckboxChange(day)}
                        />
                        <label
                          htmlFor={day}
                          className="text-sm text-white mt-1"
                        >
                          {day}
                        </label>
                      </div>
                    )
                  )}
                </div>
              </div>
              <div className="w-full  px-3">
                <label
                  className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                  htmlFor="event-selector"
                >
                  Icon
                </label>
                {/* 
                <div className="flex justify-center items-center space-x-4 my-4">
                  <button
                    type="button"
                    onClick={prevIcon}
                    className="p-2 w-8 h-8 bg-gray-200 rounded-full flex justify-center items-center"
                  >
                    <i
                      className="fa-solid fa-caret-left"
                      style={{ color: "black" }}
                    ></i>
                  </button>
                  <div className="text-2xl w-16 h-16">
                    <img
                      className="object-contain"
                      src={iconsForWebsite[selectedIconIndex]}
                      alt="icon for event"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={nextIcon}
                    className="p-2 w-8 h-8 bg-gray-200 rounded-full flex justify-center items-center"
                  >
                    <i
                      className="fa-solid fa-caret-right"
                      style={{ color: "black" }}
                    ></i>
                  </button>
                </div>
                */}

                {selectedIconIndex >= 0 &&
                  iconsForWebsite[selectedIconIndex] && (
                    <div className="flex justify-center items-center my-4">
                      <img
                        src={iconsForWebsite[selectedIconIndex]}
                        alt={`Selected Icon`}
                        className="w-12 h-12 object-contain cursor-pointer"
                        onClick={(e) => openIconModal(e)}
                      />
                    </div>
                  )}
                <div className="flex justify-center items-center my-4">
                  <button
                    onClick={(e) => openIconModal(e)}
                    className="mt-4 px-4 py-2 w-36 h-8 bg-gray-500 text-white rounded text-xs"
                  >
                    Show Icons
                  </button>
                </div>

                <IconSelectionModal
                  isOpen={isIconModalOpen}
                  icons={iconsForWebsite}
                  onSelect={handleIconSelect}
                  onClose={closeIconModal}
                />
              </div>
              <div className="w-full px-3 mb-5">
                <label
                  className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                  htmlFor="event-description"
                >
                  Description
                </label>
                <textarea
                  id="event-description"
                  className="block w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                  value={eventDescription}
                  onChange={handleDescriptionChange}
                  rows="3"
                ></textarea>
              </div>
            </div>
          </form>
        </div>
        <div className="flex items-center">
          <div className="flex items-center">
            <button
              onClick={() => {
                createEvent();
              }}
              className="mt-4 mr-2 px-4 py-2 bg-blue-500 text-white rounded"
            >
              Create
            </button>

            <div className="flex flex-col justify-center items-center">
              {submitAttempted &&
                (!selectedCategory || selectedCategory === "default") && (
                  <p className="text-red-500 text-sm italic mr-4">
                    Please select a category.
                  </p>
                )}

              {submitAttempted && !selectedEvent && (
                <p className="text-red-500 text-sm italic mr-4">
                  Please select an event.
                </p>
              )}
            </div>
          </div>

          <button
            onClick={onClose}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateEventModal;
