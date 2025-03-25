import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const FeedbackForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    clientId: "",
    lawyerId: "",
    review: "",
    rating: 0,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRating = (rate) => {
    setFormData({ ...formData, rating: rate });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Feedback Submitted:", formData);
    onClose(); // Close modal after submission
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-primary p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-semibold text-center mb-4 text-darker">
          Leave Feedback
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium text-darker">Client ID</label>
            <input
              type="text"
              name="clientId"
              value={formData.clientId}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-secondary bg-background text-darker rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
              placeholder="Enter client ID"
            />
          </div>

          <div>
            <label className="block font-medium text-darker">Lawyer ID</label>
            <input
              type="text"
              name="lawyerId"
              value={formData.lawyerId}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-secondary bg-background text-darker rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
              placeholder="Enter lawyer ID"
            />
          </div>

          {/* Star Rating */}
          <div>
            <label className="block font-medium text-darker">Rating</label>
            <div className="flex space-x-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar
                  key={star}
                  size={24}
                  className={`cursor-pointer ${
                    formData.rating >= star ? "text-secondary" : "text-gray-500"
                  }`}
                  onClick={() => handleRating(star)}
                />
              ))}
            </div>
          </div>

          {/* Review Input */}
          <div>
            <label className="block font-medium text-darker">Review</label>
            <textarea
              name="review"
              value={formData.review}
              onChange={handleChange}
              required
              rows="3"
              className="w-full px-3 py-2 border border-secondary bg-background text-darker rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
              placeholder="Write your feedback..."
            ></textarea>
          </div>

          {/* Buttons */}
          <div className="flex justify-between">
            <button
              type="button"
              className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-secondary text-background rounded-lg hover:bg-darker hover:text-background transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
