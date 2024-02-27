import React from "react";

function FeedBackCard({ isOpen }) {
  if (!isOpen) return null;

  return (
    <div className="flex flex-col justify-center items-center max-w-lg mx-auto my-10 p-6 bg-white rounded-md shadow-md">
      <div className="block mb-4 text-lg md:text-xl lg:text-2xl font-medium text-gray-700">
        Got Feedback?
      </div>
      <div className="block mb-4 text-sm md:text-base lg:text-lg font-medium text-gray-700">
        We'd love to hear from you. Share your feeback
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() =>
          (window.location =
            "mailto:leis@lassonde.yorku.ca?subject=Feedback%20Visual%20Calendar%20Builders%20App")
        }
      >
        <div>
          <i
            className="fa-solid fa-question-circle mr-2"
            aria-hidden="true"
            style={{ color: "white" }}
          ></i>
          Send Feedback
        </div>
      </button>
    </div>
  );
}

export default FeedBackCard;
