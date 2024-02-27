function InstructionsModal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  // Function to stop click event propagation
  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
      onClick={onClose} // Close modal when overlay is clicked
    >
      <div
        className="bg-gray-600 rounded-lg p-8 w-1/2 max-h-full "
        onClick={stopPropagation} // Prevents click inside modal from closing it
        style={{ maxHeight: "80vh" }} // Adjust the value as needed
      >
        <div className="text-3xl mb-4 text-white"> How To's:</div>
        <div
          className="text-lg mb-4 overflow-y-auto"
          style={{ maxHeight: "65vh" }}
        >
          {children}
        </div>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default InstructionsModal;
