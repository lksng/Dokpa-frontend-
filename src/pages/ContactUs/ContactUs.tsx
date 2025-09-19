import React from "react";
import { Mail, Phone, MapPin, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom"; // for navigation

const ContactUs: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="relative bg-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side - Info */}
        <div>
          {/* Back Button */}
          <button
            onClick={() => navigate("/")}
            className="mb-6 flex items-center gap-2 text-[#005246] hover:text-[#00735f] font-medium transition"
          >
            <ArrowLeft size={20} />
            Back to Home
          </button>

          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
            Get in <span className="text-[#005246]">Touch</span>
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-md">
            Have questions about trips, bookings, or our services?  
            Our team is here to help you plan your journey.
          </p>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-[#005246]/10 text-[#005246]">
                <Mail size={24} />
              </div>
              <p className="text-lg text-gray-700">dokpa@gmail.com</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-[#005246]/10 text-[#005246]">
                <Phone size={24} />
              </div>
              <p className="text-lg text-gray-700">+91 8119984614</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-[#005246]/10 text-[#005246]">
                <MapPin size={24} />
              </div>
              <p className="text-lg text-gray-700">Tawang, Arunachal Pradesh, India</p>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="bg-white p-8 lg:p-10 rounded-2xl shadow-lg border border-gray-200">
          <h3 className="text-2xl font-semibold text-black mb-6">Send us a message</h3>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#005246] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#005246] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea
                rows={4}
                placeholder="Write your message..."
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#005246] focus:outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#005246] text-white py-3 rounded-lg font-semibold hover:bg-[#00735f] transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
