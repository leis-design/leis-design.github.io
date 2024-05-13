import React, { useState } from "react";
import InstructionsModal from "./InstructionsModal";
import AccordionItem from "./AccordionItem";

function InstructionsButton({ isOpen }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed bottom-4 right-4 z-50 group">
        <button
          onClick={toggleModal}
          className="p-2 bg-blue-500 text-white rounded-full shadow-lg flex justify-center items-center"
          style={{
            fontSize: "24px",
            width: "50px",
            height: "50px",
            lineHeight: "50px",
          }}
        >
          ?
        </button>
        <span className="tooltip absolute whitespace-no-wrap bg-black text-white text-xs py-1 px-2 rounded shadow-lg mb-1 -ml-6 bottom-full invisible group-hover:visible transition-opacity duration-300">
          How to Instructions
        </span>
      </div>
      <InstructionsModal isOpen={isModalOpen} onClose={toggleModal}>
        <div className="my-8 mx-32">
          <AccordionItem title="Create an Event" isVisible={isOpen}>
            <ol className="list-alpha pl-4 space-y-2 ">
              <li>Select a day tile to add an event</li>
              <li>
                For events that repeat weekly you can select to display the
                repeated event
              </li>
              <li>Select the create button to add the event to your planner</li>
            </ol>

            <p className="mt-4 text-lg text-blue-600 italic">
              Note: If you refresh this page while you are building the planner,
              you will lose your progress
            </p>
          </AccordionItem>
          <AccordionItem title="Edit an Event" isVisible={isOpen}>
            <ol className="list-alpha pl-4 space-y-2 ">
              <li>Select the event you need to edit</li>
              <li>
                Select the edit button to display the changes on your planner
              </li>
            </ol>

            <p className="mt-4 text-lg text-blue-600 italic">
              Note: If you edit an event it will no longer be considered a
              repeated event, and deleteting it will not delete other events
              which were created at the same time
            </p>
          </AccordionItem>
          <AccordionItem title="Delete an Event" isVisible={isOpen}>
            <ol className="list-alpha pl-4 space-y-2 ">
              <li>Select the event you need to delete</li>
              <li>
                You can choose to delete a single event or select the Delete
                repeated checkbox to remove repeated events
              </li>
              <li>Select on the delete button to view your changes</li>
            </ol>
          </AccordionItem>
        </div>
      </InstructionsModal>
    </>
  );
}

export default InstructionsButton;
