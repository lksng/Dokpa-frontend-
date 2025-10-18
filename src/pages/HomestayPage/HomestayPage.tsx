import React, { useState ,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Star, Heart } from 'lucide-react';
import { useFavoritesStore, useFilterStore } from '../../store';

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

const HomestayPage: React.FC = () => {
  const navigate = useNavigate();
  const { toggleFavorite, isFavorite } = useFavoritesStore();
  const { homestayLocation, setHomestayLocation } = useFilterStore();
     useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

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
    {
      id: 7,
      name: "Golden Peak Homestay",
      location: "tawang",
      image: "https://images.pexels.com/photos/1125256/pexels-photo-1125256.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.9,
      reviews: 132,
      price: "₹3,000",
      description: "Stay close to nature with views of snow-capped Tawang peaks.",
      host: "Lhakpa Tsering",
      featured: true,
    },
    {
      id: 8,
      name: "Apple Blossom Stay",
      location: "dirang",
      image: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.5,
      reviews: 88,
      price: "₹2,000",
      description: "Surrounded by apple farms with a touch of rustic charm.",
      host: "Norbu Choden",
      featured: false,
    },
    {
      id: 9,
      name: "Serene Hill Lodge",
      location: "bomdila",
      image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.6,
      reviews: 95,
      price: "₹2,300",
      description: "Warm hospitality and breathtaking hill views.",
      host: "Karma Phuntsok",
      featured: false,
    },
    {
      id: 10,
      name: "Snowline Homestay",
      location: "tawang",
      image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.8,
      reviews: 121,
      price: "₹2,700",
      description: "Perfect for adventure lovers seeking mountain bliss.",
      host: "Dorjee Wangmo",
      featured: true,
    },
    {
      id: 11,
      name: "Blue Pine Retreat",
      location: "dirang",
      image: "https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.7,
      reviews: 109,
      price: "₹2,400",
      description: "A calm retreat surrounded by lush pine forests.",
      host: "Tashi Norbu",
      featured: false,
    },
    {
      id: 12,
      name: "Monpa Heritage Lodge",
      location: "bomdila",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.9,
      reviews: 143,
      price: "₹3,100",
      description: "Traditional architecture meets modern comfort.",
      host: "Sonam Tsering",
      featured: true,
    },
    {
      id: 13,
      name: "Cloud Haven Homestay",
      location: "tawang",
      image: "https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.6,
      reviews: 87,
      price: "₹2,300",
      description: "Stay above the clouds in a peaceful, scenic escape.",
      host: "Pema Dolkar",
      featured: false,
    },
    {
      id: 14,
      name: "Hillside Aroma Stay",
      location: "dirang",
      image: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.8,
      reviews: 118,
      price: "₹2,500",
      description: "Fresh air, green hills, and local organic meals.",
      host: "Sonam Dolma",
      featured: true,
    },
    {
      id: 15,
      name: "Sunrise Homestay",
      location: "bomdila",
      image: "https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.7,
      reviews: 96,
      price: "₹2,200",
      description: "Wake up to beautiful sunrise views and warm tea.",
      host: "Karma Dema",
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
    <div className="w-full py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Section — Title & Filters */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-10 border-b pb-6">
          <div className="mb-6 sm:mb-0">
            <h1 className="text-3xl sm:text-5xl font-bold text-gray-900">
              Find Your <span className="text-[#005246]">Perfect Stay</span>
            </h1>
            <p className="text-gray-600 text-base sm:text-lg mt-2">
              Discover cozy, authentic Monpa homestays across Tawang, Bomdila, and Dirang.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center sm:justify-end gap-2 sm:gap-3">
            {locations.map((loc) => (
              <button
                key={loc.id}
                onClick={() => setHomestayLocation(loc.id)}
                className={`px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base font-medium transition-all ${
                  homestayLocation === loc.id
                    ? 'bg-[#005246] text-white shadow-md scale-105'
                    : 'bg-white text-gray-700 border hover:bg-gray-100'
                }`}
              >
                {loc.name}
                <span className="ml-1 text-xs opacity-75">({loc.count})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Homestay Grid */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredHomestays.map((homestay) => (
            <div
              key={homestay.id}
              onClick={() => handleHomestayClick(homestay.id)}
              className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={homestay.image}
                  alt={homestay.name}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {homestay.featured && (
                  <div className="absolute top-3 left-3 bg-[#005246] text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Featured
                  </div>
                )}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite('homestays', homestay.id);
                  }}
                  className="absolute top-3 right-3 bg-white/90 rounded-full p-2 hover:bg-white transition"
                >
                  <Heart
                    className={`w-5 h-5 ${
                      isFavorite('homestays', homestay.id)
                        ? 'fill-red-500 text-red-500'
                        : 'text-gray-700'
                    }`}
                  />
                </button>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#005246]">
                    {homestay.name}
                  </h3>
                  <div className="text-right">
                    <div className="text-lg font-semibold text-[#005246]">{homestay.price}</div>
                    <div className="text-xs text-gray-500">per night</div>
                  </div>
                </div>

                <div className="flex items-center gap-1 mb-2">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-semibold text-gray-900">{homestay.rating}</span>
                  <span className="text-xs text-gray-500">({homestay.reviews})</span>
                </div>

                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{homestay.description}</p>
                <p className="text-sm font-medium text-gray-800 mb-3">
                  <MapPin className="inline w-4 h-4 text-[#005246] mr-1" />
                  {homestay.location.charAt(0).toUpperCase() + homestay.location.slice(1)} • Hosted by {homestay.host}
                </p>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleHomestayClick(homestay.id);
                  }}
                  className="w-full bg-[#005246] text-white font-semibold py-2.5 rounded-lg hover:bg-[#00735f] transition-all duration-300"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default HomestayPage;
