import React, { useState } from 'react';
import { Car, Users, Star, MapPin, Calendar, Search, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Vehicle {
  id: number;
  name: string;
  type: string;
  capacity: number;
  image: string;
  pricePerDay: number;
  rating: number;
  features: string[];
  available: boolean;
  fuelType: string;
  transmission: string;
}

const Vehicles: React.FC = () => {
  const [selectedType, setSelectedType] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('popular');
  const [selectedDates, setSelectedDates] = useState('');

  const vehicles: Vehicle[] = [
    {
      id: 1,
      name: "Mahindra Scorpio",
      type: "SUV",
      capacity: 7,
      image: "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=800",
      pricePerDay: 3500,
      rating: 4.5,
      features: ["4WD", "AC", "GPS", "First Aid Kit"],
      available: true,
      fuelType: "Diesel",
      transmission: "Manual"
    },
    {
      id: 2,
      name: "Toyota Innova Crysta",
      type: "MPV",
      capacity: 8,
      image: "https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&w=800",
      pricePerDay: 4200,
      rating: 4.7,
      features: ["AC", "GPS", "Comfortable Seats", "Entertainment System"],
      available: true,
      fuelType: "Diesel",
      transmission: "Automatic"
    },
    {
      id: 3,
      name: "Tata Safari",
      type: "SUV",
      capacity: 7,
      image: "https://images.pexels.com/photos/1719647/pexels-photo-1719647.jpeg?auto=compress&cs=tinysrgb&w=800",
      pricePerDay: 3200,
      rating: 4.4,
      features: ["4WD", "AC", "Music System", "Power Steering"],
      available: true,
      fuelType: "Diesel",
      transmission: "Manual"
    },
    {
      id: 4,
      name: "Force Tempo Traveller",
      type: "Tempo Traveller",
      capacity: 12,
      image: "https://images.pexels.com/photos/385998/pexels-photo-385998.jpeg?auto=compress&cs=tinysrgb&w=800",
      pricePerDay: 5500,
      rating: 4.3,
      features: ["AC", "Spacious", "Luggage Space", "Comfortable Seating"],
      available: true,
      fuelType: "Diesel",
      transmission: "Manual"
    },
    {
      id: 5,
      name: "Maruti Swift Dzire",
      type: "Sedan",
      capacity: 4,
      image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800",
      pricePerDay: 2200,
      rating: 4.2,
      features: ["AC", "GPS", "Fuel Efficient", "Compact"],
      available: true,
      fuelType: "Petrol",
      transmission: "Manual"
    },
    {
      id: 6,
      name: "Mahindra Bolero",
      type: "SUV",
      capacity: 8,
      image: "https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg?auto=compress&cs=tinysrgb&w=800",
      pricePerDay: 3000,
      rating: 4.1,
      features: ["4WD", "Rugged", "High Ground Clearance", "AC"],
      available: false,
      fuelType: "Diesel",
      transmission: "Manual"
    }
  ];

  const vehicleTypes = ['All', 'SUV', 'MPV', 'Sedan', 'Tempo Traveller'];

  const filteredVehicles = vehicles.filter(vehicle => {
    const typeMatch = selectedType === 'All' || vehicle.type === selectedType;
    const searchMatch = vehicle.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       vehicle.type.toLowerCase().includes(searchTerm.toLowerCase());
    return typeMatch && searchMatch;
  });

  const sortedVehicles = [...filteredVehicles].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.pricePerDay - b.pricePerDay;
      case 'price-high':
        return b.pricePerDay - a.pricePerDay;
      case 'rating':
        return b.rating - a.rating;
      case 'capacity':
        return b.capacity - a.capacity;
      default:
        return b.rating - a.rating; // popular
    }
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'SUV':
        return '🚙';
      case 'MPV':
        return '🚐';
      case 'Sedan':
        return '🚗';
      case 'Tempo Traveller':
        return '🚌';
      default:
        return '🚗';
    }
  };

  return (
    <div className="w-full max-w-[1280px] xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-8">
      
      {/* Home Button */}
      <div className="mb-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2 bg-[#005246] text-white rounded-full shadow-md hover:bg-[#004536] transition-colors"
        >
          <Home className="w-5 h-5" />
          <span className="font-medium">Home</span>
        </Link>
      </div>

      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Vehicle <span className="text-[#005246]">Rentals</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Choose from our fleet of well-maintained vehicles for your Himalayan adventure
        </p>
      </div>

      {/* Filters and Search */}
      <div className="mb-8 space-y-6">
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search vehicles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#005246]"
              />
            </div>

            {/* Date Selection */}
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="date"
                value={selectedDates}
                onChange={(e) => setSelectedDates(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#005246]"
              />
            </div>

            {/* Vehicle Type Filter */}
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#005246]"
            >
              {vehicleTypes.map((type) => (
                <option key={type} value={type}>
                  {type === 'All' ? 'All Types' : type}
                </option>
              ))}
            </select>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#005246]"
            >
              <option value="popular">Most Popular</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="capacity">Capacity</option>
            </select>
          </div>
        </div>
      </div>

      {/* Vehicles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sortedVehicles.map((vehicle) => (
          <div key={vehicle.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
            <div className="relative overflow-hidden">
              <img
                src={vehicle.image}
                alt={vehicle.name}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-semibold">
                  {getTypeIcon(vehicle.type)} {vehicle.type}
                </span>
                {!vehicle.available && (
                  <span className="bg-red-500 text-white rounded-full px-3 py-1 text-sm font-semibold">
                    Not Available
                  </span>
                )}
              </div>
              <div className="absolute top-4 right-4">
                <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span className="text-sm font-semibold">{vehicle.rating}</span>
                </div>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#005246] transition-colors">
                {vehicle.name}
              </h3>

              <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  {vehicle.capacity} seats
                </div>
                <div className="flex items-center">
                  <Car className="w-4 h-4 mr-1" />
                  {vehicle.transmission}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {vehicle.features.slice(0, 3).map((feature, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                  >
                    {feature}
                  </span>
                ))}
                {vehicle.features.length > 3 && (
                  <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                    +{vehicle.features.length - 3} more
                  </span>
                )}
              </div>

              <div className="border-t pt-4">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold text-[#005246]">₹{vehicle.pricePerDay.toLocaleString()}</span>
                    <span className="text-gray-600 text-sm ml-1">per day</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    Fuel: {vehicle.fuelType}
                  </div>
                </div>

                <button 
                  className={`w-full py-3 rounded-full font-semibold transition-colors ${
                    vehicle.available 
                      ? 'bg-[#005246] text-white hover:bg-[#004536]' 
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                  disabled={!vehicle.available}
                >
                  {vehicle.available ? 'Book Now' : 'Currently Unavailable'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {sortedVehicles.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <Car className="w-16 h-16 mx-auto" />
          </div>
          <h3 className="text-xl font-semibold text-gray-600 mb-2">No vehicles found</h3>
          <p className="text-gray-500">Try adjusting your search criteria</p>
        </div>
      )}

      {/* Info Section */}
      <div className="mt-16 bg-gradient-to-r from-[#005246] to-[#007a60] rounded-2xl p-8 text-white">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Why Choose Our Vehicles?</h2>
          <p className="text-lg opacity-90">Safe, reliable, and perfect for Himalayan terrain</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Car className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Well Maintained</h3>
            <p className="opacity-90">Regular servicing and safety checks for all vehicles</p>
          </div>
          
          <div className="text-center">
            <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Local Expertise</h3>
            <p className="opacity-90">Our drivers know the best routes and hidden gems</p>
          </div>
          
          <div className="text-center">
            <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p className="opacity-90">Round-the-clock assistance throughout your journey</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vehicles;
