import React from "react";

function ConfirmationModal({ isOpen, onCancel, onConfirm, repeatDeleted }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-8 w-1/4">
        <h2 className="text-lg mb-4">Confirm Deletion</h2>

        {repeatDeleted && (
          <p className="mb-4">
            By selecting this checkbox you will be deleting all events following
            the selected event, which were created using the repeat weekly check
            boxes.
          </p>
        )}

        <p className="font-bold">Are you sure you want to delete this event?</p>
        <div className="flex justify-end mt-4">
          <button
            className="mr-2 px-4 py-2 bg-gray-500 text-white rounded"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded"
            onClick={onConfirm}
          >
            Delete Event
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationModal;
