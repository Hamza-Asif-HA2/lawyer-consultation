import React, { useState } from "react";

const PaymentForm = () => {
  const [formData, setFormData] = useState({
    clientId: "",
    lawyerId: "",
    amount: "",
    paymentMethod: "Card",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Payment Submitted:", formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen ">
    <div className=" max-w-md w-full mx-auto bg-background p-6 rounded-lg shadow-lg mt-10">

      <h2 className="text-2xl font-semibold text-center text-darker mb-4">
        Make Payment
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium text-darker mb-2">Client ID</label>
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
          <label className="block font-medium text-darker mb-2">Lawyer ID</label>
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

        <div>
          <label className="block font-medium text-darker mb-2">Amount ($)</label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-secondary bg-background text-darker rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
            placeholder="Enter amount"
          />
        </div>

        <div>
          <label className="block font-medium text-darker mb-2">Payment Method</label>
          <select
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-secondary bg-background text-darker rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
          >
            <option value="Card">Credit/Debit Card</option>
            <option value="PayPal">PayPal</option>
            <option value="Bank Transfer">Bank Transfer</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-secondary text-darker rounded-lg hover:bg-darker hover:text-background transition"
        >
          Submit Payment
        </button>
      </form>
    </div>
    </div>
  );
};

export default PaymentForm;
