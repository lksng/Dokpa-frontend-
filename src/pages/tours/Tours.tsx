import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Clock, Star, Navigation, CheckCircle } from 'lucide-react';

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

interface TransportOption {
  id: string;
  name: string;
  description: string;
  price: number;
  capacity: number;
}

// Destinations array
const destinations: Destination[] = [
  {
    id: 1,
    name: "Tawang Monastery",
    location: "Tawang, Arunachal Pradesh",
    image: "/src/assets/twgmonastery.jpg",
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
    image: "/src/assets/bomlaimg.jpg",
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
    image: "/src/assets/madurilk.jpg",
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
    image: "/src/assets/mandala.jpg",
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
    image: "/src/assets/jungwaterfall1.jpg",
    rating: 4.5,
    duration: "1 day",
    price: "₹1,500",
    description: "Visit the breathtaking Jung Waterfall, surrounded by lush forests and serene landscapes.",
    highlights: ["Scenic Waterfall", "Trekking Trails", "Nature Photography"]
  },
  {
    id: 7,
    name: "Mago",
    location: "Tawang, Arunachal Pradesh",
    image: "/src/assets/mago.jpg",
    rating: 4.5,
    duration: "1 day",
    price: "₹1,500",
    description: "Explore the serene Mago area, home to the historic Mago Monastery and surrounded by pristine rivers.",
    highlights: ["Mago Monastery", "Riverside Views", "Nature Walks"]
  }
];

// Transport options
const transportOptions: TransportOption[] = [
  { id: '1', name: 'Private Car', description: 'Comfortable AC car', price: 2000, capacity: 4 },
  { id: '2', name: 'Mini Bus', description: 'For groups', price: 5000, capacity: 12 },
  { id: '3', name: 'Shared Taxi', description: 'Budget option', price: 1000, capacity: 4 },
];

const Tours: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const destination = destinations.find((d) => d.id === parseInt(id!));

  const [selectedTransport, setSelectedTransport] = useState<TransportOption | null>(null);
  const [numPeople, setNumPeople] = useState(1);

  if (!destination) return <div>Destination not found</div>;

  const calculateTotal = () => {
    let total = parseInt(destination.price.replace(/[^0-9]/g, '')) * numPeople;
    if (selectedTransport) total += selectedTransport.price;
    return total;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-blue-600 hover:text-blue-700 font-semibold"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Destinations
          </button>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative h-96">
        <img src={destination.image} alt={destination.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <h1 className="text-4xl font-bold text-white">{destination.name}</h1>
          <div className="flex items-center text-white mt-2">
            <MapPin className="w-5 h-5 mr-2" /> {destination.location}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Quick Info */}
          <div className="bg-white rounded-lg shadow-md p-6 flex justify-around">
            <div className="text-center">
              <Clock className="w-6 h-6 mx-auto text-blue-600 mb-1" />
              <p className="font-semibold">{destination.duration}</p>
              <p className="text-gray-600 text-sm">Duration</p>
            </div>
            <div className="text-center">
              <Navigation className="w-6 h-6 mx-auto text-blue-600 mb-1" />
              <p className="font-semibold">Varies</p>
              <p className="text-gray-600 text-sm">Distance</p>
            </div>
            <div className="text-center">
              <Star className="w-6 h-6 mx-auto text-yellow-400 mb-1" />
              <p className="font-semibold">{destination.rating}</p>
              <p className="text-gray-600 text-sm">Rating</p>
            </div>
          </div>

          {/* Description */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">About This Destination</h2>
            <p className="text-gray-700 mb-4">{destination.description}</p>

            <h3 className="text-xl font-bold mb-3">Highlights</h3>
            <ul className="space-y-2">
              {destination.highlights.map((h, idx) => (
                <li key={idx} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" /> {h}
                </li>
              ))}
            </ul>
          </div>

          {/* Transportation Options */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">Transportation Options</h2>
            <div className="space-y-4">
              {transportOptions.map((t) => (
                <div key={t.id} className="flex justify-between items-center border p-3 rounded-lg">
                  <div>
                    <h4 className="font-semibold">{t.name}</h4>
                    <p className="text-gray-600 text-sm">{t.description}</p>
                    <p className="text-xs text-gray-500">Capacity: {t.capacity}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">₹{t.price}</p>
                    <button
                      className={`mt-1 px-3 py-1 rounded-lg ${
                        selectedTransport?.id === t.id
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                      onClick={() => setSelectedTransport(t)}
                    >
                      Select
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Booking Sidebar */}
        <div className="lg:col-span-1 bg-white rounded-lg shadow-md p-6 sticky top-24 space-y-4">
          <h3 className="text-2xl font-bold">Book This Tour</h3>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Number of People</label>
            <input
              type="number"
              min={1}
              max={20}
              value={numPeople}
              onChange={(e) => setNumPeople(parseInt(e.target.value))}
              className="w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <p className="font-semibold text-gray-700 mt-2">Total: ₹{calculateTotal()}</p>
          </div>

          <button
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 font-semibold"
            onClick={() => alert(`Booking confirmed for ${destination.name}!\nTotal: ₹${calculateTotal()}`)}
          >
            Confirm Booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tours;
