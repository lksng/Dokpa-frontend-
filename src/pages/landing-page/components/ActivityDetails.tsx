import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Clock, 
  Users, 
  MapPin, 
  Star, 
  Check, 
  X, 
  Calendar,
  Heart,
  Share2,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { activities } from '../../../data/activities';
import { useFavoritesStore } from '../../../store';

const ActivityDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'overview' | 'schedule' | 'included'>('overview');

  const activity = activities.find(a => a.id === parseInt(id || '0'));
  
  // Use favorites store
  const { toggleFavorite, isFavorite } = useFavoritesStore();

  if (!activity) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Activity not found</h1>
          <button
            onClick={() => navigate('/')}
            className="bg-[#005246] text-white px-6 py-2 rounded-lg hover:bg-[#004536]"
          >
            Back to Activities
          </button>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % activity.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + activity.images.length) % activity.images.length);
  };

  const handleBookNow = () => {
    navigate(`/booking/${activity.id}`);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800';
      case 'Moderate': return 'bg-yellow-100 text-yellow-800';
      case 'Challenging': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-gray-600 hover:text-[#005246] transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Activities</span>
          </button>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={() => activity && toggleFavorite('activities', activity.id)}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              <Heart 
                size={20} 
                className={`${activity && isFavorite('activities', activity.id) ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} 
              />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Share2 size={20} className="text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Image Gallery */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-200">
              <img
                src={activity.images[currentImageIndex]}
                alt={activity.title}
                className="w-full h-full object-cover"
              />
              
              {activity.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white"
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}
              
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {activity.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full ${
                      index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Thumbnail Gallery */}
            {activity.images.length > 1 && (
              <div className="flex gap-2 mt-4 overflow-x-auto">
                {activity.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 ${
                      index === currentImageIndex ? 'border-[#005246]' : 'border-transparent'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${activity.title} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Activity Info */}
          <div>
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{activity.title}</h1>
                <div className="flex items-center gap-2 text-gray-600 mb-2">
                  <MapPin size={16} />
                  <span>{activity.location}</span>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Star size={16} fill="currentColor" className="text-yellow-400" />
                    <span>4.8 (125 reviews)</span>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(activity.difficulty)}`}>
                    {activity.difficulty}
                  </span>
                </div>
              </div>
            </div>

            <p className="text-gray-600 mb-6">{activity.fullDescription}</p>

            {/* Key Details */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-3 p-4 bg-white rounded-lg border">
                <Clock className="text-[#005246]" size={24} />
                <div>
                  <div className="font-medium">Duration</div>
                  <div className="text-sm text-gray-600">{activity.duration}</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-4 bg-white rounded-lg border">
                <Users className="text-[#005246]" size={24} />
                <div>
                  <div className="font-medium">Group Size</div>
                  <div className="text-sm text-gray-600">{activity.groupSize}</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-4 bg-white rounded-lg border">
                <Calendar className="text-[#005246]" size={24} />
                <div>
                  <div className="font-medium">Best Time</div>
                  <div className="text-sm text-gray-600">{activity.bestTime}</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-4 bg-white rounded-lg border">
                <MapPin className="text-[#005246]" size={24} />
                <div>
                  <div className="font-medium">Location</div>
                  <div className="text-sm text-gray-600">{activity.location}</div>
                </div>
              </div>
            </div>

            {/* Pricing and Booking */}
            <div className="bg-white p-6 rounded-lg border">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-3xl font-bold text-[#005246]">${activity.price}</span>
                  <span className="text-gray-600"> per person</span>
                </div>
              </div>
              
              <button
                onClick={handleBookNow}
                className="w-full bg-[#005246] text-white py-3 rounded-lg font-medium hover:bg-[#004536] transition-colors"
              >
                Book Now
              </button>
              
              <p className="text-xs text-gray-500 text-center mt-2">
                Free cancellation up to 24 hours before the activity
              </p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg border overflow-hidden">
          <div className="border-b">
            <nav className="flex">
              {[
                { key: 'overview', label: 'Overview' },
                { key: 'schedule', label: 'Schedule' },
                { key: 'included', label: 'Included/Excluded' },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key as typeof activeTab)}
                  className={`px-6 py-4 font-medium border-b-2 transition-colors ${
                    activeTab === tab.key
                      ? 'border-[#005246] text-[#005246]'
                      : 'border-transparent text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">About This Activity</h3>
                  <p className="text-gray-600">{activity.fullDescription}</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3">Requirements</h3>
                  <ul className="space-y-2">
                    {activity.requirements.map((req, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="text-[#005246] mt-0.5 flex-shrink-0" size={16} />
                        <span className="text-gray-600">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'schedule' && (
              <div>
                <h3 className="text-lg font-semibold mb-4">Daily Schedule</h3>
                <div className="space-y-4">
                  {activity.schedule.map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-20 text-sm font-medium text-[#005246]">
                        {item.time}
                      </div>
                      <div className="text-gray-600">{item.activity}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'included' && (
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-green-700">What's Included</h3>
                  <ul className="space-y-2">
                    {activity.included.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="text-green-600 mt-0.5 flex-shrink-0" size={16} />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-red-700">What's Not Included</h3>
                  <ul className="space-y-2">
                    {activity.notIncluded.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <X className="text-red-600 mt-0.5 flex-shrink-0" size={16} />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityDetails;