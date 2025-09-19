import React from 'react';
import { useNavigate } from 'react-router-dom';

const ContactUs = () => {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden">
      <div className="grid lg:grid-cols-2 min-h-full">
        {/* Left Side - Content */}
        <div className="bg-gray-900 text-white flex items-center justify-center p-12 lg:p-16 relative">
          <div className="absolute top-6 left-6">
            <button
              onClick={() => navigate('/')}
              className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-md transition"
            >
              ← Back
            </button>
          </div>

          <div className="max-w-md space-y-8">
            {/* Heading */}
            <div>
              <h2 className="text-4xl lg:text-5xl font-light leading-tight mb-4">
                Any{" "}
                <span className="text-teal-400 font-normal">questions?</span>
              </h2>
              <h3 className="text-3xl lg:text-3xl font-light">
                Get in touch with
              </h3>
              <h3 className="text-2xl lg:text-3xl font-light">
                <span className="text-teal-400 font-normal">our team!</span>
              </h3>
            </div>

            {/* Contact Button */}
            <div className="pt-4">
              <button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-transform">
                Contact Us
              </button>
            </div>

            {/* Optional Contact Info */}
            <div className="pt-8 space-y-3 text-gray-300">
              <p className="text-lg">📧 dokpa@gmail.com</p>
              <p className="text-lg">📞 +91 8119984614</p>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="relative lg:block">
          <img
            src="/example.png"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
