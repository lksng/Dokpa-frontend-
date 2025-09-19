import React, { useState } from "react";
import { Star } from "lucide-react";

interface Homestay {
  id: number;
  name: string;
  location: string;
  price: number;
  rating: number;
  image: string;
}

const homestays: Homestay[] = [
  { id: 1, name: "Himalayan View Homestay", location: "Tawang", price: 2500, rating: 4.7, image: "src/assets/homestayone.jpeg"},
  { id: 2, name: "Monpa Retreat", location: "Tawang", price: 2800, rating: 4.6, image: "src/assets/homestay2.jpg" },
  { id: 3, name: "Peaceful Haven", location: "Tawang", price: 2200, rating: 4.5, image: "src/assets/homestay3.jpg" },
  { id: 4, name: "Valley View Homestay", location: "Bomdila", price: 2000, rating: 4.3, image: "src/assets/homestay4.jpg" },
  { id: 5, name: "Orchid Residency", location: "Bomdila", price: 2300, rating: 4.4, image: "src/assets/homestay5.jpg" },
  { id: 6, name: "Serene Nest", location: "Bomdila", price: 2100, rating: 4.2, image: "src/assets/homestay6.jpg" },
  { id: 7, name: "Dirang Riverside Stay", location: "Dirang", price: 2700, rating: 4.8, image: "src/assets/homestay7.jpg" },
  { id: 8, name: "Apple Orchard Homestay", location: "Dirang", price: 2600, rating: 4.6, image: "src/assets/homestay8.jpg" },
  { id: 9, name: "Mountain Bliss", location: "Dirang", price: 2400, rating: 4.5, image: "src/assets/homestay9.jpg" },
];

const locations = ["All", "Tawang", "Bomdila", "Dirang"];

export default function HomestayList() {
  const [selectedLocation, setSelectedLocation] = useState("All");

  // Track showAll state per location
  const [showAllMap, setShowAllMap] = useState<Record<string, boolean>>({
    All: false,
    Tawang: false,
    Bomdila: false,
    Dirang: false,
  });

  const handleLocationClick = (loc: string) => {
    setSelectedLocation(loc);
  };

  const toggleShowAll = (loc: string) => {
    setShowAllMap((prev) => ({
      ...prev,
      [loc]: !prev[loc],
    }));
  };

  // Filter homestays based on selected location
  const filteredHomestays =
    selectedLocation === "All"
      ? homestays
      : homestays.filter((h) => h.location === selectedLocation);

  // Determine how many to display
  const displayedHomestays =
    !showAllMap[selectedLocation] && filteredHomestays.length > 3
      ? filteredHomestays.slice(0, 3)
      : filteredHomestays;

  return (
    <div className="w-full max-w-6xl mx-auto py-8 px-3">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
        Featured Homestays
      </h2>

      {/* Location Filter */}
      <div className="flex justify-center gap-2 sm:gap-4 mb-6 overflow-x-auto px-2">
        {locations.map((loc) => (
          <button
            key={loc}
            onClick={() => handleLocationClick(loc)}
            className={`
              flex-shrink-0 
              px-2 py-1 sm:px-4 sm:py-2 
              rounded-full border 
              text-xs sm:text-sm
              transition-colors duration-200
              ${selectedLocation === loc
                ? "bg-[#005246] text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
              }
            `}
          >
            {loc}
          </button>
        ))}
      </div>

      {/* Show All / Show Less button */}
      {filteredHomestays.length > 3 && (
        <div className="flex justify-center mb-4">
          <button
            onClick={() => toggleShowAll(selectedLocation)}
            className="px-2 py-1 text-xs sm:text-sm sm:px-4 sm:py-2 rounded-full border bg-[#005246] text-white transition-colors duration-200"
          >
            {showAllMap[selectedLocation] ? "Show Less" : "Show All"}
          </button>
        </div>
      )}

      {/* Desktop / Tablet Grid */}
      <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {displayedHomestays.map((homestay) => (
          <div
            key={homestay.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden"
          >
            <img
              src={homestay.image}
              alt={homestay.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{homestay.name}</h3>
              <p className="text-gray-500">{homestay.location}</p>
              <div className="flex items-center mt-2">
                <Star className="w-5 h-5 text-yellow-500 mr-1" />
                <span>{homestay.rating}</span>
              </div>
              <p className="mt-2 font-bold">₹{homestay.price} / night</p>
            </div>
          </div>
        ))}
      </div>
          {/* Mobile Grid */}
<div className="sm:hidden grid grid-cols-2 gap-2 px-1">
  {displayedHomestays.map((homestay) => (
    <div
      key={homestay.id}
      className="w-full bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-200"
    >
      {/* Fixed height image */}
      <img
        src={homestay.image}
        alt={homestay.name}
        className="w-full h-28 object-cover rounded-t-lg"
      />

      {/* Fixed height text area */}
      <div className="p-2 flex flex-col justify-between h-24">
        {/* Homestay name with line clamp */}
        <h3 className="text-[13px] font-semibold line-clamp-2">
          {homestay.name}
        </h3>

        {/* Location */}
        <p className="text-gray-500 text-[11px] mt-1 line-clamp-1">
          {homestay.location}
        </p>

        {/* Rating + Price in one line */}
        <div className="mt-1 flex items-center justify-between">
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-500 mr-1" />
            <span className="text-[11px]">{homestay.rating}</span>
          </div>
          <p className="text-[12px] font-semibold">₹{homestay.price}</p>
        </div>
      </div>
    </div>
  ))}
</div>


    </div>
  );
}
