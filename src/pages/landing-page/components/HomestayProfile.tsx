import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  MapPin, Star, Wifi, Car, Coffee, Mountain, Users, Phone, Mail, 
  ArrowLeft, Calendar, Clock, Home, Bath, Bed, Share2, Heart,
  ChevronLeft, ChevronRight, ThumbsUp, Award, Shield, CheckCircle
} from 'lucide-react';

import { homestays, reviews } from "../../../data/homestays";
import { Homestay, Review } from "../../../types/homestay";

const HomestayProfile: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [homestay, setHomestay] = useState<Homestay | null>(null);
  const [homestayReviews, setHomestayReviews] = useState<Review[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [showAllAmenities, setShowAllAmenities] = useState(false);
  const [showAllReviews, setShowAllReviews] = useState(false);

  useEffect(() => {
    if (id) {
      const foundHomestay = homestays.find(h => h.id === parseInt(id));
      if (foundHomestay) {
        setHomestay(foundHomestay);
        setHomestayReviews(reviews[foundHomestay.id] || []);
      }
    }
  }, [id]);

  const getAmenityIcon = (amenity: string) => {
    switch (amenity.toLowerCase()) {
      case 'free wifi': case 'wifi': return <Wifi className="w-4 h-4" />;
      case 'parking': return <Car className="w-4 h-4" />;
      case 'traditional meals': case 'organic garden': case 'traditional kitchen': return <Coffee className="w-4 h-4" />;
      case 'mountain view': case 'valley view': return <Mountain className="w-4 h-4" />;
      default: return <Users className="w-4 h-4" />;
    }
  };

  const nextImage = () => {
    if (homestay) {
      setCurrentImageIndex((prev) => (prev + 1) % homestay.images.length);
    }
  };

  const prevImage = () => {
    if (homestay) {
      setCurrentImageIndex((prev) => (prev - 1 + homestay.images.length) % homestay.images.length);
    }
  };

  const getLocationDisplayName = (location: string) => {
    const locationMap: { [key: string]: string } = {
      'tawang': 'Tawang',
      'dirang': 'Dirang',
      'bomdila': 'Bomdila'
    };
    return locationMap[location] || location;
  };

  if (!homestay) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#005246] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading homestay details...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-gray-600 hover:text-[#005246] transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="hidden sm:inline">Back to Homestays</span>
            </button>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 text-gray-600 hover:text-[#005246] transition-colors">
                <Share2 className="w-5 h-5" />
                <span className="hidden sm:inline">Share</span>
              </button>
              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className="flex items-center gap-2 text-gray-600 hover:text-red-500 transition-colors"
              >
                <Heart className={`w-5 h-5 ${isFavorite ? 'fill-red-500 text-red-500' : ''}`} />
                <span className="hidden sm:inline">Save</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="relative h-64 sm:h-80 lg:h-96 bg-gray-900 overflow-hidden">
        <img
          src={homestay.images[currentImageIndex]}
          alt={homestay.name}
          className="w-full h-full object-cover"
        />
        
        {/* Navigation Arrows */}
        {homestay.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}

        {/* Image Counter */}
        <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
          {currentImageIndex + 1} / {homestay.images.length}
        </div>

        {/* Featured Badge */}
        {homestay.featured && (
          <div className="absolute top-4 left-4 bg-[#005246] text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
            <Award className="w-4 h-4" />
            Featured
          </div>
        )}
      </div>

      {/* Image Thumbnails */}
      <div className="bg-white px-4 sm:px-6 lg:px-8 py-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {homestay.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden border-2 transition-all ${
                  currentImageIndex === index
                    ? 'border-[#005246] scale-105'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <img
                  src={image}
                  alt={`${homestay.name} ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column - Main Info */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Title and Basic Info */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                <div>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                    {homestay.name}
                  </h1>
                  <div className="flex items-center gap-2 text-gray-600 mb-4">
                    <MapPin className="w-5 h-5" />
                    <span className="text-lg">{getLocationDisplayName(homestay.location)}, Arunachal Pradesh</span>
                  </div>
                  <div className="flex items-center gap-4 flex-wrap">
                    <div className="flex items-center gap-1">
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold text-lg">{homestay.rating}</span>
                      <span className="text-gray-500">({homestay.reviews} reviews)</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl sm:text-4xl font-bold text-[#005246] mb-1">
                    {homestay.price}
                  </div>
                  <div className="text-gray-500">per night</div>
                </div>
              </div>

              {/* Property Details */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                <div className="flex items-center gap-2 text-gray-700">
                  <Users className="w-5 h-5" />
                  <span>{homestay.maxGuests} guests</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Bed className="w-5 h-5" />
                  <span>{homestay.bedrooms} bedrooms</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Bath className="w-5 h-5" />
                  <span>{homestay.bathrooms} bathrooms</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Home className="w-5 h-5" />
                  <span>{homestay.area}</span>
                </div>
              </div>

              <p className="text-gray-600 text-lg leading-relaxed">
                {homestay.description}
              </p>
            </div>

            {/* Detailed Description */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About this place</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                {homestay.detailedDescription}
              </p>
            </div>

            {/* Amenities */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What this place offers</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {(showAllAmenities ? homestay.amenities : homestay.amenities.slice(0, 6)).map((amenity, index) => (
                  <div key={index} className="flex items-center gap-3 text-gray-700">
                    {getAmenityIcon(amenity)}
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
              {homestay.amenities.length > 6 && (
                <button
                  onClick={() => setShowAllAmenities(!showAllAmenities)}
                  className="mt-4 text-[#005246] hover:underline font-medium"
                >
                  {showAllAmenities ? 'Show less' : `Show all ${homestay.amenities.length} amenities`}
                </button>
              )}
            </div>

            {/* Nearby Attractions */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Nearby attractions</h2>
              <div className="space-y-3">
                {homestay.nearbyAttractions.map((attraction, index) => (
                  <div key={index} className="flex items-center gap-3 text-gray-700">
                    <MapPin className="w-4 h-4 text-[#005246]" />
                    <span>{attraction}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  <div className="flex items-center gap-3">
                    <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                    <span>{homestay.rating} · {homestay.reviews} reviews</span>
                  </div>
                </h2>
              </div>

              <div className="space-y-6">
                {(showAllReviews ? homestayReviews : homestayReviews.slice(0, 3)).map((review) => (
                  <div key={review.id} className="border-b border-gray-100 last:border-0 pb-6 last:pb-0">
                    <div className="flex items-start gap-4">
                      <img
                        src={review.guestAvatar}
                        alt={review.guestName}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <h4 className="font-semibold text-gray-900">{review.guestName}</h4>
                            <p className="text-sm text-gray-500">{review.date}</p>
                          </div>
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < review.rating
                                    ? 'fill-yellow-400 text-yellow-400'
                                    : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-700 leading-relaxed mb-3">{review.comment}</p>
                        <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-[#005246] transition-colors">
                          <ThumbsUp className="w-4 h-4" />
                          <span>Helpful ({review.helpful})</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {homestayReviews.length > 3 && (
                <button
                  onClick={() => setShowAllReviews(!showAllReviews)}
                  className="mt-6 bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 rounded-xl font-medium transition-colors"
                >
                  {showAllReviews ? 'Show less' : `Show all ${homestayReviews.length} reviews`}
                </button>
              )}
            </div>

            {/* House Rules */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">House rules</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    Check-in/out
                  </h4>
                  <p className="text-gray-700">Check-in: {homestay.checkIn}</p>
                  <p className="text-gray-700">Check-out: {homestay.checkOut}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    Cancellation
                  </h4>
                  <p className="text-gray-700">{homestay.cancellationPolicy}</p>
                </div>
              </div>
              <div className="mt-6">
                <h4 className="font-semibold text-gray-900 mb-3">Additional rules</h4>
                <div className="space-y-2">
                  {homestay.houseRules.map((rule, index) => (
                    <div key={index} className="flex items-center gap-3 text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span>{rule}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Host Info & Booking */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              
              {/* Booking Card */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-[#005246] mb-2">{homestay.price}</div>
                  <div className="text-gray-500">per night</div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="border border-gray-300 rounded-lg p-3">
                      <div className="text-xs font-medium text-gray-500 mb-1">Check-in</div>
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="w-4 h-4" />
                        <input type="date" className="border-none outline-none bg-transparent" />
                      </div>
                    </div>
                    <div className="border border-gray-300 rounded-lg p-3">
                      <div className="text-xs font-medium text-gray-500 mb-1">Check-out</div>
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="w-4 h-4" />
                        <input type="date" className="border-none outline-none bg-transparent" />
                      </div>
                    </div>
                  </div>
                  <div className="border border-gray-300 rounded-lg p-3">
                    <div className="text-xs font-medium text-gray-500 mb-1">Guests</div>
                    <select className="w-full border-none outline-none bg-transparent">
                      {[...Array(homestay.maxGuests)].map((_, i) => (
                        <option key={i} value={i + 1}>{i + 1} guest{i > 0 ? 's' : ''}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <button className="w-full bg-[#005246] text-white font-semibold py-4 rounded-xl hover:bg-[#00735f] transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg mb-4">
                  Reserve Now
                </button>

                <div className="text-center text-sm text-gray-500">
                  You won't be charged yet
                </div>
              </div>

              {/* Host Info */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Meet your host</h3>
                <div className="flex items-start gap-4">
                  <img
                    src={homestay.host.avatar}
                    alt={homestay.host.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 text-lg">{homestay.host.name}</h4>
                    <p className="text-sm text-gray-500 mb-2">Responds {homestay.host.responseTime}</p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {homestay.host.languages.map((language, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                        >
                          {language}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  {homestay.host.bio}
                </p>
                <div className="flex gap-3">
                  <a
                    href={`tel:${homestay.contact.phone}`}
                    className="flex items-center gap-2 bg-[#005246] text-white px-4 py-2 rounded-lg hover:bg-[#00735f] transition-colors text-sm font-medium flex-1 justify-center"
                  >
                    <Phone className="w-4 h-4" />
                    Call
                  </a>
                  <a
                    href={`mailto:${homestay.contact.email}`}
                    className="flex items-center gap-2 border border-[#005246] text-[#005246] px-4 py-2 rounded-lg hover:bg-[#005246] hover:text-white transition-colors text-sm font-medium flex-1 justify-center"
                  >
                    <Mail className="w-4 h-4" />
                    Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomestayProfile;