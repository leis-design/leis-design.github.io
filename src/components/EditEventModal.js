import React, { useState, useEffect } from "react";
import { importAll } from "../utilities/importAll";
import IconSelectionModal from "./IconSelectionModal";
import ConfirmationModal from "./ConfirmationModal";

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

function EditEventModal({
  isOpen,
  onClose,
  days,
  setDays,
  selectedDay,
  selectedEvent,
}) {
  const [selectedCategory, setSelectedCategory] = useState("");
  //const [selectedEvent, setSelectedEvent] = useState("");
  const [selectedEventTitle, setSelectedEventTitle] = useState("");
  const [selectedIconIndex, setSelectedIconIndex] = useState(0);

  const [isDeleteAllRepeated, setIsDeleteAllRepeated] = useState(false);
  const [eventDescription, setEventDescription] = useState("");

  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  const [submitAttempted, setSubmitAttempted] = useState(false);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setSelectedEventTitle("");
  };

  const handleEventChange = (e) => {
    setSelectedEventTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setEventDescription(e.target.value);
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
      title: selectedEventTitle,
      icon: iconForEClass[selectedIconIndex],
      category: selectedCategory,
      description: eventDescription,
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
      setSelectedCategory(eventToEdit.category);
      setSelectedEventTitle(eventToEdit.title);
      setEventDescription(eventToEdit.description || "");
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
        className="bg-gray-600 rounded-lg p-8 w-4/12"
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
              <div className="w-full px-3">
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
                      maxLength={10}
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
          />
        </div>
      </div>
    </div>
  );
}

export default EditEventModal;
