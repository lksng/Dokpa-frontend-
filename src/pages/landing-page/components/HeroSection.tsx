import React, { useState, useRef } from "react";
import { Search, Calendar, DollarSign, Users } from "lucide-react";
import Weather from "./Weather";
import Navbar from "../../../components/Navbar/navbar";

const slides = [
  { src: "/beautiful-scenery-high-rocky-mountains-covered-with-snow-breathtaking-sky.jpg", alt: "Scene 1" },
  { src: "/beautiful-scenery-summit-mount-everest-covered-with-snow-white-clouds.jpg", alt: "Scene 2" },
  { src: "/images2.jpg", alt: "Scene 3" },
  { src: "/winter-alpen-lake.jpg", alt: "Scene 4" },
  { src: "/winter-alpen-lake.jpg", alt: "Scene 5" },
  { src: "/winter-alpen-lake.jpg", alt: "Scene 6" },
  { src: "/winter-alpen-lake.jpg", alt: "Scene 7" },
];

const Header: React.FC = () => {
  const [bigImage, setBigImage] = useState<string>(slides.src);
  const thumbnailRowRef = useRef<HTMLDivElement>(null);
  const thumbnailScrollAmount = 140; // Set this to slightly wider than thumbnail

  // Handlers for thumbnail scroll
  const handleThumbnailScrollLeft = () => {
    if (thumbnailRowRef.current) {
      thumbnailRowRef.current.scrollBy({
        left: -thumbnailScrollAmount,
        behavior: "smooth"
      });
    }
  };
  const handleThumbnailScrollRight = () => {
    if (thumbnailRowRef.current) {
      thumbnailRowRef.current.scrollBy({
        left: thumbnailScrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="px-8 lg:px-12 pt-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* ✅ Left Section (Text + Search + Weather) */}
          <div className="lg:col-span-6 space-y-8">
            <h1 className="text-4xl lg:text-6xl font-light text-gray-900 leading-tight">
              Transform your
              <br />
              <span className="font-black">
                Travelling
                <br />
                Experience
              </span>
            </h1>

            {/* Search Filters */}
            <div className="bg-[#064e3b] rounded-2xl p-6 text-white max-w-lg">
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="flex items-center gap-2 border-r border-green-400 pr-4">
                  <Calendar className="w-4 h-4" />
                  <select className="bg-transparent border-none focus:outline-none text-sm text-white cursor-pointer">
                    <option className="text-gray-800">Date</option>
                  </select>
                </div>
                <div className="flex items-center gap-2 border-r border-green-400 pr-4">
                  <DollarSign className="w-4 h-4" />
                  <select className="bg-transparent border-none focus:outline-none text-sm text-white cursor-pointer">
                    <option className="text-gray-800">Budget</option>
                  </select>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <select className="bg-transparent border-none focus:outline-none text-sm text-white cursor-pointer">
                    <option className="text-gray-800">Guest</option>
                  </select>
                </div>
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full p-3 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                <Search className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
              </div>
            </div>

            <Weather />
          </div>

          {/* ✅ Right Section (Big Image + Thumbnails) */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            {/* Big Image */}
            <div className="flex-1 rounded-3xl overflow-hidden shadow-lg">
              <img
                src={bigImage}
                alt="Selected"
                className="w-full h-[400px] object-cover"
              />
            </div>

            {/* Thumbnails - Scrollable Row With Left/Right Arrows */}
            <div className="relative flex items-center w-full">
              <button
                className="absolute left-0 z-10 bg-white rounded-full p-2 shadow hover:bg-gray-100 transition"
                style={{ top: "50%", transform: "translateY(-50%)" }}
                onClick={handleThumbnailScrollLeft}
                aria-label="Scroll left"
              >
                ‹
              </button>
              <div
                ref={thumbnailRowRef}
                className="flex gap-4 overflow-x-auto no-scrollbar w-full px-10"
                style={{ scrollBehavior: "smooth" }}
              >
                {slides.map((slide, i) => (
                  <div
                    key={i}
                    onClick={() => setBigImage(slide.src)}
                    className="flex-shrink-0 w-28 h-28 lg:w-36 lg:h-36 rounded-2xl overflow-hidden shadow-md bg-gray-200 cursor-pointer hover:scale-105 transition"
                  >
                    <img
                      src={slide.src}
                      alt={slide.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <button
                className="absolute right-0 z-10 bg-white rounded-full p-2 shadow hover:bg-gray-100 transition"
                style={{ top: "50%", transform: "translateY(-50%)" }}
                onClick={handleThumbnailScrollRight}
                aria-label="Scroll right"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
