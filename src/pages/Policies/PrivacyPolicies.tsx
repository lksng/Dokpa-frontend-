import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold mb-4 text-[#005246]">Privacy Policy</h1>

      <p className="text-gray-700 text-sm sm:text-base">
        At ExploreEase, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains what information we collect, how we use it, and your rights regarding your data.
      </p>

      <div className="bg-white p-4 rounded-2xl shadow-md space-y-3">
        <h2 className="font-semibold text-xl text-gray-900">Information We Collect</h2>
        <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base">
          <li>Personal details (name, email, phone number) for bookings and communication.</li>
          <li>Payment information securely processed via Razorpay.</li>
          <li>Usage data to improve website performance and services.</li>
        </ul>
      </div>

      <div className="bg-white p-4 rounded-2xl shadow-md space-y-3">
        <h2 className="font-semibold text-xl text-gray-900">How We Use Your Information</h2>
        <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base">
          <li>To process bookings and payments.</li>
          <li>To provide personalized travel recommendations.</li>
          <li>To send updates and promotional offers (if opted in).</li>
        </ul>
      </div>

      <div className="bg-white p-4 rounded-2xl shadow-md space-y-3">
        <h2 className="font-semibold text-xl text-gray-900">Data Security</h2>
        <p className="text-gray-700 text-sm sm:text-base">
          We use industry-standard security measures, including encryption, to protect your data. Payment processing is handled by Razorpay securely.
        </p>
      </div>

      <div className="bg-white p-4 rounded-2xl shadow-md space-y-3">
        <h2 className="font-semibold text-xl text-gray-900">Your Rights</h2>
        <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base">
          <li>You can request access, correction, or deletion of your personal data.</li>
          <li>You can unsubscribe from marketing communications at any time.</li>
        </ul>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
