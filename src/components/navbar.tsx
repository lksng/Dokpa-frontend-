import React, { useState } from "react";
import Logo from "/Users/lobsangkesang/Documents/Mon-Voyage-Frontend/src/assets/yaklogo,jpg.jpeg"; // replace with your logo path

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white/80 shadow-sm sticky top-5 z-50 rounded-2xl">
      <div className=" mx-auto px-4 sm:px-6 lg:px-12 py-3 flex justify-between items-center">
        
        {/* Logo + Brand */}
        <div className="flex items-center gap-2 sm:gap-4">
          <img src={Logo} alt="Logo" className="h-10 sm:h-12 md:h-14 w-auto object-contain" />
          <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-black tracking-wide">
            Dokpa.in
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 lg:gap-12 font-semibold text-base lg:text-xl text-black">
          <a href="/" className="hover:text-[#005246] transition-colors">Home</a>
          <a href="/tours" className="hover:text-[#005246] transition-colors">Tours</a>
          <a href="/vehicles" className="hover:text-[#005246] transition-colors">Vehicles</a>
          <a href="/about" className="hover:text-[#005246] transition-colors">About</a>
          <a href="/contact" className="hover:text-[#005246] transition-colors">Contact</a>
        </div>

        {/* Login Button (hidden on mobile, shown in menu instead) */}
        <div className="hidden md:flex items-center">
          <button className="bg-[#005246] text-white px-4 lg:px-6 py-2 lg:py-3 rounded-full hover:bg-[#00735f] transition-colors text-sm sm:text-base lg:text-lg font-medium">
            Login
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
            {isOpen ? (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-200">
          <div className="flex flex-col px-6 py-4 space-y-3 text-base font-medium text-gray-800">
            <a href="/" className="hover:text-[#005246]">Home</a>
            <a href="/tours" className="hover:text-[#005246]">Tours</a>
            <a href="/vehicles" className="hover:text-[#005246]">Vehicles</a>
            <a href="/about" className="hover:text-[#005246]">About</a>
            <a href="/contact" className="hover:text-[#005246]">Contact</a>
            <button className="mt-3 bg-[#005246] text-white px-4 py-2 rounded-full hover:bg-[#00735f] transition-colors">
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
