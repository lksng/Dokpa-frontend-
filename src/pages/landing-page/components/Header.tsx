import React, { useState, useEffect } from "react";
import { Search, Users, Clock, Calendar, FileText } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Weather from "./Weather";
// import Navbar from "../../../components/navbar";
import { motion } from "framer-motion";

interface Place {
  name: string;
  images: string[];
}

const Header: React.FC = () => {
  const places: Place[] = [
    {
      name: "Tawang",
      images: [
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/TawangMonastery-ArunachalPradesh-1.jpg",
        "src/assets/borderimg.jpg",
        "src/assets/snowtawang.jpg",
        "src/assets/yakimg.jpeg",
        "src/assets/tawangimg1.jpeg",
        "src/assets/twgimg2.jpeg",
        "src/assets/tsoimg.jpeg",
        "src/assets/Tawang-Bumla-Pass.jpg",
        "src/assets/twgsunset.jpeg",
      ],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [startIndex, setStartIndex] = useState<number>(0);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [budget, setBudget] = useState<string>("");
  const [guests, setGuests] = useState<string>("");
  const [days, setDays] = useState<string>("");
  const [searchLocation, setSearchLocation] = useState<string>("");
  const [showPopup, setShowPopup] = useState(false);

  const currentPlace = places[0];
  const themeColor = "#005246";

  // Auto-slide thumbnails
  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % currentPlace.images.length);
      setCurrentIndex((prev) => (prev + 1) % currentPlace.images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentPlace.images.length]);

  const handleNextClick = () => {
    if (!startDate || !endDate) return;
    setShowPopup(true);
  };

  const handleSearchClick = () => {
    console.log({ searchLocation });
  };

  const getVisibleThumbnails = () => {
    const imgs = [];
    for (let i = 0; i < 4; i++) {
      imgs.push(
        currentPlace.images[(startIndex + i) % currentPlace.images.length]
      );
    }
    return imgs;
  };

  const handleThumbLeft = () => {
    setStartIndex((prev) =>
      prev === 0 ? currentPlace.images.length - 1 : prev - 1
    );
    setCurrentIndex((prev) =>
      prev === 0 ? currentPlace.images.length - 1 : prev - 1
    );
  };

  const handleThumbRight = () => {
    setStartIndex((prev) => (prev + 1) % currentPlace.images.length);
    setCurrentIndex((prev) => (prev + 1) % currentPlace.images.length);
  };

  return (
    <div className="w-full">
      {/* Navbar optional */}
      {/* <Navbar /> */}

      <div className="w-full max-w-7xl mx-auto px-0 sm:px-0 lg:px-8 py-2 sm:py-8 lg:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-8 lg:gap-12 items-start">

          {/* Left Section */}
          <motion.div
            className="lg:col-span-5 space-y-4 sm:space-y-6"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Heading */}
            <motion.div
              className="mb-4 text-center lg:text-left"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-light text-gray-900 leading-snug sm:leading-tight">
                Transform your
                <br />
                <span className="font-extrabold text-[#005246]">
                  Travelling Experience
                </span>
              </h1>
            </motion.div>

            {/* Filters + Search */}
            <motion.div
              className="rounded-xl sm:rounded-2xl p-3 sm:p-5 md:p-6 w-full space-y-3 sm:space-y-4 shadow-lg"
              style={{ backgroundColor: themeColor }}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* Filters */}
              <div className="flex flex-wrap gap-2 sm:gap-3 items-center text-xs sm:text-sm">
                {/* Date Range Picker */}
                <div className="flex-1 min-w-[120px] flex items-center gap-1 sm:gap-2 text-white">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                  <DatePicker
                    selectsRange
                    startDate={startDate}
                    endDate={endDate}
                    onChange={(dates: [Date | null, Date | null]) => {
                      const [start, end] = dates;
                      setStartDate(start);
                      setEndDate(end);
                    }}
                    placeholderText="Select dates"
                    className="bg-transparent w-full text-xs sm:text-sm text-white focus:outline-none cursor-pointer"
                    dateFormat="dd MMM"
                  />
                </div>

                {/* Budget */}
                <div className="min-w-[70px] flex items-center gap-1 sm:gap-2 text-white">
                  <span className="text-lg">₹</span>
                  <select
                    className="bg-transparent w-full text-xs sm:text-sm text-white focus:outline-none cursor-pointer"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                  >
                    <option value="">Budget</option>
                    <option value="500-1000">2000-3000</option>
                    <option value="1000-2000">₹4000-8000</option>
                    <option value="2000+">₹10000+</option>
                  </select>
                </div>

                {/* Guests */}
                <div className="flex-1 min-w-[80px] flex items-center gap-1 sm:gap-2 text-white">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5" />
                  <select
                    className="bg-transparent w-full text-xs sm:text-sm text-white focus:outline-none cursor-pointer"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                  >
                    <option value="">Guests</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3+">3+</option>
                  </select>
                </div>

                {/* Days */}
                <div className="flex-1 min-w-[80px] flex items-center gap-1 sm:gap-2 text-white">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                  <select
                    className="bg-transparent w-full text-xs sm:text-sm text-white focus:outline-none cursor-pointer"
                    value={days}
                    onChange={(e) => setDays(e.target.value)}
                  >
                    <option value="">Days</option>
                    <option value="1-2">1-2</option>
                    <option value="3-5">3-5</option>
                    <option value="6+">6+</option>
                  </select>
                </div>

                {/* Next Button */}
                <button
                  className="flex-1 min-w-[60px] bg-white/20 text-white font-semibold px-2 sm:px-3 py-1 sm:py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm hover:bg-white/30 transition"
                  onClick={handleNextClick}
                >
                  Next
                </button>
              </div>

              {/* Search bar */}
              <div className="relative mt-2 sm:mt-3">
                <input
                  type="text"
                  placeholder="Search by homestay or location..."
                  className="w-full p-2 sm:p-3 rounded-md sm:rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#005246] bg-white text-xs sm:text-sm"
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                />
                <button
                  className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 bg-[#005246] text-white px-2 sm:px-3 py-1 sm:py-2 rounded-md sm:rounded-lg flex items-center gap-1 text-xs sm:text-sm hover:bg-green-700 transition"
                  onClick={handleSearchClick}
                >
                  <Search className="w-3 h-3 sm:w-4 sm:h-4" />
                  Search
                </button>
              </div>
            </motion.div>

            {/* Weather + Permit */}
            <motion.div
              className="mt-2 sm:mt-4 flex flex-col sm:flex-row gap-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex-1">
                <Weather />
              </div>
              <div className="flex-1 bg-white/90 rounded-xl shadow-md p-3 flex items-start gap-2 border border-[#007a60]/40">
                <FileText className="w-6 h-6 text-green-700 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800 text-sm sm:text-base">
                    Permit Info
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600">
                    ILP required for Arunachal travel.{" "}
                    <a
                      href="https://arunachalilp.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-700 font-medium hover:underline"
                    >
                      Apply here
                    </a>
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Section (Images) */}
          <motion.div
            className="lg:col-span-7 flex flex-col gap-3 sm:gap-5 order-first lg:order-last"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={currentPlace.images[currentIndex]}
                alt={currentPlace.name}
                className="w-full h-[200px] sm:h-[260px] md:h-[350px] lg:h-[480px] object-cover transition-all duration-500"
              />
            </motion.div>

            {/* Thumbnails */}
            <motion.div
              className="flex items-center justify-center gap-2 sm:gap-4 relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <button
                className="bg-white rounded-full p-1 sm:p-2 shadow hover:bg-gray-100 absolute left-0 -translate-y-1/2 top-1/2 z-10"
                onClick={handleThumbLeft}
                aria-label="Prev thumbnail"
              >
                ‹
              </button>
              <div className="flex gap-2 sm:gap-4 overflow-hidden w-full justify-center">
                {getVisibleThumbnails().map((img, i) => (
                  <motion.div
                    key={i}
                    className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-lg sm:rounded-xl overflow-hidden shadow-md bg-gray-200 cursor-pointer hover:scale-105 transition"
                    onClick={() =>
                      setCurrentIndex((startIndex + i) % currentPlace.images.length)
                    }
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <img
                      src={img}
                      alt={`${currentPlace.name} ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>
              <button
                className="bg-white rounded-full p-1 sm:p-2 shadow hover:bg-gray-100 absolute right-0 -translate-y-1/2 top-1/2 z-10"
                onClick={handleThumbRight}
                aria-label="Next thumbnail"
              >
                ›
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Popup */}
      {showPopup && (
        <motion.div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 w-[90%] max-w-md text-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-xl sm:text-2xl font-bold text-[#005246] mb-4">
              Confirm Your Trip
            </h2>

            <div className="space-y-2 text-gray-700 text-sm sm:text-base">
              <p>
                <span className="font-semibold">Destination:</span>{" "}
                {searchLocation || "Not specified"}
              </p>
              <p>
                <span className="font-semibold">Dates:</span>{" "}
                {startDate ? startDate.toDateString() : "N/A"} -{" "}
                {endDate ? endDate.toDateString() : "N/A"}
              </p>
              <p>
                <span className="font-semibold">Budget:</span>{" "}
                {budget || "Not specified"}
              </p>
              <p>
                <span className="font-semibold">Guests:</span>{" "}
                {guests || "Not specified"}
              </p>
              <p>
                <span className="font-semibold">Days:</span>{" "}
                {days || "Not specified"}
              </p>
            </div>

            <div className="mt-6 flex justify-center gap-4">
              <button
                className="px-4 py-2 rounded-lg font-semibold bg-[#005246] text-white hover:bg-green-700 transition"
                onClick={() => setShowPopup(false)}
              >
                Confirm
              </button>
              <button
                className="px-4 py-2 rounded-lg font-semibold bg-gray-200 text-gray-800 hover:bg-gray-300 transition"
                onClick={() => setShowPopup(false)}
              >
                Cancel
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Header;
