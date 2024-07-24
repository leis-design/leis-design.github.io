import React, { useState, useEffect } from "react";
import { importAll } from "../utilities/importAll";
import IconSelectionModal from "./IconSelectionModal";
import ConfirmationModal from "./ConfirmationModal";

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
    "Seminar",
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
  Offsite: ["Field trip", "Field work", "Plant tour", "Other"],
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

function EditEventModal({
  isOpen,
  onClose,
  days,
  setDays,
  selectedDay,
  selectedEvent,
}) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedEventType, setSelectedEventType] = useState("");
  const [selectedEventTitle, setSelectedEventTitle] = useState("");
  const [selectedAssessmentType, setSelectedAssessmentType] = useState("");
  const [selectedEventColor, setSelectedEventColor] = useState("");

  const [customEventName, setCustomEventName] = useState("");

  const [selectedIconIndex, setSelectedIconIndex] = useState(0);

  const [isDeleteAllRepeated, setIsDeleteAllRepeated] = useState(false);
  const [eventDescription, setEventDescription] = useState("");

  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  const [submitAttempted, setSubmitAttempted] = useState(false);

  const [isOtherEvent, setIsOtherEvent] = useState(false);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setSelectedEventTitle("");
    setSelectedAssessmentType("");
  };

  const handleEventChange = (e) => {
    setSelectedEventTitle(e.target.value);
  };

  const handleCustomEventNameChange = (e) => {
    setCustomEventName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setEventDescription(e.target.value);
  };

  const handleAssessmentTypeChange = (e) => {
    setSelectedAssessmentType(e.target.value);
  };

  const checkIfOtherEvent = (titleOfEvent) => {
    console.log("titleOfEvent: ", titleOfEvent);

    // Flatten all events into a single array excluding 'Other'
    const allEvents = Object.values(dependentOptions).flat();

    console.log("allEvents: ", allEvents);

    // Check if the provided eventTitle is not in the array of predefined events
    return !allEvents.includes(titleOfEvent);
  };

  useEffect(() => {
    // Automatically update description when assessment type changes
    if (selectedCategory === "Assessment" && selectedAssessmentType) {
      setEventDescription(selectedAssessmentType);
    }
  }, [selectedAssessmentType, selectedCategory]);

  const handleColorChange = (e) => {
    setSelectedEventColor(e.target.value);
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

  // Function to prevent event propagation when modal content is clicked
  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  const handleDeleteClick = () => {
    setShowConfirmationModal(true);
  };

  const handleCancelDelete = () => {
    setShowConfirmationModal(false);
  };

  const handleConfirmDelete = () => {
    deleteEvent(); // Your existing deleteEvent function
    setShowConfirmationModal(false);
  };

  const deleteEvent = () => {
    const eventToDelete = days[selectedDay].events[selectedEvent];
    const eventIdToDelete = eventToDelete.id;
    const eventRepeatIdToDelete = eventToDelete.repeatId;
    const startDate = days[selectedDay].date;

    let updatedDays = days.map((day) => {
      if (day.date < startDate) {
        // If the day is before the selected day, don't modify its events
        return day;
      } else {
        // For the selected day and any day after, filter out the repeating events
        return {
          ...day,
          events: day.events.filter((event) => {
            if (isDeleteAllRepeated) {
              // If deleting all repeated, check by repeatId and ensure not to delete before the selected day
              return (
                event.repeatId !== eventRepeatIdToDelete || day.date < startDate
              );
            } else {
              // If not deleting all repeated, only delete the selected event
              return event.id !== eventIdToDelete;
            }
          }),
        };
      }
    });

    setDays(updatedDays);
    onClose();
  };

  const updateEvent = () => {
    setSubmitAttempted(true);

    if (
      !selectedCategory ||
      selectedCategory === "default" ||
      !selectedEventTitle
    ) {
      // Stop the update process if validation fails
      return;
    }

    const updatedEvent = {
      id: days[selectedDay].events[selectedEvent].id,
      title:
        selectedEventTitle === "Other" ? customEventName : selectedEventTitle,
      icon: iconForEClass[selectedIconIndex],
      category: selectedCategory,
      description: eventDescription,
      color: selectedCategory === "Other" ? selectedEventColor : undefined,
    };

    let newDays = days.map((day, dayIndex) => {
      if (dayIndex === selectedDay) {
        return {
          ...day,
          events: day.events.map((event, eventIndex) =>
            eventIndex === selectedEvent ? updatedEvent : event
          ),
        };
      }
      return day;
    });

    setDays(newDays);
    onClose();
  };

  // Reset and initialize the state when the modal is opened
  useEffect(() => {
    if (isOpen) {
      setSubmitAttempted(false);
    }

    if (isOpen && selectedEvent != null) {
      // Assuming 'selectedEvent' is an index or key to find the event in 'days'
      const eventToEdit = days[selectedDay].events[selectedEvent];

      setIsOtherEvent(checkIfOtherEvent(eventToEdit.title));

      setCustomEventName(eventToEdit.title);

      setSelectedCategory(eventToEdit.category);

      console.log(isOtherEvent);

      setSelectedEventTitle(
        selectedCategory !== "Other" && isOtherEvent
          ? "Other"
          : eventToEdit.title
      );

      setEventDescription(eventToEdit.description || "");
      setSelectedEventColor(eventToEdit.color || "");
      const iconIndex = iconForEClass.findIndex(
        (icon) => icon === eventToEdit.icon
      );
      setSelectedIconIndex(iconIndex !== -1 ? iconIndex : 0);
      setIsDeleteAllRepeated(false); // or any other logic for initializing this state
    }
  }, [isOpen, selectedEvent, days, selectedDay]);

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
        <h1 className="text-2xl mb-4 text-white">Edit Event</h1>
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
                      value={selectedEventTitle}
                      onChange={handleEventChange}
                      maxLength={24}
                    />
                  ) : (
                    <select
                      id="event-selector"
                      className="block w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                      value={selectedEventTitle}
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
              {selectedCategory !== "Other" && isOtherEvent && (
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
                    Event Type
                  </label>
                  <select
                    id="color-selector"
                    className="block w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                    value={selectedEventColor}
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

              <div className="flex items-center w-full px-3 mt-2 mb-3 text-white">
                <label>
                  <input
                    className="mr-2"
                    type="checkbox"
                    checked={isDeleteAllRepeated}
                    onChange={() =>
                      setIsDeleteAllRepeated(!isDeleteAllRepeated)
                    }
                  />
                  Delete repeated?
                </label>
                <div className="tooltip ml-2">
                  <i className="fas fa-info-circle text-gray-300 cursor-pointer"></i>
                  <span
                    className={`tooltiptext large-tooltip absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 whitespace-no-wrap bg-black text-white text-xs py-1 px-2 rounded shadow-lg opacity-0 transition-opacity duration-300`}
                  >
                    By selecting this checkbox you will be deleting all events
                    following the selected event, which were created using the
                    repeat weekly check boxes.
                  </span>
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
              onClick={updateEvent}
              className={`mt-4 mr-2 px-4 py-2 text-white rounded ${
                isDeleteAllRepeated
                  ? "bg-gray-700 cursor-not-allowed"
                  : "bg-blue-500"
              }`}
              disabled={isDeleteAllRepeated} // Disable the button if isDeleteAllRepeated is true
            >
              Edit
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
            onClick={handleDeleteClick}
            className="mt-4 mr-2 px-4 py-2 bg-red-500 text-white rounded"
          >
            Delete
          </button>
          <button
            onClick={onClose}
            className="mt-4 px-4 py-2 bg-gray-500 text-white rounded"
          >
            Close
          </button>
          <ConfirmationModal
            isOpen={showConfirmationModal}
            onCancel={handleCancelDelete}
            onConfirm={handleConfirmDelete}
            repeatDeleted={isDeleteAllRepeated}
          />
        </div>
      </div>
    </div>
  );
}

export default EditEventModal;
