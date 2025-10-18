import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Star, Heart } from 'lucide-react';
import { useFavoritesStore, useFilterStore } from '../../../store';

interface HomestayType {
  id: number;
  name: string;
  location: string;
  image: string;
  rating: number;
  reviews: number;
  price: string;
  description: string;
  host: string;
  featured: boolean;
}

const Homestay: React.FC = () => {
  const navigate = useNavigate();

  const { toggleFavorite, isFavorite } = useFavoritesStore();
  const { homestayLocation, setHomestayLocation } = useFilterStore();

  const [visibleCount, setVisibleCount] = useState(3);

  const locations = [
    { id: 'all', name: 'All Locations', count: 15 },
    { id: 'tawang', name: 'Tawang', count: 6 },
    { id: 'bomdila', name: 'Bomdila', count: 4 },
    { id: 'dirang', name: 'Dirang', count: 5 },
  ];

const homestays: HomestayType[] = [
  {
    id: 1,
    name: "Choedar Homestay",
    location: "tawang",
    image: "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: 4.8,
    reviews: 124,
    price: "₹2,500",
    description: "Experience authentic Monpa culture with stunning monastery views.",
    host: "Lobsang Choider",
    featured: true,
  },
  {
    id: 2,
    name: "Peaceful Valley Stay",
    location: "dirang",
    image: "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: 4.7,
    reviews: 89,
    price: "₹2,000",
    description: "Cozy homestay surrounded by apple orchards and hot springs.",
    host: "Karma Lhamo",
    featured: false,
  },
  {
    id: 3,
    name: "Himalayan Heritage Home",
    location: "bomdila",
    image: "https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: 4.9,
    reviews: 156,
    price: "₹2,800",
    description: "Traditional architecture with modern comforts and craft workshops.",
    host: "Lobsang Tashi",
    featured: true,
  },
  {
    id: 4,
    name: "Mountain View Cottage",
    location: "tawang",
    image: "https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: 4.6,
    reviews: 102,
    price: "₹2,200",
    description: "Peaceful stay with panoramic mountain views and home-cooked meals.",
    host: "Tsering Dolma",
    featured: false,
  },
  {
    id: 5,
    name: "Riverside Retreat",
    location: "dirang",
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: 4.8,
    reviews: 140,
    price: "₹2,600",
    description: "Relax by the riverside surrounded by pine forests and fresh air.",
    host: "Sonam Wangchu",
    featured: true,
  },
  {
    id: 6,
    name: "Orchid Valley Homestay",
    location: "bomdila",
    image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800",
    rating: 4.7,
    reviews: 75,
    price: "₹2,100",
    description: "Beautiful valley views, orchid gardens, and local Monpa cuisine.",
    host: "Pema Norbu",
    featured: false,
  },
];


  const filteredHomestays =
    homestayLocation === 'all'
      ? homestays
      : homestays.filter((h) => h.location === homestayLocation);

  const handleHomestayClick = (id: number) => {
    navigate(`/homestay/${id}`);
  };

  return (
    <div className="w-full py-10 sm:py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-3">
            Authentic <span className="text-[#005246]">Homestays</span>
          </h2>
          <p className="text-sm sm:text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Stay with local families and experience the warmth of Arunachal hospitality.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {locations.map((loc) => (
              <button
                key={loc.id}
                onClick={() => setHomestayLocation(loc.id)}
                className={`px-3 sm:px-5 py-1.5 sm:py-2 rounded-full text-sm sm:text-base font-medium transition-all ${
                  homestayLocation === loc.id
                    ? 'bg-[#005246] text-white shadow-md scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {loc.name}
                <span className="ml-1 text-xs opacity-75">({loc.count})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Homestay Cards */}
        <div className="flex gap-4 sm:gap-6 overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible pb-4">
          {filteredHomestays.slice(0, visibleCount).map((homestay) => (
            <div
              key={homestay.id}
              onClick={() => handleHomestayClick(homestay.id)}
              className="min-w-[80%] sm:min-w-0 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-1 cursor-pointer"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={homestay.image}
                  alt={homestay.name}
                  className="w-full h-40 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {homestay.featured && (
                  <div className="absolute top-3 left-3 bg-[#005246] text-white px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-semibold">
                    Featured
                  </div>
                )}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite('homestays', homestay.id);
                  }}
                  className="absolute top-3 right-3 bg-white/90 rounded-full p-1.5 sm:p-2 hover:bg-white transition"
                >
                  <Heart
                    className={`w-4 h-4 sm:w-5 sm:h-5 ${
                      isFavorite('homestays', homestay.id)
                        ? 'fill-red-500 text-red-500'
                        : 'text-gray-600'
                    }`}
                  />
                </button>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6">
                <div className="flex justify-between items-start mb-2 sm:mb-3">
                  <h3 className="text-base sm:text-xl font-bold text-gray-900 group-hover:text-[#005246] transition-colors">
                    {homestay.name}
                  </h3>
                  <div className="text-right">
                    <div className="text-base sm:text-lg font-bold text-[#005246]">
                      {homestay.price}
                    </div>
                    <div className="text-[10px] sm:text-xs text-gray-500">per night</div>
                  </div>
                </div>

                <div className="flex items-center gap-1 sm:gap-2 mb-2">
                  <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm sm:text-base font-semibold text-gray-900">
                    {homestay.rating}
                  </span>
                  <span className="text-xs sm:text-sm text-gray-500">
                    ({homestay.reviews})
                  </span>
                </div>

                <p className="text-gray-600 text-xs sm:text-sm mb-3 leading-relaxed">
                  {homestay.description}
                </p>

                <p className="text-xs sm:text-sm font-medium text-gray-800 mb-3">
                  Hosted by {homestay.host}
                </p>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleHomestayClick(homestay.id);
                  }}
                  className="w-full bg-[#005246] text-white text-sm sm:text-base font-semibold py-2.5 sm:py-3 rounded-lg hover:bg-[#00735f] transition-all duration-300 hover:scale-105"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More / Show Less */}
        {filteredHomestays.length > 3 && (
          <div className="text-center mt-8 sm:mt-12">
            <button
              onClick={() =>
                setVisibleCount(visibleCount === 3 ? filteredHomestays.length : 3)
              }
              className="bg-white text-[#005246] border-2 border-[#005246] text-sm sm:text-base font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-full hover:bg-[#005246] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
            >
              {visibleCount === 3 ? 'Load More Homestays' : 'Show Less'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Homestay;
