import { MapPin, Clock, Navigation } from 'lucide-react';
import { Tour } from '../data/tours';

interface TourCardProps {
  tour: Tour;
  onViewDetails: (tourId: number) => void;
}

export default function TourCard({ tour, onViewDetails }: TourCardProps) {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800';
      case 'Moderate': return 'bg-yellow-100 text-yellow-800';
      case 'Challenging': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48 overflow-hidden">
        <img
          src={tour.image}
          alt={tour.name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
        {tour.featured && (
          <span className="absolute top-3 right-3 bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
            Featured
          </span>
        )}
        <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(tour.difficulty)}`}>
          {tour.difficulty}
        </span>
      </div>

      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{tour.name}</h3>

        <div className="flex items-center text-gray-600 mb-2">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="text-sm">{tour.location}</span>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{tour.description}</p>

        <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            <span>{tour.duration}</span>
          </div>
          <div className="flex items-center">
            <Navigation className="w-4 h-4 mr-1" />
            <span>{tour.distance}</span>
          </div>
        </div>

        <div className="mb-4">
          <p className="text-xs text-gray-500 mb-1">Transportation Options:</p>
          <div className="flex flex-wrap gap-1">
            {tour.transportation.map((transport, index) => (
              <span
                key={index}
                className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded"
              >
                {transport}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <p className="text-xs text-gray-500 mb-1">Major Attractions:</p>
          <div className="flex flex-wrap gap-1">
            {tour.attractions.slice(0, 3).map((attraction, index) => (
              <span
                key={index}
                className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
              >
                {attraction}
              </span>
            ))}
            {tour.attractions.length > 3 && (
              <span className="text-xs text-gray-500 px-2 py-1">
                +{tour.attractions.length - 3} more
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between border-t pt-4">
          <div>
            <p className="text-xs text-gray-500">Starting from</p>
            <p className="text-2xl font-bold text-gray-900">₹{tour.price.toLocaleString()}</p>
          </div>
          <button
            onClick={() => onViewDetails(tour.id)}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}
