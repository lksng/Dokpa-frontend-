import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Star, Clock } from 'lucide-react';

interface Destination {
  id: number;
  name: string;
  location: string;
  image: string;
  rating: number;
  duration: string;
  price: string;
  description: string;
  highlights: string[];
}

const DestinationsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const destinations: Destination[] = [
    {
      id: 1,
      name: "Tawang Monastery",
      location: "Tawang, Arunachal Pradesh",
      image: "src/assets/twgmonastery.jpg",
      rating: 4.8,
      duration: "3-4 days",
      price: "₹8,000",
      description: "Experience the spiritual serenity of one of India's largest monasteries",
      highlights: ["Buddhist Culture", "Mountain Views", "Ancient Architecture"]
    },
    {
      id: 2,
      name: "Sela Pass",
      location: "Tawang, Arunachal Pradesh",
      image: "https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.9,
      duration: "2-3 days",
      price: "₹6,500",
      description: "Journey through breathtaking high-altitude mountain passes",
      highlights: ["Snow Peaks", "Alpine Lakes", "Adventure"]
    },
    {
      id: 3,
      name: "Bumla Pass",
      location: "Tawang, Arunachal Pradesh",
      image: "src/assets/bomlaimg.jpg",
      rating: 4.7,
      duration: "1-2 days",
      price: "₹4,500",
      description: "Visit the historic Indo-China border with stunning valley views",
      highlights: ["Border Tourism", "Historical Significance", "Scenic Beauty"]
    },
    {
      id: 4,
      name: "Madhuri Lake",
      location: "Tawang, Arunachal Pradesh",
      image: "src/assets/madurilk.jpg",
      rating: 4.6,
      duration: "2-3 days",
      price: "₹7,200",
      description: "Crystal clear alpine lake surrounded by snow-capped mountains",
      highlights: ["Pristine Nature", "Photography", "Tranquility"]
    },
    {
      id: 5,
      name: "Dirang Valley",
      location: "West Kameng, Arunachal Pradesh",
      image: "src/assets/mandala.jpg",
      rating: 4.5,
      duration: "3-4 days",
      price: "₹9,000",
      description: "Explore traditional villages and hot springs in scenic valleys",
      highlights: ["Hot Springs", "Local Culture", "Apple Orchards"]
    },
    {
      id: 6,
      name: "Jung Waterfall",
      location: "Tawang, Arunachal Pradesh",
      image: "src/assets/jungwaterfall1.jpg",
      rating: 4.5,
      duration: "1 day",
      price: "₹1,500",
      description: "Visit the breathtaking Jung Waterfall, surrounded by lush forests and serene landscapes. Perfect for nature lovers and photography enthusiasts.",
      highlights: ["Scenic Waterfall", "Trekking Trails", "Nature Photography"]
    },
    {
      id: 7,
      name: "Mago",
      location: "Tawang, Arunachal Pradesh",
      image: "src/assets/mago.jpg",
      rating: 4.5,
      duration: "1 day",
      price: "₹1,500",
      description: "Explore the serene Mago area, home to the historic Mago Monastery and surrounded by pristine rivers and lush greenery. Ideal for spiritual seekers and nature lovers alike.",
      highlights: ["Mago Monastery", "Riverside Views", "Nature Walks"]
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % destinations.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, destinations.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + destinations.length) % destinations.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % destinations.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div className="w-full bg-gradient-to-br from-gray-50 to-white py-12 sm:py-16 lg:py-20">
      <div className="w-full max-w-[1280px] xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Top <span className="text-[#005246]">Destinations</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the most breathtaking places in Arunachal Pradesh
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {destinations.map((destination) => (
                <Slide key={destination.id} destination={destination} />
              ))}
            </div>
          </div>

          {/* Navigation Arrows (minimal style) */}
          <button
            onClick={goToPrevious}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-white hover:text-[#00b894] transition-transform duration-300 hover:scale-125 z-10"
            aria-label="Previous destination"
          >
            <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={2.5} />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white hover:text-[#00b894] transition-transform duration-300 hover:scale-125 z-10"
            aria-label="Next destination"
          >
            <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={2.5} />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 flex gap-2">
            {destinations.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-white scale-125'
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Auto-play Indicator */}
          <div className="absolute top-4 sm:top-6 right-4 sm:right-6">
            <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-green-400' : 'bg-gray-400'} animate-pulse`} />
          </div>
        </div>

        {/* Thumbnail Navigation */}
        <div className="mt-6 sm:mt-8 flex gap-3 sm:gap-4 overflow-x-auto pb-2 scrollbar-hide">
          {destinations.map((destination, index) => (
            <button
              key={destination.id}
              onClick={() => goToSlide(index)}
              className={`flex-shrink-0 relative rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300 ${
                index === currentIndex
                  ? 'ring-4 ring-[#005246] scale-105'
                  : 'hover:scale-105 opacity-70 hover:opacity-100'
              }`}
            >
              <img
                src={destination.image}
                alt={destination.name}
                className="w-20 h-16 sm:w-24 sm:h-20 lg:w-28 lg:h-24 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-1 left-1 right-1">
                <p className="text-white text-xs sm:text-sm font-medium truncate">
                  {destination.name}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// Separate Slide component to handle description toggle
const Slide: React.FC<{ destination: Destination }> = ({ destination }) => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div className="w-full flex-shrink-0 relative">
      <div className="relative h-[400px] sm:h-[500px] lg:h-[600px]">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      </div>

      {/* Content Overlay */}
      <div 
        className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-12 text-white"
        onClick={() => {
          if (window.innerWidth < 640) setShowDescription(!showDescription);
        }}
      >
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-2 text-xs sm:text-sm opacity-90">
            <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>{destination.location}</span>
          </div>

          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3">
            {destination.name}
          </h3>

          <p className={`text-sm sm:text-base md:text-lg mb-3 sm:mb-4 leading-relaxed opacity-90 ${showDescription ? 'block' : 'hidden sm:block'}`}>
            {destination.description}
          </p>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
            <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm rounded-full px-2 sm:px-3 py-1 text-xs sm:text-sm">
              <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
              <span className="font-semibold">{destination.rating}</span>
            </div>

            <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm rounded-full px-2 sm:px-3 py-1 text-xs sm:text-sm">
              <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>{destination.duration}</span>
            </div>

            <div className="bg-[#005246] rounded-full px-3 sm:px-4 py-1 text-xs sm:text-sm font-bold">
              {destination.price}
            </div>
          </div>

          <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-6">
            {destination.highlights.map((highlight, index) => (
              <span
                key={index}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-2 py-0.5 text-xs sm:text-sm"
              >
                {highlight}
              </span>
            ))}
          </div>

          <button className="bg-white text-[#005246] font-bold px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base">
            Explore Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default DestinationsCarousel;
