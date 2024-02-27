function IconSelectionModal({ isOpen, icons, onSelect, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div
        className="bg-gray-600 rounded-lg p-8 w-1/2"
        style={{ maxHeight: "70vh" }}
      >
        <div
          className="grid grid-cols-4 gap-5 p-4 overflow-y-auto"
          style={{ maxHeight: "55vh" }}
        >
          {icons.map((icon, index) => (
            <div
              className="flex justify-center items-center hover:border-2 hover:border-white p-1 cursor-pointer"
              onClick={() => onSelect(index)}
              key={index}
            >
              <img
                src={icon}
                alt={`Icon ${index}`}
                className="cursor-pointer m-1"
                style={{ width: "50px", height: "50px" }} // Uniform size for icons
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center mt-4">
          {" "}
          {/* Adjusted margin top */}
          <button
            onClick={onClose}
            className="px-4 py-2 bg-red-500 text-white rounded"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default IconSelectionModal;
