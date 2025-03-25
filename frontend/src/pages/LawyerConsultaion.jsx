import React, { useState } from "react";

const ConsultationBooking = () => {
  const [formData, setFormData] = useState({
    clientName: "",
    lawyerId: "",
    appointmentDate: "",
    caseSummary: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-background">
      <div className="bg-primary p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-4 text-darker font-raleway">
          Consultation Booking
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium text-darker mb-2">Client Name</label>
            <input
              type="text"
              name="clientName"
              value={formData.clientName}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-secondary bg-background text-darker rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary font-raleway"
              placeholder="Enter client name"
            />
          </div>

          <div>
            <label className="block font-medium text-darker mb-2">Lawyer ID</label>
            <input
              type="text"
              name="lawyerId"
              value={formData.lawyerId}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-secondary bg-background text-darker rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary font-raleway"
              placeholder="Enter lawyer ID"
            />
          </div>

          <div>
            <label className="block font-medium text-darker mb-2">Appointment Date</label>
            <input
              type="date"
              name="appointmentDate"
              value={formData.appointmentDate}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-secondary bg-background text-darker rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary font-raleway"
            />
          </div>

          <div>
            <label className="block font-medium text-darker mb-2">Case Summary</label>
            <textarea
              name="caseSummary"
              value={formData.caseSummary}
              onChange={handleChange}
              required
              rows="4"
              className="w-full px-3 py-2 border border-secondary bg-background text-darker rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary font-raleway"
              placeholder="Provide a brief case summary"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-secondary  text-darker py-2 rounded-lg hover:bg-darker hover:text-background transition font-raleway"
          >
            Book Consultation
          </button>
        </form>
      </div>
    </div>
  );
};

export default ConsultationBooking;
