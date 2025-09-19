import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const slides = [
  { src: "public/beautiful-scenery-high-rocky-mountains-covered-with-snow-breathtaking-sky.jpg", alt: "Scene 1" },
  { src: "public/beautiful-scenery-summit-mount-everest-covered-with-snow-white-clouds.jpg", alt: "Scene 2" },
  { src: "public/images2.jpg", alt: "Scene 3" },
  
  { src: "public/winter-alpen-lake.jpg", alt: "Scene 4" },{ src: "public/winter-alpen-lake.jpg", alt: "Scene 4" },{ src: "public/winter-alpen-lake.jpg", alt: "Scene 4" },{ src: "public/winter-alpen-lake.jpg", alt: "Scene 4" },
  // add more if needed
];

// Custom arrow components
const CustomLeftArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    aria-label="Previous"
    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow hover:bg-gray-100 transition z-10"
  >‹</button>
);

const CustomRightArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    aria-label="Next"
    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow hover:bg-gray-100 transition z-10"
  >›</button>
);

export default function HeroSection() {
  const [active, setActive] = useState(0);
  const handleThumbnailClick = (index) => setActive(index);

  const responsive = {
    thumbnails: {
      breakpoint: { max: 3000, min: 0 },
      items: 4,
      slidesToSlide: 4,
    },
  };

  return (
  <section className="relative bg-gradient-to-b from-[#001D19] to-[#005246] text-white pt-30 pb-3 px-6 lg:px-24">

      <div className="container mx-auto flex flex-col lg:flex-row items-start gap-8">
        {/* Left Side Content */}
        <div className="w-full lg:w-1/2 max-w-lg flex flex-col space-y-6">
       <h1 className="font-heading text-4xl lg:text-5xl font-bold text-[#FFD700] leading-tight">
  Culture. Comfort. Connection — all in one place.
</h1>
          <p className="font-body text-lg text-[#FFF0CA]">
            Book unique and memorable travel experiences guided by locals.
          </p>
          {/* search */}
          <div className="flex">
            <input
              type="text"
              placeholder="Searching for ? Homestays , Hotels , resturants "
              className="font-body flex-grow px-4 py-3 rounded-l-full border border-gray-300 focus:outline-none"
            />
            <button className="px-6 py-3 bg-[#B5A26D] hover:bg-yellow-500 text-gray-800 rounded-r-full transition font-body font-semibold">
              Search
            </button>
          </div>
          
        </div>

        {/* Right Side: Main Image + Thumbnails */}
        <div className="w-full lg:w-1/2 space-y-4 relative">
          <img
            src={slides[active].src}
            alt={slides[active].alt}
            className="w-full h-[400px] object-cover rounded-lg shadow-lg"
          />
          <Carousel
            responsive={responsive}
            ssr
            keyBoardControl
            arrows={true}
            customLeftArrow={<CustomLeftArrow />}
            customRightArrow={<CustomRightArrow />}
            containerClass="thumbnail-carousel relative"
            itemClass="px-1"
          >
            {slides.map((slide, idx) => (
              <img
                key={idx}
                src={slide.src}
                alt={slide.alt}
                className={`h-24 w-full object-cover rounded cursor-pointer ${
                  idx === active ? "ring-2 ring-yellow-400" : ""
                }`}
                onClick={() => handleThumbnailClick(idx)}
              />
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
