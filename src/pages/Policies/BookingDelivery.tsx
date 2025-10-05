import React from "react";

const BookingDelivery: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-[#005246]">Booking & Delivery Policy</h1>

      <div className="bg-white p-4 rounded-2xl shadow-md space-y-3">
        <h2 className="font-semibold text-xl text-gray-900">1. Booking Process</h2>
        <p className="text-gray-700 text-sm sm:text-base">
          Users can book trips directly through ExploreEase by selecting the destination, dates, and package options. Confirmation is provided after successful payment.
        </p>
      </div>

      <div className="bg-white p-4 rounded-2xl shadow-md space-y-3">
        <h2 className="font-semibold text-xl text-gray-900">2. Ticket Delivery</h2>
        <p className="text-gray-700 text-sm sm:text-base">
          Booking confirmations, tickets, and itineraries will be sent to the user’s registered email. Please ensure the email provided is correct.
        </p>
      </div>

      <div className="bg-white p-4 rounded-2xl shadow-md space-y-3">
        <h2 className="font-semibold text-xl text-gray-900">3. Amendments & Updates</h2>
        <p className="text-gray-700 text-sm sm:text-base">
          Users can request changes to their booking via customer support. Amendments are subject to availability and may incur additional charges.
        </p>
      </div>

      <div className="bg-white p-4 rounded-2xl shadow-md space-y-3">
        <h2 className="font-semibold text-xl text-gray-900">4. Security</h2>
        <p className="text-gray-700 text-sm sm:text-base">
          All booking and payment information is securely stored and processed via Razorpay.
        </p>
      </div>
    </div>
  );
};

export default BookingDelivery;
