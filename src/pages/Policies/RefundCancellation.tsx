import React from "react";

const RefundCancellation: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-[#005246]">Refund & Cancellation Policy</h1>

      <div className="bg-white p-4 rounded-2xl shadow-md space-y-3">
        <h2 className="font-semibold text-xl text-gray-900">1. Cancellation by Customer</h2>
        <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base">
          <li>100% refund if canceled 15 days before travel date.</li>
          <li>50% refund if canceled 7–14 days before travel date.</li>
          <li>No refund if canceled less than 7 days before travel date.</li>
        </ul>
      </div>

      <div className="bg-white p-4 rounded-2xl shadow-md space-y-3">
        <h2 className="font-semibold text-xl text-gray-900">2. Cancellation by Company</h2>
        <p className="text-gray-700 text-sm sm:text-base">
          If we cancel due to unforeseen circumstances (weather, strikes, etc.), you will receive a full refund or the option to reschedule.
        </p>
      </div>

      <div className="bg-white p-4 rounded-2xl shadow-md space-y-3">
        <h2 className="font-semibold text-xl text-gray-900">3. Refund Timeline</h2>
        <p className="text-gray-700 text-sm sm:text-base">
          Approved refunds will be processed within 7–10 business days to the original payment method.
        </p>
      </div>
    </div>
  );
};

export default RefundCancellation;
