import React, { useEffect } from "react";
import Logo from "../assets/dokpadarkenlogo.png";
import { useUIStore } from "../store";

const Navbar: React.FC = () => {
  const { 
    isMobileMenuOpen, 
    showNavbar, 
    lastScrollY, 
    toggleMobileMenu, 
    setMobileMenuOpen, 
    setNavbarVisibility, 
    setLastScrollY 
  } = useUIStore();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // scrolling down → hide
        setNavbarVisibility(false);
      } else {
        // scrolling up → show
        setNavbarVisibility(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, setNavbarVisibility, setLastScrollY]);

  return (
    <nav
      className={`w-full shadow-sm bg-white/40 sticky top-5 z-50 rounded-2xl transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Container with fixed max width */}
  <div className="w-full max-w-7xl lg:max-w-12xl xl:max-w-10xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">



        {/* Logo + Brand */}
        <div className="flex items-center gap-4">
          {/* Logo wrapper with scale */}
          <div className="flex items-center justify-center h-14 sm:h-16 md:h-20 lg:h-24">
            <img
              src={Logo}
              alt="Logo"
              className="h-full w-auto object-contain scale-125 sm:scale-125 md:scale-150"
            />
          </div>

          {/* Brand Name */}
          <div className="flex flex-col leading-tight">
            <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-black tracking-wide">
              Dokpa.in
            </span>
            <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-gray-700">
              འབྲོག་པ་
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 lg:gap-12 font-semibold text-base lg:text-xl text-black">
          <a href="/" className="hover:text-[#005246] transition-colors">
            Home
          </a>
          <a href="/tours" className="hover:text-[#005246] transition-colors">
            Tours
          </a>
           <a href="/acticities" className="hover:text-[#005246] transition-colors">
           Activities 
          </a>
          <a
            href="/vehicles"
            className="hover:text-[#005246] transition-colors"
          >
            Vehicles
          </a>
          <a href="/about" className="hover:text-[#005246] transition-colors">
            About
          </a>
          <a href="/contact" className="hover:text-[#005246] transition-colors">
            Contact
          </a>
        </div>

        {/* Login Button (hidden on mobile, shown in menu instead) */}
        <div className="hidden md:flex items-center">
          <button className="bg-[#005246] text-white px-4 lg:px-6 py-2 lg:py-3 rounded-full hover:bg-[#00735f] transition-colors text-sm sm:text-base lg:text-lg font-medium">
            Login
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-700 focus:outline-none"
          >
            {isMobileMenuOpen ? (
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-200">
          <div className="flex flex-col px-6 py-4 space-y-3 text-base font-medium text-gray-800">
            <a href="/" className="hover:text-[#005246]">
              Home
            </a>
            <a href="/tours" className="hover:text-[#005246]">
              Tours
            </a>
            <a href="/vehicles" className="hover:text-[#005246]">
              Vehicles
            </a>
            <a href="/about" className="hover:text-[#005246]">
              About
            </a>
            <a href="/contact" className="hover:text-[#005246]">
              Contact
            </a>
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
