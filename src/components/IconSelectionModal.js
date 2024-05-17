import React, { useState, useEffect } from "react";

function IconSelectionModal({ isOpen, icons, onSelect, onClose }) {
  const [showAllIcons, setShowAllIcons] = useState(false);

  // Reset state when modal closes
  useEffect(() => {
    if (!isOpen) {
      setShowAllIcons(false);
    }
  }, [isOpen]);

  const displayedIcons = showAllIcons ? icons : icons.slice(0, 16);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black bg-opacity-75">
      <div
        className="bg-gray-600 rounded-lg p-4 w-full md:w-3/4 lg:w-1/2 xl:w-1/3 overflow-hidden"
        style={{ maxHeight: "80vh" }}
      >
        <div
          className="grid grid-cols-4 gap-4 overflow-y-auto p-4"
          style={{ maxHeight: "60vh" }}
        >
          {displayedIcons.map((icon, index) => (
            <button
              key={index}
              className="flex justify-center items-center hover:border-2 hover:border-white p-1"
              onClick={() => onSelect(index)}
            >
              <img
                src={icon}
                alt={`Icon ${index}`}
                className="h-12 w-12 object-contain"
              />
            </button>
          ))}
        </div>
        {icons.length > 16 && !showAllIcons && (
          <div className="flex justify-center mt-2">
            <button
              onClick={() => setShowAllIcons(true)}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              See More Icons
            </button>
          </div>
        )}
        <div className="flex justify-center mt-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default IconSelectionModal;
