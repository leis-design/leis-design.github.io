import React, { useState, useEffect } from "react";
import Schedule from "../components/Schedule";
import WeekSelector from "../components/WeekSelector";
import ScheduleImporter from "../components/ScheduleImporter";
import HtmlCopier from "../components/HtmlCopier";
import ScheduleExporter from "../components/ScheduleExporter";
import CreateEventModal from "../components/CreateEventModal";
import EditEventModal from "../components/EditEventModal";
import AccordionItem from "../components/AccordionItem";
import instructionsVideo from "../images/labeled_instructions.mp4";
import InstructionsButton from "../components/InstructionsButton";

function SchedulePage() {
  const [days, setDays] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [selectedDay, setSelectedDay] = useState(undefined);
  const [selectedEvent, setSelectedEvent] = useState(undefined);
  const [numberOfWeeks, setNumberOfWeeks] = useState(0);
  const [isScheduleVisible, setIsScheduleVisible] = useState(false);
  const [isWeekSelectorVisible, setIsWeekSelectorVisible] = useState(true);
  const [isScheduleImporter, setisScheduleImporter] = useState(true);
  const [isCreateEventModalOpen, setIsCreateEventModalOpen] = useState(false);
  const [isEditEventModalOpen, setIsEditEventModalOpen] = useState(false);
  const [isDaysArrayCreated, setIsDaysArrayCreated] = useState(false);
  const [isImported, setIsImported] = useState(false);

  useEffect(() => {
    if (startDate && endDate && !isImported) {
      const { daysArray } = calculateWeeksAndDays(startDate, endDate);
      setDays(daysArray);
      setIsScheduleVisible(true);
    }
  }, [startDate, endDate, isImported]);

  const calculateWeeksAndDays = (start, end) => {
    const oneDay = 24 * 60 * 60 * 1000;
    const diffDays = Math.round((end - start) / oneDay) + 1;

    // Validate the number of days to prevent invalid array lengths
    if (diffDays <= 0 || diffDays > 731) {
      //Cannot create a schedule greater than 2 full years (accounts for if one year is a leap year)
      console.error("Invalid range for days:", diffDays);
      return { daysArray: [] }; // Return an empty array or handle the error as appropriate
    }

    const daysArray = [];
    for (let i = 0; i < diffDays; i++) {
      const date = new Date(start.getTime());
      date.setDate(date.getDate() + i);
      daysArray.push({ date, events: [] });
    }

    return { daysArray };
  };

  return (
    <div className="flex flex-col justify-start h-fit">
      {isWeekSelectorVisible && (
        <div className="flex flex-col justify-center mx-auto my-8 text-start">
          <div className="text-lg md:text-xl lg:text-2xl mb-4 px-4">
            Welcome to Lassonde's Visual Planner Builder
          </div>
          <div className="text-md md:text-lg lg:text-xl mb-4 px-4">
            <p>Use this tool to:</p>
            <ol className="mx-8 my-2 list-decimal list-inside text-md md:text-lg lg:text-xl">
              <li>Build a visual planner for your course</li>
              <li>Save your file for edits later</li>
              <li>Easily transfer the visual planner to eClass</li>
            </ol>
            <p className="mt-4 text-lg text-blue-600 italic">
              Note: For optimal performance, please use this application using
              the Chrome, Firefox, or Edge browsers, and a desktop or laptop
              computer, as it is not designed for mobile devices or the Safari
              browser
            </p>
          </div>
        </div>
      )}

      <div className="flex justify-center items-start">
        <WeekSelector
          isVisible={isWeekSelectorVisible}
          onClose={() => {
            setIsWeekSelectorVisible(false);
            setisScheduleImporter(false);
          }}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
          setIsScheduleVisible={setIsScheduleVisible}
          setIsImported={setIsImported}
        />
        <ScheduleImporter
          isVisible={isScheduleImporter}
          onClose={() => {
            setIsWeekSelectorVisible(false);
            setisScheduleImporter(false);
          }}
          setNumberOfWeeks={setNumberOfWeeks}
          setDays={setDays}
          setIsDaysArrayCreated={setIsDaysArrayCreated}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
          setIsScheduleVisible={setIsScheduleVisible}
          setIsImported={setIsImported}
        />
      </div>

      {isScheduleVisible && (
        <>
          <div className="w-full flex flex-col justify-start items-center mt-4">
            <div className="w-10/12 mx-4 mb-4 text-lg md:text-xl lg:text-2xl">
              <span>
                Follow the steps below to create, transfer (to eClass) and save
                your visual planner
              </span>
            </div>

            <div className="w-10/12 mx-4 mb-8 text-md md:text-lg lg:text-xl">
              <span>How-to guides are provided under each step:</span>
            </div>

            <div className="w-10/12 mx-4 text-md md:text-lg lg:text-xl font-bold">
              <span>Step 1: </span>
              <span>Creating your planner</span>
            </div>

            <div className="w-10/12 mx-4 text-md md:text-lg lg:text-xl">
              <span>
                <p className="mx-2">1. Select a day tile to add an event</p>
                <p className="mx-2">
                  2. For events that repeat weekly you can select to display the
                  repeated event
                </p>
                <p className="mx-2">
                  3. Select the create button to add the event to your planner
                </p>
                <p className="mx-2">
                  4. To edit an existing event, select an event to view and
                  update its details. Select the 'update' button to display the
                  changes on your planner.
                </p>
                <p className="mx-2 mt-2 text-lg text-blue-600 italic">
                  Note: If you refresh this page while you are building the
                  planner, you will lose your progress
                </p>
              </span>
            </div>
          </div>
        </>
      )}

      <Schedule
        isOpen={isScheduleVisible}
        days={days}
        startDate={startDate}
        setSelectedDay={setSelectedDay}
        setSelectedEvent={setSelectedEvent}
        setIsCreateEventModalOpen={setIsCreateEventModalOpen}
        setIsEditEventModalOpen={setIsEditEventModalOpen}
      />

      {isScheduleVisible && (
        <>
          <div className="w-full flex flex-col justify-start items-center mt-8">
            <div className="w-10/12 mx-4 text-md md:text-lg lg:text-xl font-bold">
              <span>Step 2: </span>
              <span>Save your file for future edits</span>
            </div>
          </div>

          <div className="w-full flex flex-col justify-start items-center mt-4">
            <div className="w-10/12 mx-4 text-md md:text-lg lg:text-xl">
              <span>
                <p className="mx-2">
                  1. Select the 'Save file' button. This will dowload a copy of
                  your planner to your local computer (.json file)
                </p>
                <p className="mx-2">
                  2. You can use this file to edit the existing planner on the
                  home page
                </p>
              </span>
            </div>
          </div>
        </>
      )}

      <InstructionsButton isOpen={isScheduleVisible} />

      <ScheduleExporter
        isOpen={isScheduleVisible}
        numberOfWeeks={numberOfWeeks}
        startDate={startDate}
        endDate={endDate}
        days={days}
      />

      {isScheduleVisible && (
        <>
          <div className="w-full flex flex-col justify-start items-center mt-8">
            <div className="w-10/12 mx-4 text-md md:text-lg lg:text-xl font-bold">
              <span>Step 3: </span>
              <span>Transfering your visual planner to eClass</span>
            </div>
          </div>

          <div className="w-full flex flex-col justify-start items-center mt-4">
            <div className="w-10/12 mx-4 text-md md:text-lg lg:text-xl">
              <span>
                <p className="mx-2">
                  1. Once you are satisfied with your planner, select the Copy
                  Code button below. The code to your planner will be copied to
                  your clipboard
                </p>
                <p className="mx-2">
                  2. In your eClass course, navigate to the Course Schedule page
                  and select the settings button to edit the page. You can
                  toggle to html view and replace the code with the contents of
                  your clipboard
                </p>
                <p className="mx-2">
                  3. Select the Save and display button to view your planner in
                  eClass
                </p>
              </span>
            </div>
          </div>

          <div className="my-8 mx-32">
            <AccordionItem
              title="Video demo for transferring planner to eClass"
              isVisible={isScheduleVisible}
            >
              <div className="flex justify-center items-center my-4">
                <video width="750" height="500" controls>
                  <source src={instructionsVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </AccordionItem>
          </div>
        </>
      )}

      <HtmlCopier isOpen={isScheduleVisible} days={days} />

      <CreateEventModal
        isOpen={isCreateEventModalOpen}
        onClose={() => setIsCreateEventModalOpen(false)}
        days={days}
        setDays={setDays}
        selectedDay={selectedDay}
      />
      <EditEventModal
        isOpen={isEditEventModalOpen}
        onClose={() => setIsEditEventModalOpen(false)}
        days={days}
        setDays={setDays}
        selectedDay={selectedDay}
        selectedEvent={selectedEvent}
      />
    </div>
  );
}

export default SchedulePage;
