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
  
  // Stores
  const { toggleFavorite, isFavorite } = useFavoritesStore();
  const { homestayLocation, setHomestayLocation } = useFilterStore();

  // Show only 3 initially
  const [visibleCount, setVisibleCount] = useState(3);

  const locations = [
    { id: 'all', name: 'All Locations', count: 15 },
    { id: 'tawang', name: 'Tawang', count: 6 },
    { id: 'bomdila', name: 'Bomdila', count: 4 },
    { id: 'dirang', name: 'Dirang', count: 5 }
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
      description: "Experience authentic Monpa culture with stunning monastery views",
      host: "Lobsang Choider",
      featured: true
    },
    {
      id: 2,
      name: "Peaceful Valley Stay",
      location: "dirang",
      image: "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.7,
      reviews: 89,
      price: "₹2,000",
      description: "Cozy homestay surrounded by apple orchards and hot springs",
      host: "Karma Lhamo",
      featured: false
    },
    {
      id: 3,
      name: "Himalayan Heritage Home",
      location: "bomdila",
      image: "https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.9,
      reviews: 156,
      price: "₹2,800",
      description: "Traditional architecture with modern comforts and craft workshops",
      host: "Lobsang Tashi",
      featured: true
    },
    {
      id: 4,
      name: "Monastery View Lodge",
      location: "tawang",
      image: "https://images.pexels.com/photos/1029613/pexels-photo-1029613.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.6,
      reviews: 78,
      price: "₹2,200",
      description: "Wake up to prayer bells and panoramic Himalayan vistas",
      host: "Pema Dolkar",
      featured: false
    },
    {
      id: 5,
      name: "Apple Orchard Retreat",
      location: "dirang",
      image: "https://images.pexels.com/photos/1029618/pexels-photo-1029618.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.5,
      reviews: 92,
      price: "₹1,800",
      description: "Farm-to-table experience in the heart of apple country",
      host: "Dorje Khandu",
      featured: false
    },
    {
      id: 6,
      name: "Cloud Nine Homestay",
      location: "bomdila",
      image: "https://images.pexels.com/photos/1029624/pexels-photo-1029624.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.7,
      reviews: 103,
      price: "₹2,400",
      description: "Elevated stay with clouds at your doorstep and valley views",
      host: "Tsering Yangchen",
      featured: true
    }
  ];

  const filteredHomestays = homestayLocation === 'all' 
    ? homestays 
    : homestays.filter(homestay => homestay.location === homestayLocation);

  const handleHomestayClick = (homestayId: number) => {
    navigate(`/homestay/${homestayId}`);
  };

  return (
    <div className="w-full py-16 sm:py-20 lg:py-24">
      <div className="w-full max-w-7xl lg:max-w-12xl xl:max-w-10xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Authentic <span className="text-[#005246]">Homestays</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Stay with local families and experience the warmth of Arunachal hospitality
          </p>

          {/* Location Filter */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {locations.map((location) => (
              <button
                key={location.id}
                onClick={() => setHomestayLocation(location.id)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 ${
                  homestayLocation === location.id
                    ? 'bg-[#005246] text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md hover:shadow-lg'
                }`}
              >
                {location.name}
                <span className="ml-2 text-xs opacity-75">({location.count})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Homestays List */}
        <div className="flex gap-6 sm:gap-8 overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible pb-4">
          {filteredHomestays.slice(0, visibleCount).map((homestay) => (
            <div
              key={homestay.id}
              onClick={() => handleHomestayClick(homestay.id)}
              className="min-w-[85%] sm:min-w-0 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group hover:-translate-y-2 cursor-pointer"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={homestay.image}
                  alt={homestay.name}
                  className="w-full h-48 sm:h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {homestay.featured && (
                  <div className="absolute top-4 left-4 bg-[#005246] text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Featured
                  </div>
                )}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite('homestays', homestay.id);
                  }}
                  className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-all duration-300"
                >
                  <Heart
                    className={`w-5 h-5 ${
                      isFavorite('homestays', homestay.id)
                        ? 'fill-red-500 text-red-500'
                        : 'text-gray-600'
                    }`}
                  />
                </button>
                <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {locations.find(loc => loc.id === homestay.location)?.name}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-[#005246] transition-colors">
                    {homestay.name}
                  </h3>
                  <div className="text-right">
                    <div className="text-lg sm:text-xl font-bold text-[#005246]">
                      {homestay.price}
                    </div>
                    <div className="text-xs text-gray-500">per night</div>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold text-gray-900">{homestay.rating}</span>
                  <span className="text-sm text-gray-500">({homestay.reviews} reviews)</span>
                </div>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{homestay.description}</p>

                <p className="text-sm font-medium text-gray-800 mb-4">
                  Hosted by {homestay.host}
                </p>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleHomestayClick(homestay.id);
                  }}
                  className="w-full bg-[#005246] text-white font-semibold py-3 rounded-xl hover:bg-[#00735f] transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More / Show Less */}
        {filteredHomestays.length > 3 && (
          <div className="text-center mt-12">
            <button
              onClick={() =>
                setVisibleCount(visibleCount === 3 ? filteredHomestays.length : 3)
              }
              className="bg-white text-[#005246] border-2 border-[#005246] font-semibold px-8 py-3 rounded-full hover:bg-[#005246] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
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
