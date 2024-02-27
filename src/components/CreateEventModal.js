import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { importAll } from "../utilities/importAll";
import IconSelectionModal from "./IconSelectionModal";

const dependentOptions = {
  Lecture: [
    "Lecture",
    "Guest speaker",
    "Panel",
    "Peer teaching and learning",
    "Aysynchronous videos",
    "Field work",
    "Industry visit",
    "Large group experiments",
    "Independent study",
    "Active learning",
    "Gamified experiences",
  ],
  Lab: [
    "Lab",
    "Discussions and debates",
    "Hands on experiments",
    "Hackathons",
    "Simulations",
    "Case studies",
    "Small group experiments",
    "Peer teaching and learning",
    "Guest speakers",
    "Tutorials sessions",
    "Independent exploration",
    "Gamified experiences",
    "Project-based learning",
    "Field work",
  ],
  Tutorial: [
    "Tutorial",
    "Active learning",
    "Discussions and debates",
    "Peer teaching and learning",
    "Gamified experiences",
  ],
  Assessment: [
    "Diagnostic assessment",
    "Formative assessment",
    "Summative assessment",
  ],
  Other: [],
};

const iconsForWebsite = importAll(
  require.context("../images/icons", false, /\.(png|jpe?g|svg)$/)
);

const iconForEClass = [
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/0_old_icon_0.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/0_old_icon_1.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/0_old_icon_10.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/0_old_icon_3.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/0_old_icon_4.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/0_old_icon_5.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/0_old_icon_6.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/0_old_icon_7.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/0_old_icon_8.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/0_old_icon_9.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/10_active_learning_0.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/10_active_learning_1.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/10_active_learning_10.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/10_active_learning_11.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/10_active_learning_2.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/10_active_learning_3.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/10_active_learning_4.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/10_active_learning_5.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/10_active_learning_6.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/10_active_learning_7.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/10_active_learning_8.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/10_active_learning_9.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/11_gamified_experiences_0.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/11_gamified_experiences_1.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/11_gamified_experiences_10.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/11_gamified_experiences_11.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/11_gamified_experiences_2.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/11_gamified_experiences_3.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/11_gamified_experiences_4.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/11_gamified_experiences_5.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/11_gamified_experiences_6.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/11_gamified_experiences_7.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/11_gamified_experiences_8.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/11_gamified_experiences_9.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/1_faculty_speaker_0.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/1_faculty_speaker_1.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/1_faculty_speaker_10.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/1_faculty_speaker_11.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/1_faculty_speaker_2.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/1_faculty_speaker_3.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/1_faculty_speaker_4.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/1_faculty_speaker_5.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/1_faculty_speaker_6.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/1_faculty_speaker_7.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/1_faculty_speaker_8.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/1_faculty_speaker_9.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/2_guest_speaker_0.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/2_guest_speaker_1.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/2_guest_speaker_10.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/2_guest_speaker_11.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/2_guest_speaker_2.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/2_guest_speaker_3.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/2_guest_speaker_4.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/2_guest_speaker_5.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/2_guest_speaker_6.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/2_guest_speaker_7.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/2_guest_speaker_8.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/2_guest_speaker_9.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/3_panel_0.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/3_panel_1.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/3_panel_10.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/3_panel_11.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/3_panel_2.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/3_panel_3.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/3_panel_4.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/3_panel_5.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/3_panel_6.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/3_panel_7.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/3_panel_8.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/3_panel_9.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/4_peer_teaching_0.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/4_peer_teaching_1.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/4_peer_teaching_10.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/4_peer_teaching_11.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/4_peer_teaching_2.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/4_peer_teaching_3.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/4_peer_teaching_4.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/4_peer_teaching_5.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/4_peer_teaching_6.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/4_peer_teaching_7.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/4_peer_teaching_8.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/4_peer_teaching_9.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/5_asynchronous_video_0.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/5_asynchronous_video_1.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/5_asynchronous_video_10.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/5_asynchronous_video_11.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/5_asynchronous_video_2.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/5_asynchronous_video_3.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/5_asynchronous_video_4.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/5_asynchronous_video_5.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/5_asynchronous_video_6.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/5_asynchronous_video_7.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/5_asynchronous_video_8.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/5_asynchronous_video_9.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/6_field_work_0.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/6_field_work_1.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/6_field_work_10.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/6_field_work_11.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/6_field_work_2.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/6_field_work_3.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/6_field_work_4.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/6_field_work_5.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/6_field_work_6.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/6_field_work_7.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/6_field_work_8.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/6_field_work_9.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/7_industry_visit_0.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/7_industry_visit_1.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/7_industry_visit_10.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/7_industry_visit_11.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/7_industry_visit_2.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/7_industry_visit_3.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/7_industry_visit_4.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/7_industry_visit_5.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/7_industry_visit_6.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/7_industry_visit_7.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/7_industry_visit_8.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/7_industry_visit_9.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/8_large_group_0.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/8_large_group_1.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/8_large_group_10.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/8_large_group_11.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/8_large_group_2.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/8_large_group_3.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/8_large_group_4.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/8_large_group_5.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/8_large_group_6.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/8_large_group_7.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/8_large_group_8.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/8_large_group_9.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/9_independent_study_0.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/9_independent_study_1.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/9_independent_study_10.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/9_independent_study_11.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/9_independent_study_2.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/9_independent_study_3.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/9_independent_study_4.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/9_independent_study_5.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/9_independent_study_6.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/9_independent_study_7.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/9_independent_study_8.png",
  "https://raw.githubusercontent.com/leis-design/visual-schedule-builder-images/main/9_independent_study_9.png",
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

  const [selectedIconIndex, setSelectedIconIndex] = useState(0);

  const [isRepeatWeekly, setIsRepeatWeekly] = useState(false);

  const [eventDescription, setEventDescription] = useState("");

  const [submitAttempted, setSubmitAttempted] = useState(false);

  const generateUniqueID = () => uuidv4();

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setSelectedEvent("");
  };

  const handleEventChange = (e) => {
    setSelectedEvent(e.target.value);
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
      title: selectedEvent,
      icon: iconForEClass[selectedIconIndex],
      category: selectedCategory,
      description: eventDescription,
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
        className="bg-gray-600 rounded-lg p-8 w-4/12"
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
                      maxLength={10}
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
