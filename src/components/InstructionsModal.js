import React from "react";

function InstructionsModal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  // Function to stop click event propagation
  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4 py-2 bg-black bg-opacity-50"
      onClick={onClose} // Close modal when overlay is clicked
    >
      <div
        className="bg-gray-600 rounded-lg p-4 w-full max-w-4xl overflow-hidden flex flex-col items-center justify-start"
        style={{ maxHeight: "90vh" }} // Limit the height of the modal
        onClick={stopPropagation} // Prevents click inside modal from closing it
      >
        <h1 className="text-2xl md:text-3xl lg:text-4xl mb-2 text-white">
          How To's:
        </h1>
        <div
          className="overflow-auto w-full px-2 py-1"
          style={{ maxHeight: "75vh" }}
        >
          {children}
        </div>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded focus:outline-none transition duration-300 ease-in-out hover:bg-red-600"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default InstructionsModal;
