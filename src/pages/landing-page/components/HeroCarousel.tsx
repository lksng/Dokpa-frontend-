import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, MapPin, Star } from 'lucide-react';

interface CarouselItem {
  id: number;
  title: string;
  description: string;
  location: string;
  rating: number;
  image: string;
  price: string;
  duration: string;
}

const HeroCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const carouselItems: CarouselItem[] = [
    {
      id: 1,
      title: "Tawang Monastery Experience",
      description: "Discover the largest monastery in India with breathtaking mountain views and rich Buddhist heritage.",
      location: "Tawang, Arunachal Pradesh",
      rating: 4.9,
      image: "https://images.pexels.com/photos/3573394/pexels-photo-3573394.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: "₹4,500",
      duration: "3 Days"
    },
    {
      id: 2,
      title: "Bumla Pass Adventure",
      description: "Experience the Indo-China border with stunning landscapes and historical significance.",
      location: "Bumla Pass, Arunachal Pradesh",
      rating: 4.8,
      image: "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: "₹6,000",
      duration: "2 Days"
    },
    {
      id: 3,
      title: "Sela Pass Journey",
      description: "Navigate through the high-altitude pass with pristine lakes and snow-capped peaks.",
      location: "Sela Pass, Arunachal Pradesh",
      rating: 4.7,
      image: "https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: "₹3,800",
      duration: "1 Day"
    },
    {
      id: 4,
      title: "Madhuri Lake Serenity",
      description: "Visit the enchanting high-altitude lake surrounded by snow-capped mountains.",
      location: "Madhuri Lake, Arunachal Pradesh",
      rating: 4.6,
      image: "https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=800",
      price: "₹5,200",
      duration: "4 Days"
    }
  ];

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, carouselItems.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => prev === 0 ? carouselItems.length - 1 : prev - 1);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
  };

  const currentItem = carouselItems[currentIndex];

  return (
    <div className="relative w-full h-full">
      {/* Main Carousel Container */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[400px] sm:h-[500px] lg:h-[600px]">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src={currentItem.image}
            alt={currentItem.title}
            className="w-full h-full object-cover transition-all duration-1000 ease-in-out transform hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#005246]/30 to-transparent"></div>
        </div>

        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-12 text-white">
          <div className="max-w-2xl">
            {/* Location Badge */}
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-sm flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>{currentItem.location}</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-sm flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span>{currentItem.rating}</span>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              {currentItem.title}
            </h2>

            {/* Description */}
            <p className="text-lg sm:text-xl mb-6 opacity-90 leading-relaxed">
              {currentItem.description}
            </p>

            {/* Price and Duration */}
            <div className="flex items-center gap-6 mb-6">
              <div className="text-xl sm:text-2xl font-bold">
                {currentItem.price}
                <span className="text-sm font-normal opacity-80"> / person</span>
              </div>
              <div className="text-lg">
                <span className="opacity-80">Duration: </span>
                <span className="font-semibold">{currentItem.duration}</span>
              </div>
            </div>

            {/* CTA Button */}
            <button className="bg-[#005246] hover:bg-[#007a60] text-white px-8 py-3 rounded-full font-semibold text-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg flex items-center gap-2">
              <Play className="w-5 h-5" />
              Explore Now
            </button>
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200 transform hover:scale-110"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200 transform hover:scale-110"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Play/Pause Button */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 rounded-full transition-all duration-200"
        >
          {isPlaying ? (
            <div className="w-4 h-4 flex gap-1">
              <div className="w-1.5 h-4 bg-white rounded"></div>
              <div className="w-1.5 h-4 bg-white rounded"></div>
            </div>
          ) : (
            <Play className="w-4 h-4" />
          )}
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-3 mt-6">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentIndex
                ? 'bg-[#005246] scale-125'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>

      {/* Mini Preview Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-6">
        {carouselItems.map((item, index) => (
          <button
            key={item.id}
            onClick={() => goToSlide(index)}
            className={`group relative rounded-xl overflow-hidden transition-all duration-200 transform hover:scale-105 ${
              index === currentIndex ? 'ring-3 ring-[#005246] ring-opacity-50' : ''
            }`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-16 sm:h-20 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-1 left-1 right-1">
              <p className="text-white text-xs font-medium truncate">
                {item.title}
              </p>
              <p className="text-white/80 text-xs">{item.price}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;