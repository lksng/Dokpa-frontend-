import React, { useState } from 'react';
import { MapPin, Star, Wifi, Car, Coffee, Mountain, Users, Phone, Mail, Heart } from 'lucide-react';

interface Homestay {
  id: number;
  name: string;
  location: string;
  image: string;
  rating: number;
  reviews: number;
  price: string;
  description: string;
  amenities: string[];
  host: string;
  contact: {
    phone: string;
    email: string;
  };
  featured: boolean;
}

const Homestay: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<string>('all');
  const [favorites, setFavorites] = useState<number[]>([]);

  const locations = [
    { id: 'all', name: 'All Locations', count: 15 },
    { id: 'tawang', name: 'Tawang', count: 6 },
    { id: 'bomdila', name: 'Bomdila', count: 4 },
    { id: 'dirang', name: 'Dirang', count: 5 }
  ];

  const homestays: Homestay[] = [
    {
      id: 1,
      name: "Mountain View Homestay",
      location: "tawang",
      image: "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.8,
      reviews: 124,
      price: "₹2,500",
      description: "Experience authentic Monpa culture with stunning monastery views",
      amenities: ["Wifi", "Parking", "Meals", "Mountain View"],
      host: "Tenzin Norbu",
      contact: {
        phone: "+91 98765 43210",
        email: "tenzin@mountainview.com"
      },
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
      amenities: ["Wifi", "Hot Springs", "Organic Food", "Garden"],
      host: "Karma Lhamo",
      contact: {
        phone: "+91 98765 43211",
        email: "karma@peacefulvalley.com"
      },
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
      amenities: ["Wifi", "Cultural Tours", "Handicrafts", "Library"],
      host: "Lobsang Tashi",
      contact: {
        phone: "+91 98765 43212",
        email: "lobsang@heritage.com"
      },
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
      amenities: ["Wifi", "Meditation Hall", "Organic Meals", "Parking"],
      host: "Pema Dolkar",
      contact: {
        phone: "+91 98765 43213",
        email: "pema@monasteryview.com"
      },
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
      amenities: ["Wifi", "Farm Tours", "Fresh Fruits", "Bonfire"],
      host: "Dorje Khandu",
      contact: {
        phone: "+91 98765 43214",
        email: "dorje@appleorchard.com"
      },
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
      amenities: ["Wifi", "Valley View", "Local Cuisine", "Trekking"],
      host: "Tsering Yangchen",
      contact: {
        phone: "+91 98765 43215",
        email: "tsering@cloudnine.com"
      },
      featured: true
    }
  ];

  const getAmenityIcon = (amenity: string) => {
    switch (amenity.toLowerCase()) {
      case 'wifi': return <Wifi className="w-4 h-4" />;
      case 'parking': case 'car': return <Car className="w-4 h-4" />;
      case 'meals': case 'organic food': case 'local cuisine': case 'organic meals': return <Coffee className="w-4 h-4" />;
      case 'mountain view': case 'valley view': return <Mountain className="w-4 h-4" />;
      default: return <Users className="w-4 h-4" />;
    }
  };

  const filteredHomestays = selectedLocation === 'all' 
    ? homestays 
    : homestays.filter(homestay => homestay.location === selectedLocation);

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(fav => fav !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="w-full bg-gradient-to-br from-gray-50 to-white py-16 sm:py-20 lg:py-24">
      <div className="w-full max-w-[1280px] xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        
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
                onClick={() => setSelectedLocation(location.id)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedLocation === location.id
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

        {/* Homestays List (horizontal scroll on mobile) */}
        <div className="flex gap-6 sm:gap-8 overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible pb-4">
          {filteredHomestays.map((homestay) => (
            <div
              key={homestay.id}
              className="min-w-[85%] sm:min-w-0 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={homestay.image}
                  alt={homestay.name}
                  className="w-full h-48 sm:h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Featured Badge */}
                {homestay.featured && (
                  <div className="absolute top-4 left-4 bg-[#005246] text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Featured
                  </div>
                )}

                {/* Favorite Button */}
                <button
                  onClick={() => toggleFavorite(homestay.id)}
                  className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-all duration-300"
                >
                  <Heart 
                    className={`w-5 h-5 ${
                      favorites.includes(homestay.id) 
                        ? 'fill-red-500 text-red-500' 
                        : 'text-gray-600'
                    }`} 
                  />
                </button>

                {/* Location Badge */}
                <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {locations.find(loc => loc.id === homestay.location)?.name}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                {/* Header */}
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

                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold text-gray-900">{homestay.rating}</span>
                  </div>
                  <span className="text-sm text-gray-500">({homestay.reviews} reviews)</span>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {homestay.description}
                </p>

                {/* Amenities */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {homestay.amenities.slice(0, 4).map((amenity, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-1 bg-gray-100 rounded-full px-3 py-1 text-xs text-gray-700"
                    >
                      {getAmenityIcon(amenity)}
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>

                {/* Host Info */}
                <div className="border-t pt-4 mb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-900">Hosted by {homestay.host}</p>
                      <div className="flex items-center gap-3 mt-1">
                        <a 
                          href={`tel:${homestay.contact.phone}`}
                          className="flex items-center gap-1 text-xs text-[#005246] hover:underline"
                        >
                          <Phone className="w-3 h-3" />
                          Call
                        </a>
                        <a 
                          href={`mailto:${homestay.contact.email}`}
                          className="flex items-center gap-1 text-xs text-[#005246] hover:underline"
                        >
                          <Mail className="w-3 h-3" />
                          Email
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Book Button */}
                <button className="w-full bg-[#005246] text-white font-semibold py-3 rounded-xl hover:bg-[#00735f] transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-white text-[#005246] border-2 border-[#005246] font-semibold px-8 py-3 rounded-full hover:bg-[#005246] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg">
            Load More Homestays
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homestay;
