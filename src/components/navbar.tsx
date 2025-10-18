import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/dokpadarkenlogo.png";
import { useUIStore } from "../store";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const { showNavbar, lastScrollY, setNavbarVisibility, setLastScrollY } = useUIStore();
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) setNavbarVisibility(false);
      else setNavbarVisibility(true);
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
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-4">
            <img
              src={Logo}
              alt="Logo"
              className="h-14 sm:h-16 md:h-20 w-auto object-contain scale-125"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black tracking-wide">
                Drokpa.in
              </span>
              <span className="text-base sm:text-lg font-medium text-gray-700">
                འབྲོག་པ་
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-10">
          <Link to="/" className="font-semibold text-base lg:text-lg hover:text-[#005246] transition-colors">
            Home
          </Link>
          <Link to="/tours" className="font-semibold text-base lg:text-lg hover:text-[#005246] transition-colors">
            Tours
          </Link>
          <Link to="/about" className="font-semibold text-base lg:text-lg hover:text-[#005246] transition-colors">
            About
          </Link>
          <Link to="/contact" className="font-semibold text-base lg:text-lg hover:text-[#005246] transition-colors">
            Contact
          </Link>
        </div>

        {/* Right: Login + Hamburger */}
        <div className="flex items-center gap-4">
          {/* Desktop Login */}
          <button className="hidden lg:flex bg-gradient-to-r from-[#005246] to-[#007f67] text-white px-5 py-2.5 rounded-full font-semibold shadow-md hover:scale-105 hover:shadow-lg transition-all">
            Login
          </button>

          {/* Hamburger Menu (desktop + mobile) */}
          <button
            onClick={() => setMenuOpen(!isMenuOpen)}
            className="flex items-center justify-center p-2 rounded-md text-gray-800 hover:bg-gray-200 transition"
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Dropdown Menu */}
      {isMenuOpen && (
        <div className="bg-white shadow-lg border-t border-gray-200 lg:absolute lg:right-5 lg:top-full lg:w-56 rounded-xl lg:shadow-xl">
          <div className="flex flex-col px-6 py-4 space-y-3 text-base font-medium text-gray-800">
            {/* All links in dropdown */}
            <Link to="/activities" className="hover:text-[#005246]" onClick={() => setMenuOpen(false)}>
              Activities
            </Link>
            <Link to="/vehicles" className="hover:text-[#005246]" onClick={() => setMenuOpen(false)}>
              Vehicles
            </Link>
            <Link to="/homestays" className="hover:text-[#005246]" onClick={() => setMenuOpen(false)}>
              Homestays
            </Link>

            {/* Mobile only: include main links & login */}
            <div className="lg:hidden mt-2 border-t border-gray-200 pt-2 space-y-2">
              <Link to="/" className="hover:text-[#005246]" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
              <Link to="/tours" className="hover:text-[#005246]" onClick={() => setMenuOpen(false)}>
                Tours
              </Link>
              <Link to="/about" className="hover:text-[#005246]" onClick={() => setMenuOpen(false)}>
                About
              </Link>
              <Link to="/contact" className="hover:text-[#005246]" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
              <button className="mt-2 w-full bg-gradient-to-r from-[#005246] to-[#007f67] text-white px-4 py-2 rounded-full font-semibold shadow-md hover:scale-105 transition-transform">
                Login
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
