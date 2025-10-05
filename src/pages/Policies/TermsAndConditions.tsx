import React from "react";

const TermsAndConditions: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold mb-4 text-[#005246]">Terms & Conditions</h1>

      <div className="bg-white p-4 rounded-2xl shadow-md space-y-3">
        <h2 className="font-semibold text-xl text-gray-900">Bookings</h2>
        <p className="text-gray-700 text-sm sm:text-base">
          All bookings are subject to availability. Prices and schedules may change without prior notice. Booking is confirmed only after successful payment.
        </p>
      </div>

      <div className="bg-white p-4 rounded-2xl shadow-md space-y-3">
        <h2 className="font-semibold text-xl text-gray-900">User Conduct</h2>
        <p className="text-gray-700 text-sm sm:text-base">
          Users must provide accurate information while making bookings and respect local customs and laws during trips. ExploreEase reserves the right to refuse service to anyone violating rules.
        </p>
      </div>

      <div className="bg-white p-4 rounded-2xl shadow-md space-y-3">
        <h2 className="font-semibold text-xl text-gray-900">Liability</h2>
        <p className="text-gray-700 text-sm sm:text-base">
          ExploreEase acts as a facilitator for travel experiences and is not responsible for accidents, delays, or other events beyond our control. Users are advised to have travel insurance.
        </p>
      </div>

      <div className="bg-white p-4 rounded-2xl shadow-md space-y-3">
        <h2 className="font-semibold text-xl text-gray-900">Payments</h2>
        <p className="text-gray-700 text-sm sm:text-base">
          All payments are securely processed via Razorpay. Users must pay the full amount as per the chosen package. Refunds and cancellations are governed by our Refund & Cancellation Policy.
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
