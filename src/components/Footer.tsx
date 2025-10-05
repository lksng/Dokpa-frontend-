import React from "react";
import { Facebook, Instagram, Twitter, MapPin, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom"; // ✅ Make sure you're using react-router

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#007a60] text-white py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* About */}
        <div>
          <h3 className="text-lg font-bold mb-4">Dokpa.in</h3>
          <p className="text-sm text-gray-200">
            Discover the beauty of Tawang and Arunachal Pradesh with curated travel
            experiences, local insights, and eco-friendly adventures.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-200 text-sm">
            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/destinations" className="hover:text-white transition-colors">Top Destinations</Link></li>
            <li><Link to="/plan-my-trip" className="hover:text-white transition-colors">Plan My Trip</Link></li>
            <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h3 className="text-lg font-bold mb-4">Policies</h3>
          <ul className="space-y-2 text-gray-200 text-sm">
            <li>
              <Link to="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms-and-conditions" className="hover:text-white transition-colors">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link to="/refund-cancellation-policy" className="hover:text-white transition-colors">
                Refund & Cancellation
              </Link>
            </li>
            <li>
              <Link to="/booking-delivery-policy" className="hover:text-white transition-colors">
                Booking & Delivery
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-bold mb-4">Contact</h3>
          <ul className="space-y-2 text-gray-200 text-sm">
            <li className="flex items-center gap-2">
              <MapPin size={16} /> Tawang, Arunachal Pradesh
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> info@exploreease.com
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} /> +91 98765 43210
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-bold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-300 transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-[#00503f]/50 pt-4 text-center text-gray-300 text-sm">
        © {new Date().getFullYear()} ExploreEase. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
